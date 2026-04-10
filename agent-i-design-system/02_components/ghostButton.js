/**
 * Ghost Button Component
 * @param {object} opts
 * @param {string} opts.label    - button text (optional if icon-only)
 * @param {string} opts.icon     - SVG string (optional)
 * @param {string} opts.priority - 'primary'|'secondary' (default 'secondary')
 * @param {string} opts.size     - 'small'|'medium'|'large' (default 'large')
 * @param {boolean} opts.iconOnly
 * @param {string} opts.ariaLabel
 */
export default function ghostButton(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const priority = opts.priority || 'secondary';
  const size = opts.size || 'large';
  const state = opts.state || 'enabled';
  const label = opts.ghostButtonLabel || opts.label || 'Label';
  const iconOnly = !!opts.iconOnly;
  const showLeftIcon = !!opts.showLeftIcon;
  const showRightIcon = !!opts.showRightIcon;
  const swapIcon = opts.swapIcon || '';

  const iconSize = (size === 'small' || size === 'medium') ? 16 : 24;
  const renderIcon = (id) => icon ? icon(id, { size: iconSize, className: 'ghost-btn-icon' }) : '';
  const iconId = swapIcon || 'plus_solid';
  const leftIcon = showLeftIcon ? renderIcon(iconId) : '';
  const rightIcon = showRightIcon ? renderIcon(iconId) : '';

  const iconCls = iconOnly ? ' icon-only' : '';
  const stateCls = state !== 'enabled' ? ` state-${state}` : '';
  const disabledAttr = state === 'disabled' ? ' disabled' : '';
  const aria = opts.ariaLabel ? `aria-label="${esc(opts.ariaLabel)}"` : '';

  const labelHtml = iconOnly ? '' : `<span class="ghost-btn-label">${esc(label)}</span>`;
  const iconOnlyHtml = iconOnly ? renderIcon(iconId) : '';
  const inner = iconOnly ? iconOnlyHtml : `${leftIcon}${labelHtml}${rightIcon}`;

  return `<button class="ghost-btn ghost-btn--${size} ghost-btn--${priority}${iconCls}${stateCls}"${disabledAttr} ${aria}>${inner}</button>`;
}