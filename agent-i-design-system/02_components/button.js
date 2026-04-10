/**
 * 02_components/button.js
 * Atomic Button component for the Agent-i Design System.
 */

export default function button(opts = {}) {
  const { esc, icon } = window.DS_UTILS || { esc: (s) => s, icon: null };

  const toBool = (val) => (
    val === true ||
    val === 'true' ||
    val === 1 ||
    val === '1' ||
    val === 'on'
  );
  
  // 1. Props Extraction
  const label = opts.label || '';
  const priority = opts.priority || opts.variant || 'solid-primary';
  const size = opts.size || 'medium';
  const state = opts.state || 'enabled';
  const iconOnly = toBool(opts.iconOnly ?? opts.icon_only);
  const leftIcon = opts.leftIcon || '';
  const rightIcon = opts.rightIcon || '';
  const showLeftIcon = toBool(opts.showLeftIcon ?? opts.show_left_icon);
  const showRightIcon = toBool(opts.showRightIcon ?? opts.show_right_icon);
  const swapIcon = opts.swapIcon || opts.swap_icon || '';
  const iconSize = opts.iconSize || opts.icon_size || size;

  // 2. Class Construction
  const iconOnlyCls = iconOnly ? ' icon-only' : '';
  const stateCls = (state !== 'enabled') ? ` state-${state}` : '';
  const disabledAttr = (state === 'disabled') ? ' disabled' : '';
  const cls = `btn btn--${size} btn--${priority}${iconOnlyCls}${stateCls}`;
  
  // 3. Icon Utilities (using official DS_UTILS)
  const renderIcon = (id) => icon ? icon(id, { size: iconSize, className: 'btn-icon' }) : '';
  const resolveIconId = (fallbackId = '') => swapIcon || fallbackId;
  
  // 4. Build Inner Content
  let inner = '';
  if (iconOnly) {
    const iconToUse = resolveIconId(leftIcon || rightIcon || 'star_solid_full');
    inner = renderIcon(iconToUse);
  } else {
    const iconL = showLeftIcon && (swapIcon || leftIcon) ? renderIcon(resolveIconId(leftIcon)) : '';
    const labelHtml = label ? `<span>${esc(label)}</span>` : '';
    const iconR = showRightIcon && (swapIcon || rightIcon) ? renderIcon(resolveIconId(rightIcon)) : '';
    inner = `${iconL}${labelHtml}${iconR}`;
  }

  // 5. Build Final HTML
  const aria = opts.ariaLabel ? `aria-label="${esc(opts.ariaLabel)}"` : '';
  return `<button class="${cls}"${disabledAttr} ${aria}>${inner}</button>`;
}
