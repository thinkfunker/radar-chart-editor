/**
 * Sticky Header Component
 * @param {string[]} children
 * @param {object}   opts
 * @param {string}   opts.background - background color (default 'var(--color-background-white)')
 * @param {boolean}  opts.shadow - show bottom shadow (default true)
 */
export default function stickyHeader(children, opts = {}) {
  const { join } = window.DS_UTILS;
  const bg = opts.background || 'var(--color-background-white)';
  const shadow = opts.shadow !== false ? 'box-shadow:0 var(--border-width-100) 0 var(--color-background-tertiary);' : '';
  return `<div class="ds-sticky-header" style="position:sticky;top:0;z-index:20;background:${bg};${shadow}">${join(children)}</div>`;
}