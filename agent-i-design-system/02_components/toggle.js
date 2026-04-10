export default function toggle(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const size = opts.size || 'medium';
  const state = opts.state || 'enabled';
  const selected = !!opts.selected;
  const label = opts.buttonLabel || 'Label';

  const selCls = selected ? ' selected' : '';
  const stateCls = state !== 'enabled' ? ` state-${state}` : '';
  const disabledAttr = state === 'disabled' ? ' disabled' : '';
  const cls = `toggle-btn toggle-btn--${size}${selCls}${stateCls}`;
  const iconSize = size === 'medium' ? 20 : 24;
  const chkIcon = selected
    ? icon('check_solid', { size: iconSize, color: 'currentColor', className: 'toggle-btn-icon' })
    : '';

  const html = `<button class="${cls}"${disabledAttr}>${chkIcon}${esc(label)}</button>`;
  return html;
}