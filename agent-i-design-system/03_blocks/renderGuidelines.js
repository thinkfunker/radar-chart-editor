/**
 * Guidelines Renderer (DS Viewer)
 */
export default function renderGuidelines(json) {
  const { esc } = window.DS_UTILS;
  if (!json || !json.guidelines) return '';
  const g = json.guidelines;
  if (g._rawHtml) {
    return g._rawHtml;
  }
  let html = '';
  
  // 1. Summary
  if (g.summary) {
    html += `<div class="guide-section" style="margin-bottom:var(--spacing-600)"><div class="guide-title" style="font-size:var(--spacing-400);font-weight:700;margin-bottom:var(--spacing-200)">Summary</div><div class="guide-body" style="font-size:var(--font-size-0875);color:var(--color-content-tertiary);line-height:1.5"><p>${esc(g.summary)}</p></div></div>`;
  } else if (g.purpose) {
    html += `<div class="guide-section" style="margin-bottom:var(--spacing-600)"><div class="guide-title" style="font-size:var(--spacing-400);font-weight:700;margin-bottom:var(--spacing-200)">Purpose</div><div class="guide-body" style="font-size:var(--font-size-0875);color:var(--color-content-tertiary);line-height:1.5"><p>${esc(g.purpose)}</p></div></div>`;
  }

  // 2. Anatomy
  if (g.anatomy) {
    let listHTML = '';
    if (Array.isArray(g.anatomy)) {
      listHTML = g.anatomy.map(a => `<li style="margin-bottom:var(--spacing-100)">${esc(a)}</li>`).join('');
    } else if (typeof g.anatomy === 'object') {
      listHTML = Object.entries(g.anatomy).map(([k,v]) => `<li style="margin-bottom:var(--spacing-100)"><b>${esc(k)}</b>: ${esc(v)}</li>`).join('');
    }
    html += `<div class="guide-section" style="margin-bottom:var(--spacing-600);border-top:var(--border-width-100) solid var(--color-background-tertiary);padding-top:var(--spacing-400)"><div class="guide-title" style="font-size:var(--spacing-400);font-weight:700;margin-bottom:var(--spacing-200)">Anatomy</div><div class="guide-body" style="font-size:var(--font-size-0875);color:var(--color-content-tertiary);line-height:1.6"><ul style="padding-left:var(--sizing-500)">${listHTML}</ul></div></div>`;
  }

  // 3. Priority System
  if (g.priority_system) {
    const listHTML = Object.entries(g.priority_system).map(([k,v]) => `<li style="margin-bottom:var(--spacing-200)"><b>${esc(k)}</b><br/><span style="color:var(--color-content-tertiary)">${esc(v).replace(/\\n|\n/g, '<br/>')}</span></li>`).join('');
    html += `<div class="guide-section" style="margin-bottom:var(--spacing-600);border-top:var(--border-width-100) solid var(--color-background-tertiary);padding-top:var(--spacing-400)"><div class="guide-title" style="font-size:var(--spacing-400);font-weight:700;margin-bottom:var(--spacing-200)">Priority System</div><div class="guide-body" style="font-size:var(--font-size-0875);color:var(--color-content-tertiary);line-height:1.6"><ul style="padding-left:var(--sizing-500)">${listHTML}</ul></div></div>`;
  }

  // 4. Style Options
  if (g.style) {
    let sHTML = '';
    for (const [key, value] of Object.entries(g.style)) {
      const title = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
      sHTML += `<div style="margin-bottom:var(--spacing-300)"><b>${esc(title)}</b><ul style="padding-left:var(--spacing-500)">`;
      if (Array.isArray(value)) {
        sHTML += value.map(s => `<li>${esc(s)}</li>`).join('');
      } else if (typeof value === 'object') {
        sHTML += Object.entries(value).map(([k,v]) => `<li><b>${esc(k)}</b>: ${esc(v)}</li>`).join('');
      } else {
        sHTML += `<li>${esc(value)}</li>`;
      }
      sHTML += `</ul></div>`;
    }
    if (sHTML) {
      html += `<div class="guide-section" style="margin-bottom:var(--spacing-600);border-top:var(--border-width-100) solid var(--color-background-tertiary);padding-top:var(--spacing-400)"><div class="guide-title" style="font-size:var(--spacing-400);font-weight:700;margin-bottom:var(--spacing-200)">Style Options</div><div class="guide-body" style="font-size:var(--font-size-0875);color:var(--color-content-tertiary);line-height:1.6">${sHTML}</div></div>`;
    }
  }

  // 5. Usage Guidelines
  if (g.usage_guidelines) {
    html += `<div class="guide-section" style="margin-bottom:var(--spacing-600);border-top:var(--border-width-100) solid var(--color-background-tertiary);padding-top:var(--spacing-400)"><div class="guide-title" style="font-size:var(--spacing-400);font-weight:700;margin-bottom:var(--spacing-200)">Usage Guidelines</div><div class="guide-body" style="font-size:var(--font-size-0875);color:var(--color-content-tertiary);line-height:1.6"><ul style="padding-left:var(--sizing-500)">${Object.entries(g.usage_guidelines).map(([k,v]) => `<li style="margin-bottom:var(--spacing-100)"><b>${esc(k)}</b>: ${esc(v)}</li>`).join('')}</ul></div></div>`;
  }

  // 6. Do & Don't
  if (g.do_dont) {
    let doHTML = '';
    if (g.do_dont.do && g.do_dont.do.length) {
      doHTML += `<div style="margin-bottom:var(--spacing-300)"><b>Do</b><ul style="list-style:none;padding-left:0;margin-top:var(--spacing-100)">` + g.do_dont.do.map(s=>`<li style="margin-bottom:var(--spacing-100);color: var(--color-content-success)">✅ ${esc(s).replace(/^💡 /, '')}</li>`).join('') + `</ul></div>`;
    }
    if (g.do_dont.dont && g.do_dont.dont.length) {
      doHTML += `<div><b>Don't</b><ul style="list-style:none;padding-left:0;margin-top:var(--spacing-100)">` + g.do_dont.dont.map(s=>`<li style="margin-bottom:var(--spacing-100);color: var(--color-content-alert)">❌ ${esc(s).replace(/^🚫 /, '')}</li>`).join('') + `</ul></div>`;
    }
    html += `<div class="guide-section" style="margin-bottom:var(--spacing-600);border-top:var(--border-width-100) solid var(--color-background-tertiary);padding-top:var(--spacing-400)"><div class="guide-title" style="font-size:var(--spacing-400);font-weight:700;margin-bottom:var(--spacing-200)">Do & Don't</div><div class="guide-body" style="font-size:var(--font-size-0875);line-height:1.6">${doHTML}</div></div>`;
  }
  
  return html;
}