/**
 * Tag Component
 * @param {object} opts
 * @param {string} opts.tagLabel
 * @param {string} opts.label
 * @param {boolean} opts.leftIcon
 * @param {string} opts.priority  - 'primary'|'secondary'|'tertiary'
 * @param {string} opts.shape     - 'rectengle'|'circle'
 * @param {string} opts.size      - 'small'|'medium'
 * @param {string} opts.style     - 'gradient'|'solid'|'outline'
 * @param {string} opts.variant   - legacy variant
 */
export default function tag(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const label = opts.tagLabel || opts.label || 'Label';
  const leftIcon = opts.leftIcon !== false;
  let size = opts.size || 'small';
  let shape = opts.shape || (opts.pill === false ? 'rectengle' : 'circle');
  let style = opts.style || 'gradient';
  let priority = opts.priority || 'primary';

  if (opts.variant) {
    const v = opts.variant;
    if (v.includes('gradient')) style = 'gradient';
    if (v.includes('outline')) style = 'outline';
    if (v.includes('solid')) style = 'solid';
    if (v.includes('primary')) priority = 'primary';
    if (v.includes('secondary')) priority = 'secondary';
    if (v.includes('tertiary')) priority = 'tertiary';
    if (v === 'white') {
      style = 'solid';
      priority = 'tertiary';
    }
  }

  const cls = [
    'tag',
    `tag--size-${size}`,
    `tag--shape-${shape}`,
    `tag--style-${style}`,
    `tag--priority-${priority}`
  ].join(' ');

  const iconSize = size === 'medium' ? 16 : 12;
  const left = leftIcon ? `<span class="tag__icon">${icon('ai-check_primary', { size: iconSize, color: 'currentColor' })}</span>` : '';
  return `<span class="${cls}">${left}<span class="tag__label">${esc(label)}</span></span>`;
}