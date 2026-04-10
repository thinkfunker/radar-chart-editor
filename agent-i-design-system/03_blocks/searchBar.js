/**
 * Search Bar Component
 * @param {object} opts
 * @param {string} opts.placeholder - placeholder text
 * @param {string} opts.bg          - background variant: 'white' | 'gray' (default 'gray')
 */
export default function searchBar(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const ph = opts.placeholder || 'AIに検索...';
  const bgClass = (opts.bg === 'white') ? 'aitinput--bg-white' : '';
  return `<div style="padding:var(--space-lg) var(--sizing-400) var(--spacing-300);"><div class="aitinput ${bgClass}" style="border-radius:var(--border-radius-300);background: var(--color-background-secondary);"><div class="aitinput__inner" style="flex-direction:row;align-items:center;padding:var(--spacing-200) var(--spacing-300);"><div class="aitinput__field" style="flex:1;display:flex;align-items:center;gap:var(--spacing-200);border:none;background:transparent;padding:0;">${icon('search_solid', { size: 18, color: 'var(--color-content-tertiary)' })}<span class="aitinput__placeholder">${esc(ph)}</span></div><button class="aitinput__send aitinput__send--on">${icon('paper-plane_solid', { size: 16, color: 'var(--color-content-primary)' })}</button></div></div></div>`;
}