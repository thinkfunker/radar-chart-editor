/**
 * Topbar Component (DS Viewer)
 */
export default function topbar(opts = {}) {
  const { esc } = window.DS_UTILS;
  const title = opts.title || 'Agent-i DS';
  const subtitle = opts.subtitle || 'Atomic Tier';
  return `
    <div class="topbar-content">
      <div class="topbar-title-wrap">
        <h2 class="topbar-title" id="page-title">${esc(title)}</h2>
        <span class="topbar-chip" id="page-badge">${esc(subtitle)}</span>
      </div>
    </div>
  `;
}