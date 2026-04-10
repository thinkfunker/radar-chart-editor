/**
 * Divider Component
 * @param {object} opts
 * @param {string} opts.padding - CSS padding shorthand (default 'var(--sizing-500) var(--sizing-400) 0')
 */
export default function divider(opts = {}) {
  const pad = opts.padding || 'var(--sizing-500) var(--sizing-400) 0';
  return `<div style="padding:${pad};"><hr class="divider"></div>`;
}