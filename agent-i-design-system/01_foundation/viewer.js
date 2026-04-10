/**
 * 01_foundation/viewer.js — Design System Viewer Core Logic
 */

let currentComp = 'button';
let currentTheme = 'light';

const NAV_REGISTRY = {
  'colors': { id: 'colors', label: 'Colors', jsonPath: 'agent-i-design-system/01_foundation/colors.json' },
  'typography': { id: 'typography', label: 'Typography', jsonPath: 'agent-i-design-system/01_foundation/typography.json' },
  'icons': { id: 'icons', label: 'Icons', jsonPath: 'agent-i-design-system/01_foundation/icons.json' },
  'common': { id: 'common', label: 'Common', jsonPath: 'agent-i-design-system/01_foundation/common.json' },
  'comp-button': { id: 'comp-button', label: 'Button', jsonPath: 'agent-i-design-system/02_components/button.json' },
  'comp-badge': { id: 'comp-badge', label: 'Badge', jsonPath: 'agent-i-design-system/02_components/badge.json' },
  'comp-toggle': { id: 'comp-toggle', label: 'Toggle', jsonPath: 'agent-i-design-system/02_components/toggle.json' },
  'comp-message': { id: 'comp-message', label: 'Message', jsonPath: 'agent-i-design-system/02_components/message.json' },
  'blk-accordion': { id: 'blk-accordion', label: 'Accordion', jsonPath: 'agent-i-design-system/02_components/accordion.json' }
};

let activeOpts = {};
let activeDef = null;

document.addEventListener('ds:ready', () => {
  initViewer();
});

window.addEventListener('hashchange', () => {
  const pageId = window.location.hash.replace('#', '') || 'colors';
  showPage(pageId);
});

function initViewer() {
  if (window.DS && DS.sidebar) {
    document.getElementById('sidebar-mount').innerHTML = DS.sidebar(NAV_REGISTRY);
    const initialPage = window.location.hash.replace('#', '') || 'colors';
    showPage(initialPage);
  } else {
    setTimeout(initViewer, 100);
  }
}

const showPage = async (pageId) => {
  const item = NAV_REGISTRY[pageId];
  if (!item) return;

  try {
    const res = await fetch(`${item.jsonPath}?v=${Date.now()}`);
    const def = await res.json();
    activeDef = def;
    
    // Reset options for components
    if (item.id.startsWith('comp-') || item.id.startsWith('blk-')) {
      activeOpts = {};
      if (def.controls) {
        def.controls.forEach(c => { activeOpts[c.id] = c.default; });
      }
    }
    if (document.getElementById('topbar-mount') && window.DS && DS.topbar) {
      document.getElementById('topbar-mount').innerHTML = DS.topbar({
        title: def.title || item.label,
        subtitle: item.id.startsWith('comp-') ? 'Component' : (item.id.startsWith('blk-') ? 'Block' : 'Foundation')
      });
    }

    if (item.id.startsWith('comp-') || item.id.startsWith('blk-')) {
      renderComponentPage(item.id, def);
    } else {
      renderFoundationPage(item.id, def);
    }
    
    // Auto-scroll to top
    window.scrollTo(0, 0);
  } catch (e) {
    console.error('Page load failed:', e);
  }
};

function renderFoundationPage(id, def) {
  const mount = document.getElementById('page-viewport');
  mount.innerHTML = `<div class="content" style="padding:var(--spacing-1000);max-width:calc(var(--sizing-100) * 250);margin:0 auto;">
                       <h1 style="font-size:var(--sizing-800);font-weight:700;margin-bottom:var(--spacing-600);">${def.title}</h1>
                       <div class="foundation-body">${def._rawHtml || ''}</div>
                     </div>`;
  
  const container = mount.querySelector('.foundation-body');
  if (!container) return;

  // Post-render initialization for specific pages
  if (id === 'colors') {
    const panelsMount = document.getElementById('color-panels');
    if (panelsMount && window.DS_UTILS && DS_UTILS.renderColorPanels) {
      panelsMount.innerHTML = DS_UTILS.renderColorPanels(def.primitives || def.brand || def);
    }
  } else if (id === 'typography') {
    const tableMount = document.getElementById('typography-table-mount') || container;
    if (window.DS_UTILS && DS_UTILS.renderTypography) {
      const typoHtml = DS_UTILS.renderTypography(def);
      if (document.getElementById('typography-table-mount')) {
        document.getElementById('typography-table-mount').innerHTML = typoHtml;
      } else {
        container.innerHTML += typoHtml;
      }
    }
  } else if (id === 'icons') {
    const gridMount = document.getElementById('icon-grid-mount') || container;
    if (window.DS_UTILS && DS_UTILS.renderIconGrid) {
      const gridHtml = DS_UTILS.renderIconGrid(def);
      if (document.getElementById('icon-grid-mount')) {
        document.getElementById('icon-grid-mount').innerHTML = gridHtml;
      } else {
        container.innerHTML += gridHtml;
      }
    }
  }
}

