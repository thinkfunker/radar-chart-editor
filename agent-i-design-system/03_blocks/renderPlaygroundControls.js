/**
 * Playground Controls Renderer (DS Viewer)
 */
export default function renderPlaygroundControls(compKey, playground) {
  const { esc } = window.DS_UTILS;
  if (!playground || !playground.controls) return '';
  
  return playground.controls.map(ctrl => {
    let inputHtml = '';
    
    if (ctrl.type === 'text') {
      inputHtml = `<input type="text" class="ctrl-input" value="${esc(ctrl.default || '')}" oninput="setCtrlInput('${compKey}','${ctrl.id}',this.value)">`;
    } else if (ctrl.type === 'toggle' || ctrl.type === 'select') {
      const options = ctrl.options || [true, false];
      inputHtml = `<div class="ctrl-group">` + options.map(opt => {
        const val = opt === null ? 'null' : opt;
        const labelText = (typeof opt === 'boolean') ? (opt ? 'ON' : 'OFF') : opt;
        const activeCls = (opt === ctrl.default) ? ' active' : '';
        return `<button class="ctrl-btn${activeCls}" onclick="setCtrl('${compKey}','${ctrl.id}',${JSON.stringify(opt)},this)">${esc(labelText)}</button>`;
      }).join('') + `</div>`;
    }

    return `
      <div class="ctrl-row">
        <span class="ctrl-label">${esc(ctrl.label)}</span>
        ${inputHtml}
      </div>
    `;
  }).join('');
}