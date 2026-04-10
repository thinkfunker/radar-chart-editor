/**
 * Sidebar Component (DS Viewer)
 */
export default function sidebar(navData) {
  const { esc } = window.DS_UTILS;
  if (!navData) return '';
  
  // Transform flat NAV_REGISTRY into logical sections
  const sections = {
    'Foundations': [],
    'Components': [],
    'Blocks': []
  };

  Object.values(navData).forEach(item => {
    if (item.id.startsWith('comp-')) sections['Components'].push(item);
    else if (item.id.startsWith('blk-')) sections['Blocks'].push(item);
    else sections['Foundations'].push(item);
  });

  let html = `
    <div class="sidebar-logo" style="padding:var(--spacing-600);border-bottom:var(--border-width-100) solid var(--color-background-tertiary);margin-bottom:var(--spacing-400);">
      <h1 style="font-size:var(--font-size-112);font-weight:700;color: var(--color-content-primary);margin:0;">Agent-i DS</h1>
      <p style="font-size:var(--sizing-300);color:var(--color-content-tertiary);margin:var(--spacing-100) 0 0;">Design System Viewer</p>
    </div>
  `;

  for (const [title, items] of Object.entries(sections)) {
    if (items.length === 0) continue;
    
    html += `<div class="sidebar-section" style="padding:var(--spacing-400) var(--sizing-600) var(--spacing-200);font-size:var(--font-size-0687);font-weight:700;color: var(--color-content-tertiary);text-transform:uppercase;letter-spacing:0.04em;">${esc(title)}</div>`;
    html += `<ul class="sidebar-nav" style="list-style:none;padding:0;margin:0;">`;
    
    items.forEach(item => {
      html += `
        <li style="margin:0 var(--spacing-200);">
          <a href="#${item.id}" style="display:flex;align-items:center;gap:var(--spacing-300);padding:var(--space-lg) var(--spacing-400);font-size:var(--text-size-xs);color:var(--color-content-secondary);text-decoration:none;border-radius:var(--border-radius-200);transition:all 0.2s;">
            <span class="icon-dot" style="width:var(--radius-xs);height:var(--radius-xs);border-radius:50%;background:var(--color-background-tertiary);"></span>
            ${esc(item.label)}
          </a>
        </li>
      `;
    });
    
    html += `</ul>`;
  }

  return html;
}