function renderComponentPage(id, def) {
  const key = id.replace('comp-', '').replace('blk-', '');
  currentComp = key;
  
  const mount = document.getElementById('page-viewport');
  mount.innerHTML = `
    <div class="section" style="padding:var(--spacing-1000);">
      <div class="comp-layout" style="display:flex;flex-direction:column;gap:calc(var(--spacing-100) * 12);">
        <div class="comp-preview-panel">
          <div class="playground-wrap" style="background:var(--color-background-white);border-radius:var(--border-radius-400);border:var(--border-width-100) solid var(--color-background-tertiary);overflow:hidden;box-shadow:var(--shadow-2);">
            <div class="playground-preview" id="pg-active-preview" style="padding:var(--spacing-1000);display:flex;justify-content:center;align-items:center;min-height:calc(var(--sizing-100) * 50);background:var(--color-background-secondary);"></div>
            <div class="playground-controls" id="comp-controls-mount" style="padding:var(--spacing-600);border-top:var(--border-width-100) solid var(--color-background-tertiary);background:var(--color-background-white);"></div>
            <div class="playground-code" style="padding:var(--spacing-600);background:var(--color-content-primary);color:var(--color-content-tertiary);font-family:monospace;font-size:var(--sizing-300);">
              <div class="code-panel-header" style="display:flex;justify-content:space-between;margin-bottom:var(--spacing-300);"><span style="color:var(--color-content-inverted);font-weight:600;">HTML SOURCE</span><button onclick="window.DS_UTILS.copyText(document.getElementById('pg-active-code').textContent)" style="background:none;border:none;color:var(--color-content-key);cursor:pointer;font-weight:600;">Copy</button></div>
              <pre style="margin:0;overflow-x:auto;"><code id="pg-active-code"></code></pre>
            </div>
          </div>
        </div>
        <div class="comp-guide" id="comp-guide-mount"></div>
      </div>
    </div>`;

  if (window.DS && DS.renderPlaygroundControls) {
    document.getElementById('comp-controls-mount').innerHTML = DS.renderPlaygroundControls(key, def);
  }
  
  updatePreview();

  if (window.DS && DS.renderGuidelines) {
    document.getElementById('comp-guide-mount').innerHTML = DS.renderGuidelines(def);
  }
}

// Playground Logic
window.setCtrl = (compKey, optKey, val, btnEl) => {
  activeOpts[optKey] = val;
  if (btnEl) {
    const group = btnEl.closest('.ctrl-group');
    if (group) {
      group.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
    }
  }
  updatePreview();
};

window.setCtrlInput = (compKey, optKey, val) => {
  activeOpts[optKey] = val;
  updatePreview();
};

function updatePreview() {
  if (!currentComp || !activeDef || !window.DS) return;
  const renderFn = DS[currentComp];
  if (typeof renderFn !== 'function') return;

  const html = renderFn(activeOpts);
  document.getElementById('pg-active-preview').innerHTML = html;
  
  // Update code block
  const codeMount = document.getElementById('pg-active-code');
  if (codeMount) {
    codeMount.textContent = html;
  }
}

// Global UI helpers
window.toggleAccordion = (el) => el.classList.toggle('open');
window.copyCode = (key) => {
  const code = document.getElementById('pg-active-code').textContent;
  if (window.DS_UTILS) DS_UTILS.copyText(code);
};
