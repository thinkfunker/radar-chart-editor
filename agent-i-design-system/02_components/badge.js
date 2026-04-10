/**
 * Badge Component
 * @param {object} opts
 * @param {string} opts.type     - 'number' | 'dot' (default 'number')
 * @param {string} opts.priority - 'primary' | 'secondary' | 'alert' | 'white' (default 'primary')
 * @param {string} opts.size     - 'small' | 'medium' | 'large' (default 'small')
 * @param {string|number} opts.count - number to display (type='number')
 */
export default function badge(opts = {}) {
  const { esc } = window.DS_UTILS;
  const type     = opts.type     || 'number';
  const priority = opts.priority || 'primary';
  const size     = opts.size     || 'small';
  const count    = opts.count    !== undefined ? opts.count : '';
  return `<span class="badge badge--${type} badge--${size} badge--${priority}">${type === 'number' ? esc(count) : ''}</span>`;
}