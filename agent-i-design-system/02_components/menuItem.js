export default function menuItem(opts = {}) {
  const { esc, icon } = window.DS_UTILS || {};
  if (!icon) return '';

  const label = opts.label || 'Label';
  const withIcon = opts.icon !== false;
  const state = opts.state || 'enabled';
  const divider = opts.divider !== false;
  const labelTone = opts.labelTone || 'default';
  const iconName = opts.iconName || (withIcon ? 'image-alt_outline' : '');

  const stateClass = state === 'enabled' ? '' : ` mn__item--${state}`;
  const iconClass = withIcon ? ' mn__item--icon' : '';

  const iconColor = opts.iconColor || (
    state === 'disabled'
      ? 'var(--color-content-disabled)'
      : (labelTone === 'alert' ? 'var(--color-content-alert)' : 'var(--color-content-tertiary)')
  );
  const labelClass = state === 'disabled'
    ? ' mn__label--disabled'
    : (labelTone === 'alert' ? ' mn__label--alert' : '');

  const iconSvg = withIcon && iconName ? icon(iconName, { size: 20, color: iconColor }) : '';

  const inner = withIcon
    ? `<span class="mn__icon">${iconSvg}</span><span class="mn__label${labelClass}">${esc ? esc(label) : label}</span>`
    : `<span class="mn__label${labelClass}">${esc ? esc(label) : label}</span>`;

  return `
    <div class="mn__item${stateClass}${iconClass}">
      ${inner}
    </div>
    ${divider ? '<div class="mn__divider"></div>' : ''}
  `;
}
