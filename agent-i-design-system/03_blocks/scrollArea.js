/**
 * Scroll Area Component
 * @param {string[]} children
 * @param {object}   opts
 * @param {string}   opts.paddingBottom - default 'calc(var(--sizing-100) * 20)'
 * @param {string}   opts.background - optional background color
 * @param {string}   opts.className - optional class name
 */
export default function scrollArea(children, opts = {}) {
  const { join } = window.DS_UTILS;
  const pb = opts.paddingBottom || 'calc(var(--sizing-100) * 20)';
  const bg = opts.background ? `background:${opts.background};` : '';
  const className = opts.className ? ` class="${opts.className}"` : '';
  return `<div${className} style="flex:1;overflow-y:auto;padding-bottom:${pb};${bg}">${join(children)}</div>`;
}
