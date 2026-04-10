/**
 * 02_components/chip.js
 */
export default function chip(props = {}) {
  const { esc, icon } = window.DS_UTILS || { esc: (s) => s, icon: null };
  const toBool = (val) => (
    val === true ||
    val === 'true' ||
    val === 1 ||
    val === '1' ||
    val === 'on'
  );

  const label = props.label || props.chipLabel || 'Chip';
  const variant = props.variant || 'solid-rounded-rect';
  const size = props.size || 'medium';
  const state = props.state || 'enabled';
  const selected = toBool(props.selected);
  const showLeftIcon = toBool(props.showLeftIcon ?? props.show_left_icon);
  const showRightIcon = toBool(props.showRightIcon ?? props.show_right_icon);
  const leftIcon = props.leftIcon || '';
  const rightIcon = props.rightIcon || '';
  const swapIcon = props.swapIcon || props.swap_icon || '';
  const className = props.className || '';

  const selectedCls = selected ? ' selected' : '';
  const stateCls = state !== 'enabled' ? ` state-${state}` : '';
  const disabledAttr = state === 'disabled' ? ' disabled' : '';
  const cls = `chip chip--${size} chip--${variant}${selectedCls}${stateCls} ${className}`.trim();

  const resolveIconId = (fallbackId = '') => swapIcon || fallbackId;
  const renderIcon = (id) => icon ? icon(id, { size: 16, className: 'chip-icon' }) : '';

  const left = showLeftIcon
    ? renderIcon(resolveIconId(leftIcon || 'plus_solid'))
    : '';
  const right = showRightIcon
    ? renderIcon(resolveIconId(rightIcon || 'plus_solid'))
    : '';
  return `<button class="${cls}"${disabledAttr} type="button">
    ${left}
    <span class="chip-label">${esc(label)}</span>
    ${right}
  </button>`;
}