let initialized = false;

function initRadarApp() {
  if (initialized) return;
  initialized = true;

  const app = document.getElementById('app');
  if (!app) return;
  try {
  const headerHtml = window.DS && window.DS.sectionHeader
    ? window.DS.sectionHeader({ title: 'Radar Chart Editor' })
    : '<div class="local-header">Radar Chart Editor</div>';

    app.innerHTML = `
      ${headerHtml}
      <div class="radar-layout">
        <section class="chart-wrap">
          <div class="chart-title">
            <h3>Radar Preview</h3>
            <div class="chart-meta" id="chartMeta"></div>
          </div>
          <div class="canvas-shell">
            <canvas id="radarCanvas"></canvas>
          </div>
        </section>
        <section class="panel" id="panel"></section>
      </div>
    `;
  } catch (err) {
    app.innerHTML = `
      <div class="local-header">Radar Chart Editor</div>
      <pre class="error-box">${String(err)}</pre>
    `;
    return;
  }

  const panel = document.getElementById('panel');
  const canvas = document.getElementById('radarCanvas');
  const meta = document.getElementById('chartMeta');
  if (!panel || !canvas || !meta) {
    app.innerHTML += '<pre class="error-box">App mount failed: missing elements.</pre>';
    return;
  }
  const ctx = canvas.getContext('2d');

  const state = {
    points: 6,
    series: 2,
    lineWidth: 2,
    pointSize: 5,
    min: 0,
    max: 100,
    levels: 5,
    fillAlpha: 0.18,
    pointShape: 'circle',
    showPoints: true,
    pointStrokeColor: '#ffffff',
    pointStrokeWidth: 1,
    gridStyle: 'polygon',
    showAxis: true,
    labelCase: 'upper',
    labelOffset: 1.12,
    useGradientFill: false,
    seriesAlphas: [],
    bgColor: '#eef7fc',
    axisColor: 'rgba(148, 163, 184, 0.6)',
    textColor: '#0f172a',
    gradientStart: '#ffffff',
    gradientEnd: '#000000',
    labels: [],
    data: [],
    colors: ['#2563EB', '#F97316', '#22C55E', '#EC4899']
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const presetKey = 'radar-style-presets-v1';
  const savedPresets = JSON.parse(localStorage.getItem(presetKey) || '[]');
  if (savedPresets[0]) {
    Object.assign(state, savedPresets[0]);
    if (Array.isArray(savedPresets[0].labels)) {
      state.labels = savedPresets[0].labels.slice();
    }
    if (Array.isArray(savedPresets[0].data)) {
      state.data = savedPresets[0].data.map((row) => row.slice());
    }
    if (Array.isArray(savedPresets[0].seriesAlphas)) {
      state.seriesAlphas = savedPresets[0].seriesAlphas.slice();
    }
    if (state.max <= state.min) state.max = state.min + 1;
  }

  function ensureData() {
    const { points, series } = state;
    if (state.labels.length !== points) {
      const nextLabels = [];
      for (let i = 0; i < points; i += 1) {
        nextLabels.push(state.labels[i] || `Item ${i + 1}`);
      }
      state.labels = nextLabels;
    }

    if (state.data.length !== series) {
      const nextData = [];
      for (let s = 0; s < series; s += 1) {
        const prev = state.data[s] || [];
        const row = [];
        for (let p = 0; p < points; p += 1) {
          row.push(typeof prev[p] === 'number' ? prev[p] : 60);
        }
        nextData.push(row);
      }
      state.data = nextData;
    }

    if (state.colors.length < series) {
      const palette = ['#2563EB', '#F97316', '#22C55E', '#EC4899', '#14B8A6'];
      while (state.colors.length < series) {
        state.colors.push(palette[state.colors.length % palette.length]);
      }
    }

    if (state.seriesAlphas.length !== series) {
      const next = [];
      for (let s = 0; s < series; s += 1) {
        next.push(typeof state.seriesAlphas[s] === 'number' ? state.seriesAlphas[s] : state.fillAlpha);
      }
      state.seriesAlphas = next;
    }
  }

  function updateCanvasSize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function hexToRgba(hex, alpha) {
    const clean = hex.replace('#', '');
    const value = clean.length === 3
      ? clean.split('').map((c) => c + c).join('')
      : clean;
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function renderChart() {
    updateCanvasSize();
    canvas.style.setProperty('--radar-bg', state.bgColor);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;
    const levels = state.levels;
    const range = state.max - state.min || 1;

    ctx.save();
    ctx.translate(centerX, centerY);

    ctx.strokeStyle = state.axisColor;
    ctx.lineWidth = 1;

    for (let level = 1; level <= levels; level += 1) {
      const r = (radius * level) / levels;
      ctx.beginPath();
      if (state.gridStyle === 'circle') {
        ctx.arc(0, 0, r, 0, Math.PI * 2);
      } else {
        for (let i = 0; i < state.points; i += 1) {
          const angle = (Math.PI * 2 * i) / state.points - Math.PI / 2;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
      }
      ctx.stroke();
    }

    for (let i = 0; i < state.points; i += 1) {
      const angle = (Math.PI * 2 * i) / state.points - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (state.showAxis) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      const label = state.labelCase === 'upper'
        ? state.labels[i].toUpperCase()
        : state.labels[i].toLowerCase();
      ctx.fillStyle = state.textColor;
      ctx.font = '12px Pretendard, sans-serif';
      ctx.textAlign = x >= 0 ? 'left' : 'right';
      ctx.textBaseline = y >= 0 ? 'top' : 'bottom';
      ctx.fillText(label, x * state.labelOffset, y * state.labelOffset);
    }

    for (let s = 0; s < state.series; s += 1) {
      const color = state.colors[s];
      const values = state.data[s];
      ctx.beginPath();
      for (let i = 0; i < state.points; i += 1) {
        const angle = (Math.PI * 2 * i) / state.points - Math.PI / 2;
        const v = clamp(values[i], state.min, state.max);
        const normalized = (v - state.min) / range;
        const x = Math.cos(angle) * radius * normalized;
        const y = Math.sin(angle) * radius * normalized;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      if (state.useGradientFill) {
        const gradient = ctx.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius);
        gradient.addColorStop(0, hexToRgba(state.gradientStart, state.seriesAlphas[s] * 0.2));
        gradient.addColorStop(1, hexToRgba(state.gradientEnd, state.seriesAlphas[s]));
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = hexToRgba(color, state.seriesAlphas[s]);
      }
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = state.lineWidth;
      ctx.stroke();

      if (state.showPoints) {
        for (let i = 0; i < state.points; i += 1) {
          const angle = (Math.PI * 2 * i) / state.points - Math.PI / 2;
          const v = clamp(values[i], state.min, state.max);
          const normalized = (v - state.min) / range;
          const x = Math.cos(angle) * radius * normalized;
          const y = Math.sin(angle) * radius * normalized;
          ctx.beginPath();
          if (state.pointShape === 'square') {
            const size = state.pointSize * 2;
            ctx.rect(x - size / 2, y - size / 2, size, size);
          } else {
            ctx.arc(x, y, state.pointSize, 0, Math.PI * 2);
          }
          ctx.fillStyle = color;
          ctx.fill();
          ctx.strokeStyle = state.pointStrokeColor;
          ctx.lineWidth = state.pointStrokeWidth;
          ctx.stroke();
        }
      }
    }

    ctx.restore();
    meta.textContent = `${state.points} points · ${state.series} series · ${state.min}-${state.max}`;
  }

  function renderPanel() {
    ensureData();

    const seriesColorRows = state.data.map((_, idx) => {
      return `
        <div class="color-row">
          <label>Series ${idx + 1}</label>
          <input type="color" data-color="${idx}" value="${state.colors[idx]}" />
        </div>
      `;
    }).join('');

    const headerCells = state.data.map((_, idx) => `<th>Series ${idx + 1}</th>`).join('');
    const bodyRows = state.labels.map((label, pIdx) => {
      const valueCells = state.data.map((seriesValues, sIdx) => {
        return `
          <td>
            <input type="number" min="${state.min}" max="${state.max}" step="1" data-value="${sIdx}:${pIdx}" value="${seriesValues[pIdx]}" />
          </td>
        `;
      }).join('');

      return `
        <tr>
          <td>
            <input type="text" data-label="${pIdx}" value="${label}" />
          </td>
          ${valueCells}
        </tr>
      `;
    }).join('');

    panel.innerHTML = `
      <div class="controls">
        <h3>Controls</h3>
        <div class="control-row">
          <label>Point Count (Axes)</label>
          <input type="number" min="3" max="12" step="1" data-control="points" value="${state.points}" />
        </div>
        <div class="control-row">
          <label>Series Count</label>
          <input type="number" min="1" max="5" step="1" data-control="series" value="${state.series}" />
        </div>
        <div class="control-row">
          <label>Line Thickness</label>
          <div class="inline">
            <input type="range" min="1" max="8" step="1" data-control="lineWidth" value="${state.lineWidth}" />
            <span>${state.lineWidth}px</span>
          </div>
        </div>
        <div class="control-row">
          <label>Point Size</label>
          <div class="inline">
            <input type="range" min="0" max="10" step="1" data-control="pointSize" value="${state.pointSize}" />
            <span>${state.pointSize}px</span>
          </div>
        </div>
        <div class="control-row">
          <label>Grid Style</label>
          <select data-control="gridStyle">
            <option value="polygon" ${state.gridStyle === 'polygon' ? 'selected' : ''}>Polygon Rings</option>
            <option value="circle" ${state.gridStyle === 'circle' ? 'selected' : ''}>Circular Rings</option>
          </select>
        </div>
        <div class="control-row">
          <label>Show Axis Lines</label>
          <select data-control="showAxis">
            <option value="true" ${state.showAxis ? 'selected' : ''}>On</option>
            <option value="false" ${!state.showAxis ? 'selected' : ''}>Off</option>
          </select>
        </div>
        <div class="control-row">
          <label>Show Points</label>
          <select data-control="showPoints">
            <option value="true" ${state.showPoints ? 'selected' : ''}>On</option>
            <option value="false" ${!state.showPoints ? 'selected' : ''}>Off</option>
          </select>
        </div>
        <div class="control-row">
          <label>Point Stroke</label>
          <div class="inline">
            <input type="color" data-control="pointStrokeColor" value="${state.pointStrokeColor}" />
            <input type="number" min="0" max="4" step="1" data-control="pointStrokeWidth" value="${state.pointStrokeWidth}" />
          </div>
        </div>
        <div class="control-row">
          <label>Label Case</label>
          <select data-control="labelCase">
            <option value="upper" ${state.labelCase === 'upper' ? 'selected' : ''}>Uppercase</option>
            <option value="lower" ${state.labelCase === 'lower' ? 'selected' : ''}>Lowercase</option>
          </select>
        </div>
        <div class="control-row">
          <label>Label Offset</label>
          <div class="inline">
            <input type="range" min="1.0" max="1.4" step="0.02" data-control="labelOffset" value="${state.labelOffset}" />
            <span>${state.labelOffset.toFixed(2)}x</span>
          </div>
        </div>
        <div class="control-row">
          <label>Value Range (min / max)</label>
          <div class="inline">
            <input type="number" min="-1000" max="1000" step="1" data-control="min" value="${state.min}" />
            <input type="number" min="-1000" max="1000" step="1" data-control="max" value="${state.max}" />
          </div>
        </div>
        <div class="control-row">
          <label>Grid Levels</label>
          <input type="number" min="3" max="8" step="1" data-control="levels" value="${state.levels}" />
        </div>
        <div class="control-row">
          <label>Fill Opacity</label>
          <div class="inline">
            <input type="range" min="0" max="0.6" step="0.02" data-control="fillAlpha" value="${state.fillAlpha}" />
            <span>${Math.round(state.fillAlpha * 100)}%</span>
          </div>
        </div>
        <div class="control-row">
          <label>Fill Gradient</label>
          <select data-control="useGradientFill">
            <option value="false" ${!state.useGradientFill ? 'selected' : ''}>Off</option>
            <option value="true" ${state.useGradientFill ? 'selected' : ''}>On</option>
          </select>
        </div>
        <div class="control-row">
          <label>Point Shape</label>
          <select data-control="pointShape">
            <option value="circle" ${state.pointShape === 'circle' ? 'selected' : ''}>Circle</option>
            <option value="square" ${state.pointShape === 'square' ? 'selected' : ''}>Square</option>
          </select>
        </div>
      </div>
      <div class="controls">
        <h3>Series Colors</h3>
        <div class="series-colors">
          ${seriesColorRows}
        </div>
        <div class="series-colors">
          <div class="color-row">
            <label>Background</label>
            <input type="color" data-control="bgColor" value="${state.bgColor}" />
          </div>
          <div class="color-row">
            <label>Axis Lines</label>
            <input type="color" data-control="axisColor" value="${state.axisColor}" />
          </div>
          <div class="color-row">
            <label>Text</label>
            <input type="color" data-control="textColor" value="${state.textColor}" />
          </div>
          <div class="color-row">
            <label>Gradient Start</label>
            <input type="color" data-control="gradientStart" value="${state.gradientStart}" />
          </div>
          <div class="color-row">
            <label>Gradient End</label>
            <input type="color" data-control="gradientEnd" value="${state.gradientEnd}" />
          </div>
        </div>
        <div class="series-colors">
          ${state.seriesAlphas.map((alpha, idx) => `
            <div class="color-row">
              <label>Series ${idx + 1} Opacity</label>
              <input type="range" min="0" max="0.6" step="0.02" data-series-alpha="${idx}" value="${alpha}" />
            </div>
          `).join('')}
        </div>
      </div>
      <div class="controls">
        <h3>Values</h3>
        <table class="values-table">
          <thead>
            <tr>
              <th>Label</th>
              ${headerCells}
            </tr>
          </thead>
          <tbody>
            ${bodyRows}
          </tbody>
        </table>
        <div class="control-row">
          <label>Radar Chart Code</label>
          <textarea id="chartCode" rows="8" readonly></textarea>
          <div class="inline">
            <button type="button" id="exportBtn">Export Code</button>
            <button type="button" id="copyBtn">Copy</button>
          </div>
        </div>
      </div>
    `;

    panel.querySelectorAll('[data-control]').forEach((input) => {
      input.addEventListener('input', () => {
        const key = input.dataset.control;
        const value = input.type === 'range' || input.type === 'number'
          ? Number(input.value)
          : input.value;
        if (key === 'points') state.points = clamp(value, 3, 12);
        if (key === 'series') state.series = clamp(value, 1, 5);
        if (key === 'lineWidth') state.lineWidth = clamp(value, 1, 8);
        if (key === 'pointSize') state.pointSize = clamp(value, 0, 10);
        if (key === 'min') state.min = value;
        if (key === 'max') state.max = value;
        if (key === 'levels') state.levels = clamp(value, 3, 8);
        if (key === 'fillAlpha') {
          state.fillAlpha = clamp(value, 0, 0.6);
          state.seriesAlphas = state.seriesAlphas.map(() => state.fillAlpha);
        }
        if (key === 'pointShape') state.pointShape = value;
        if (key === 'gridStyle') state.gridStyle = value;
        if (key === 'showAxis') state.showAxis = value === 'true';
        if (key === 'showPoints') state.showPoints = value === 'true';
        if (key === 'pointStrokeColor') state.pointStrokeColor = value;
        if (key === 'pointStrokeWidth') state.pointStrokeWidth = clamp(value, 0, 4);
        if (key === 'labelCase') state.labelCase = value;
        if (key === 'labelOffset') state.labelOffset = clamp(value, 1.0, 1.4);
        if (key === 'useGradientFill') state.useGradientFill = value === 'true';
        if (key === 'bgColor') state.bgColor = value;
        if (key === 'axisColor') state.axisColor = value;
        if (key === 'textColor') state.textColor = value;
        if (key === 'gradientStart') state.gradientStart = value;
        if (key === 'gradientEnd') state.gradientEnd = value;
        if (state.max <= state.min) state.max = state.min + 1;
        renderPanel();
        renderChart();
      });
    });

    panel.querySelectorAll('[data-color]').forEach((input) => {
      input.addEventListener('input', () => {
        const idx = Number(input.dataset.color);
        state.colors[idx] = input.value;
        renderChart();
      });
    });

    panel.querySelectorAll('[data-label]').forEach((input) => {
      input.addEventListener('input', () => {
        const idx = Number(input.dataset.label);
        state.labels[idx] = input.value || `Item ${idx + 1}`;
        renderChart();
      });
    });

    panel.querySelectorAll('[data-value]').forEach((input) => {
      input.addEventListener('input', () => {
        const [sIdx, pIdx] = input.dataset.value.split(':').map(Number);
        state.data[sIdx][pIdx] = clamp(Number(input.value), state.min, state.max);
        renderChart();
      });
    });

    panel.querySelectorAll('[data-series-alpha]').forEach((input) => {
      input.addEventListener('input', () => {
        const idx = Number(input.dataset.seriesAlpha);
        state.seriesAlphas[idx] = clamp(Number(input.value), 0, 0.6);
        renderChart();
      });
    });

    const codeArea = panel.querySelector('#chartCode');
    const exportBtn = panel.querySelector('#exportBtn');
    const copyBtn = panel.querySelector('#copyBtn');

    function buildChartCode() {
      const config = {
        labels: state.labels,
        data: state.data,
        colors: state.colors.slice(0, state.series),
        seriesAlphas: state.seriesAlphas,
        min: state.min,
        max: state.max,
        levels: state.levels,
        gridStyle: state.gridStyle,
        showAxis: state.showAxis,
        showPoints: state.showPoints,
        pointShape: state.pointShape,
        pointSize: state.pointSize,
        pointStrokeColor: state.pointStrokeColor,
        pointStrokeWidth: state.pointStrokeWidth,
        labelCase: state.labelCase,
        labelOffset: state.labelOffset,
        useGradientFill: state.useGradientFill,
        bgColor: state.bgColor,
        axisColor: state.axisColor,
        textColor: state.textColor,
        gradientStart: state.gradientStart,
        gradientEnd: state.gradientEnd
      };

      return `const radarConfig = ${JSON.stringify(config, null, 2)};`;
    }

    exportBtn.addEventListener('click', () => {
      codeArea.value = buildChartCode();
    });

    copyBtn.addEventListener('click', async () => {
      try {
        if (!codeArea.value) codeArea.value = buildChartCode();
        await navigator.clipboard.writeText(codeArea.value);
        alert('Code copied.');
      } catch (err) {
        alert('Copy failed.');
      }
    });

    const presets = JSON.parse(localStorage.getItem(presetKey) || '[]');
    const presetArea = document.createElement('div');
    presetArea.className = 'control-row';
    presetArea.innerHTML = `
      <label>Style Presets (max 3)</label>
      <div class="preset-grid">
        <button type="button" data-preset-save="0">Save 1</button>
        <button type="button" data-preset-save="1">Save 2</button>
        <button type="button" data-preset-save="2">Save 3</button>
        <button type="button" data-preset-load="0">Apply 1</button>
        <button type="button" data-preset-load="1">Apply 2</button>
        <button type="button" data-preset-load="2">Apply 3</button>
      </div>
    `;
    panel.querySelector('.controls').appendChild(presetArea);

    function getStyleSnapshot() {
      return {
        labels: state.labels,
        data: state.data,
        lineWidth: state.lineWidth,
        pointSize: state.pointSize,
        min: state.min,
        max: state.max,
        levels: state.levels,
        fillAlpha: state.fillAlpha,
        pointShape: state.pointShape,
        showPoints: state.showPoints,
        pointStrokeColor: state.pointStrokeColor,
        pointStrokeWidth: state.pointStrokeWidth,
        gridStyle: state.gridStyle,
        showAxis: state.showAxis,
        labelCase: state.labelCase,
        labelOffset: state.labelOffset,
        useGradientFill: state.useGradientFill,
        seriesAlphas: state.seriesAlphas.slice(),
        bgColor: state.bgColor,
        axisColor: state.axisColor,
        textColor: state.textColor
      };
    }

    function applyStyleSnapshot(snapshot) {
      Object.assign(state, snapshot);
      ensureData();
      renderPanel();
      renderChart();
    }

    panel.querySelectorAll('[data-preset-save]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.presetSave);
        presets[idx] = getStyleSnapshot();
        localStorage.setItem(presetKey, JSON.stringify(presets.slice(0, 3)));
        alert(`Preset ${idx + 1} saved`);
      });
    });

    panel.querySelectorAll('[data-preset-load]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.presetLoad);
        if (!presets[idx]) {
          alert('No saved preset found.');
          return;
        }
        applyStyleSnapshot(presets[idx]);
      });
    });
  }

  ensureData();
  renderPanel();
  renderChart();
  window.addEventListener('resize', renderChart);
}

document.addEventListener('ds:components-ready', initRadarApp);
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initRadarApp, 500);
});
