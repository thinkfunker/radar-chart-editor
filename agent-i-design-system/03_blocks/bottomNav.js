/**
 * Bottom Nav Component
 * @param {object[]} items  - array of nav item descriptors
 * @param {string}   items[].label    - nav item label
 * @param {string}   items[].icon     - SVG string
 * @param {boolean}  items[].active   - is this the active tab?
 * @param {string}   items[].badge    - badge count string
 * @param {string}   items[].ariaLabel
 */
export default function bottomNav(items = []) {
  const { esc } = window.DS_UTILS;
  const navItems = items.map(item => {
    const active = item.active;
    const iconColor = active ? 'var(--color-content-key)' : 'var(--color-content-tertiary)';
    const labelClass = active ? 'bnav-item__label--active' : '';
    const iconClass  = active ? 'bnav-item__icon bnav-item__icon--active' : 'bnav-item__icon';
    const aria = item.ariaLabel ? `aria-label="${esc(item.ariaLabel)}"` : '';
    const badgeHtml = item.badge ? `<span class="badge badge--number badge--small badge--primary" style="position:absolute;top:var(--sizing-100);right:var(--sizing-200);">${esc(item.badge)}</span>` : '';
    return `<button class="bnav-item" ${active ? 'aria-current="page"' : ''} ${aria} style="display:flex;flex-direction:column;align-items:center;gap:var(--border-width-300);cursor:pointer;padding:var(--spacing-100) var(--spacing-300);min-width:var(--sizing-1100);min-height:var(--sizing-1100);justify-content:center;position:relative;background:transparent;border:none;"><div class="${iconClass}" style="color:${iconColor};">${item.icon || ''}</div><span class="bnav-item__label ${labelClass}" style="font-size:var(--font-size-0687);">${esc(item.label || '')}</span>${badgeHtml}</button>`;
  }).join('\n');
  return `<nav class="ds-bottom-nav" aria-label="メインナビゲーション" style="position:sticky;bottom:0;background: var(--color-background-white);border-top:var(--border-width-100) solid var(--color-background-tertiary);display:flex;justify-content:space-around;padding:var(--spacing-200) 0 var(--spacing-500);z-index:10;">${navItems}</nav>`;
}