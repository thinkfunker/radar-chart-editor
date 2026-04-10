/**
 * 01_foundation/utils.js — Design System Core Utilities & Renderers
 */

const DS_UTILS = (() => {
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function join(arr) {
    if (!arr) return '';
    if (!Array.isArray(arr)) return String(arr);
    return arr.filter(Boolean).join('\n');
  }

  function copyText(text) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied: ${text}`);
    });
  }

  function showToast(msg) {
    let toast = document.getElementById('ds-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ds-toast';
      toast.style = 'position:fixed;bottom:var(--sizing-600);left:50%;transform:translateX(-50%);background:#17181a;color:#fff;padding:var(--spacing-200) var(--spacing-400);border-radius:var(--border-radius-200);font-size:var(--font-size-0875);z-index:9999;box-shadow:0 var(--spacing-100) var(--spacing-300) var(--color-border-secondary);transition:opacity 0.3s;opacity:0;';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 2000);
  }

  // --- Foundation Renderers ---

  function renderColorPanels(data) {
    if (!data) return '';
    let html = '';
    
    // Handle Primitives (Object of Arrays)
    if (data.primitives) {
      html += '<div class="section-header"><h2>Primitive Palette</h2></div>';
      for (const [colorName, hexList] of Object.entries(data.primitives)) {
        html += `<div class="color-section" style="margin-bottom:var(--spacing-800);">
                   <h3 style="font-size:var(--font-size-0875);color:var(--color-content-tertiary);margin-bottom:var(--spacing-300);text-transform:capitalize;">${colorName}</h3>
                   <div style="display:grid;grid-template-columns:repeat(10, 1fr);gap:var(--spacing-100);">`;
        hexList.forEach((hex, idx) => {
          html += `<div onclick="window.DS_UTILS.copyText('${hex}')" style="cursor:pointer;flex:1;">
                     <div style="height:var(--sizing-1000);background:${hex};border-radius:var(--border-radius-100);border:var(--border-width-100) solid rgba(0,0,0,0.05);"></div>
                     <div style="font-size:var(--text-size-xxs);color:#999;text-align:center;margin-top:var(--spacing-100);">${idx * 10}</div>
                   </div>`;
        });
        html += `</div></div>`;
      }
    }

    // Generic metadata helper for token cards
    const renderTokenCard = (token, hex) => {
      return `<div class="color-card" onclick="window.DS_UTILS.copyText('${hex}')" style="cursor:pointer;background:#fff;padding:var(--spacing-300);border-radius:var(--border-radius-300);border:var(--border-width-100) solid #eeeff2;display:flex;align-items:center;gap:var(--spacing-300);transition:all 0.2s;">
                <div style="width:var(--sizing-1000);height:var(--sizing-1000);border-radius:var(--border-radius-200);background:${hex};border:var(--border-width-100) solid rgba(0,0,0,0.05);flex-shrink:0;"></div>
                <div style="overflow:hidden;">
                  <div style="font-size:var(--text-size-xs);font-weight:600;color:#17181a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${token}</div>
                  <div style="font-size:var(--font-size-0687);color:var(--color-content-tertiary);font-family:monospace;">${hex}</div>
                </div>
              </div>`;
    };

    // Handle Semantic/Brand (Arrays of Objects)
    if (data.semantic) {
      for (const [key, list] of Object.entries(data.semantic)) {
        html += `<div class="section-header" style="margin-top:calc(var(--spacing-100) * 12);"><h2>Semantic — ${key.charAt(0).toUpperCase() + key.slice(1)}</h2></div>
                 <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(var(--sizing-100) * 50), 1fr));gap:var(--spacing-400);">
                   ${list.map(item => renderTokenCard(item.token, item.hex)).join('')}
                 </div>`;
      }
    }

    if (data.brand) {
      for (const [key, list] of Object.entries(data.brand)) {
        html += `<div class="section-header" style="margin-top:calc(var(--spacing-100) * 12);"><h2>Brand — ${key.charAt(0).toUpperCase() + key.slice(1)}</h2></div>
                 <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(var(--sizing-100) * 50), 1fr));gap:var(--spacing-400);">
                   ${list.map(item => renderTokenCard(item.token, item.hex)).join('')}
                 </div>`;
      }
    }

    return html;
  }

  function renderTypography(data) {
    if (!data || !data.styles) return '';
    let html = `<div class="typo-table-wrap" style="overflow-x:auto;">
                  <table style="width:100%;border-collapse:collapse;font-size:var(--font-size-0875);color:#17181a;text-align:left;">
                    <thead style="background:#f8f9fa;border-bottom:var(--border-width-200) solid #eeeff2;">
                      <tr>
                        <th style="padding:var(--spacing-300) var(--spacing-400);">Style Name</th>
                        <th style="padding:var(--spacing-300) var(--spacing-400);">Preview</th>
                        <th style="padding:var(--spacing-300) var(--spacing-400);">Details</th>
                      </tr>
                    </thead>
                    <tbody>`;
    
    data.styles.forEach(item => {
      const styleStr = `font-size:${item.size}px; font-weight:${item.weight}; line-height:${item.lineHeight || '1.5'}; letter-spacing:${item.letterSpacing || '0'}em;`;
      html += `<tr style="border-bottom:var(--border-width-100) solid #eeeff2;">
                 <td style="padding:var(--spacing-500) var(--spacing-400);vertical-align:top;font-family:monospace;font-size:var(--sizing-300);color:var(--color-content-tertiary);">${item.name}</td>
                 <td style="padding:var(--spacing-500) var(--spacing-400);vertical-align:top;">
                   <div style="${styleStr}white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:calc(var(--sizing-100) * 100);">The quick brown fox jumps over the lazy dog.</div>
                 </td>
                 <td style="padding:var(--spacing-500) var(--spacing-400);vertical-align:top;font-size:var(--sizing-300);color:var(--color-content-tertiary);line-height:1.6;">
                   Size: ${item.size}px<br/>Weight: ${item.weight}${item.lineHeight ? `<br/>Line: ${item.lineHeight}` : ''}
                 </td>
               </tr>`;
    });
    
    html += `</tbody></table></div>`;
    return html;
  }

  function renderIconGrid(data, filter = '') {
    if (!data || !data.icons) return '';
    const filtered = data.icons.filter(i => i.id.includes(filter.toLowerCase()) || i.name.includes(filter.toLowerCase()));
    let html = `<div class="icon-grid" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(var(--sizing-100) * 25), 1fr));gap:var(--spacing-400);">`;
    
    filtered.forEach(i => {
      html += `<div class="icon-card" onclick="window.DS_UTILS.copyText('${i.id}')" style="display:flex;flex-direction:column;align-items:center;padding:var(--spacing-400);background:#fff;border-radius:var(--border-radius-300);border:var(--border-width-100) solid #eeeff2;cursor:pointer;transition:all 0.2s;">
                 ${icon(i.id, { size: 32, color: 'var(--color-text-primary)' })}
                 <span style="font-size:var(--font-size-0687);color:var(--color-content-tertiary);margin-top:var(--spacing-300);text-align:center;word-break:break-all;">${i.name}</span>
               </div>`;
    });
    html += `</div>`;
    return html;
  }

  const STAR_FILLED = icon('star_solid_full', { size: 20, color: 'var(--color-content-warning)', className: 'score__star' });
  const STAR_EMPTY  = icon('star_outline', { size: 20, color: 'var(--color-background-tertiary)', className: 'score__star' });

  function renderStars(rating = 5, max = 5, opts = {}) {
    const size = opts.size || 20;
    const className = opts.className || 'score__star';
    const filledColor = opts.filledColor || 'var(--color-content-warning)';
    const emptyColor = opts.emptyColor || 'var(--color-background-tertiary)';
    const halfColor = opts.halfColor || filledColor;
    const fullIcon = icon('star_solid_full', { size, color: filledColor, className });
    const halfIcon = icon('star_solid_half', { size, color: halfColor, className });
    const emptyIcon = icon('star_outline', { size, color: emptyColor, className });

    let fullCount = Math.floor(rating);
    let frac = rating - fullCount;
    let hasHalf = frac >= 0.25 && frac < 0.75;
    if (frac >= 0.75) {
      fullCount += 1;
      hasHalf = false;
    }
    if (fullCount > max) fullCount = max;

    let stars = '';
    for (let i = 0; i < max; i++) {
      if (i < fullCount) {
        stars += fullIcon;
      } else if (hasHalf) {
        stars += halfIcon;
        hasHalf = false;
      } else {
        stars += emptyIcon;
      }
    }
    return stars;
  }

  // --- Common Icons (Local Assets) ---

  const AI_STAR_SVG = (size = 16) =>
    icon('star_solid_full', { size, color: 'var(--color-content-key)' });

  const SEND_SVG = (size = 16) =>
    icon('paper-plane_solid', { size, color: 'currentColor' });

  const BACK_SVG = (size = 20) =>
    icon('chevron-left_solid', { size, color: 'currentColor' });

  const MENU_SVG = (size = 20) =>
    icon('bars_solid', { size, color: 'currentColor' });

  const SEARCH_SVG = (size = 20) =>
    icon('search_solid', { size, color: 'currentColor' });

  const HEART_SVG = (size = 16) =>
    icon('heart_solid', { size, color: 'currentColor' });

  function hydrateIcons(root = document) {
    if (!root || !root.querySelectorAll) return;
    const nodes = root.querySelectorAll('[data-ds-icon]');
    nodes.forEach((node) => {
      const name = node.getAttribute('data-ds-icon');
      if (!name) return;
      const sizeAttr = node.getAttribute('data-ds-size');
      const colorAttr = node.getAttribute('data-ds-color');
      const classAttr = node.getAttribute('data-ds-class');
      const size = sizeAttr ? parseInt(sizeAttr, 10) : undefined;
      const color = colorAttr || undefined;
      const className = classAttr || node.className || '';
      node.outerHTML = icon(name, { size, color, className });
    });
  }

  function icon(name, opts = {}) {
    const size = opts.size || 24;
    const color = opts.color || 'currentColor';
    const cls = opts.className || '';
    
    let path = `/icons/${name}.svg`;
    const registry = window.DS_ICON_REGISTRY ? window.DS_ICON_REGISTRY.icons : null;
    if (registry) {
      const entry = registry.find(i => i.id === name);
      if (entry && entry.path) path = entry.path;
    }
    if (!path.startsWith('/')) path = `/${path}`;

    const isGradient = name.includes('gradient');
    const style = isGradient 
      ? `background-image: url(${path}); background-size: contain;`
      : `background-color: ${color}; -webkit-mask-image: url(${path}); mask-image: url(${path}); -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-size: contain; mask-size: contain;`;

    return `<span class="ds-icon ds-icon--${name} ${cls}" style=\"display: inline-block; width: ${size}px; height: ${size}px; ${style}\" aria-hidden=\"true\"></span>`;
  }

  return { 
    esc, join, copyText, showToast, 
    renderColorPanels, renderTypography, renderIconGrid,
    renderStars, STAR_FILLED, STAR_EMPTY, icon, hydrateIcons,
    AI_STAR_SVG, SEND_SVG, BACK_SVG, MENU_SVG, SEARCH_SVG, HEART_SVG
  };
})();

if (typeof window !== 'undefined') window.DS_UTILS = DS_UTILS;
