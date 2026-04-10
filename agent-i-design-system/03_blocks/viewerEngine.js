/**
 * 03_blocks/viewerEngine.js — Design System Viewer Core Logic (Integrated)
 */

export function initViewer(NAV_REGISTRY) {
  let activeOpts = {};
  let activeDef = null;
  let currentComp = '';

  // Expose Controls Globally
  window.setCtrl = (compKey, optKey, val, btnEl) => {
    activeOpts[optKey] = val;
    if (btnEl) {
      const group = btnEl.closest('.ctrl-group');
      if (group) {
        group.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
        btnEl.classList.add('active');
      }
    }
    updatePreview(currentComp, activeDef, activeOpts);
  };

  window.setCtrlInput = (compKey, optKey, val) => {
    activeOpts[optKey] = val;
    updatePreview(currentComp, activeDef, activeOpts);
  };

  window.toggleAccordion = (el) => el.classList.toggle('open');
  window.copyCode = () => {
    const code = document.getElementById('pg-active-code').textContent;
    if (window.DS_UTILS) window.DS_UTILS.copyText(code);
  };

  // Main Show Page Logic
  const showPage = async (pageId) => {
    const item = NAV_REGISTRY[pageId];
    if (!item) return;

    try {
      const res = await fetch(`${item.jsonPath}?v=${Date.now()}`);
      const def = await res.json();
      activeDef = def;
      currentComp = item.id.replace('comp-', '').replace('blk-', '');
      
      // Update Topbar
      if (document.getElementById('topbar-mount') && window.DS && DS.topbar) {
        document.getElementById('topbar-mount').innerHTML = DS.topbar({
          title: def.title || item.label,
          subtitle: item.id.startsWith('comp-') ? 'Component' : (item.id.startsWith('blk-') ? 'Block' : 'Foundation')
        });
      }

      if (item.id.startsWith('comp-') || item.id.startsWith('blk-')) {
        // Reset options
        activeOpts = {};
        const controls = def.controls || def.guidelines?.playground?.controls;
        if (controls) {
          controls.forEach(c => { activeOpts[c.id] = c.default; });
        }
        renderComponentPage(currentComp, def);
      } else {
        renderFoundationPage(item.id, def);
      }
      
      window.scrollTo(0, 0);
    } catch (e) {
      console.error('Page load failed:', e);
    }
  };

  function renderFoundationPage(id, def) {
    const mount = document.getElementById('page-viewport');
    mount.innerHTML = `<div class="content" style="padding:var(--spacing-1000);max-width:calc(var(--sizing-100) * 250);margin:0 auto;">
                         <h1 style="font-size:var(--sizing-800);font-weight:700;margin-bottom:var(--spacing-600);">${def.title || ''}</h1>
                         <div class="foundation-body">${def._rawHtml || ''}</div>
                       </div>`;
    
    const container = mount.querySelector('.foundation-body');
    if (!container || !window.DS_UTILS) return;

    if (id === 'colors') {
      const panelsMount = document.getElementById('color-panels');
      if (panelsMount && DS_UTILS.renderColorPanels) {
        panelsMount.innerHTML = DS_UTILS.renderColorPanels(def);
      }
    } else if (id === 'typography') {
      const tableMount = document.getElementById('typography-table-mount') || container;
      if (DS_UTILS.renderTypography) {
        tableMount.innerHTML = DS_UTILS.renderTypography(def);
      }
    } else if (id === 'icons') {
      const gridMount = document.getElementById('icon-grid-mount') || container;
      if (DS_UTILS.renderIconGrid) {
        gridMount.innerHTML = DS_UTILS.renderIconGrid(def);
      }
    }
  }

  function renderComponentPage(id, def) {
    const mount = document.getElementById('page-viewport');
    mount.innerHTML = `
      <div class="section" style="padding:var(--spacing-1000);">
        <div class="comp-layout" style="display:flex;flex-direction:column;gap:calc(var(--spacing-100) * 12);">
          <div class="comp-preview-panel">
            <div class="playground-wrap" style="background: var(--color-background-white);border-radius:var(--border-radius-400);border:var(--border-width-100) solid var(--color-background-tertiary);overflow:hidden;box-shadow: var(--shadow-3);">
              <div class="playground-preview" id="pg-active-preview" style="padding:var(--spacing-1000);display:flex;justify-content:center;align-items:center;min-height:calc(var(--sizing-100) * 50);background:var(--color-background-secondary);"></div>
              <div class="playground-controls" id="comp-controls-mount" style="padding:var(--spacing-600);border-top:var(--border-width-100) solid var(--color-background-tertiary);background: var(--color-background-white);"></div>
              <div class="playground-code" style="padding:var(--spacing-600);background:var(--color-content-primary);color:var(--color-content-tertiary);font-family:monospace;font-size:var(--sizing-300);">
                <div class="code-panel-header" style="display:flex;justify-content:space-between;margin-bottom:var(--spacing-300);"><span style="color: var(--color-content-inverted);font-weight:600;">HTML SOURCE</span><button onclick="window.copyCode()" style="background:none;border:none;color: var(--color-content-key);cursor:pointer;font-weight:600;">Copy</button></div>
                <pre style="margin:0;overflow-x:auto;"><code id="pg-active-code"></code></pre>
              </div>
            </div>
          </div>
          <div class="comp-guide" id="comp-guide-mount"></div>
        </div>
      </div>`;

    if (window.DS && DS.renderPlaygroundControls) {
      const controlsMount = document.getElementById('comp-controls-mount');
      const controls = def.controls || def.guidelines?.playground?.controls;
      if (controlsMount && controls) {
        controlsMount.innerHTML = DS.renderPlaygroundControls(id, { ...def, controls });
      } else if (controlsMount) {
        controlsMount.innerHTML = '<p style="color: var(--color-content-tertiary);font-size:var(--sizing-300);">No controls available for this component.</p>';
      }
    }
    
    updatePreview(id, def, activeOpts);

    if (window.DS && DS.renderGuidelines) {
      document.getElementById('comp-guide-mount').innerHTML = DS.renderGuidelines(def);
    }
  }

  function updatePreview(id, def, opts) {
    if (!id || !def || !window.DS) return;
    const renderFn = DS[id];
    if (typeof renderFn !== 'function') return;

    const html = renderFn(opts);
    const previewMount = document.getElementById('pg-active-preview');
    const codeMount = document.getElementById('pg-active-code');
    
    if (previewMount) previewMount.innerHTML = html;
    if (codeMount) codeMount.textContent = html;
  }

  // Routing
  window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.replace('#', '') || 'colors';
    showPage(pageId);
  });

  // Initial Load with Retry
  const start = () => {
    if (document.getElementById('sidebar-mount') && window.DS && DS.sidebar) {
      document.getElementById('sidebar-mount').innerHTML = DS.sidebar(NAV_REGISTRY);
      const initialPage = window.location.hash.replace('#', '') || 'colors';
      showPage(initialPage);
    } else {
      setTimeout(start, 50); // Retry every 50ms until DS is ready
    }
  };
  
  start();
}