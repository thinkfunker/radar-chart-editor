/**
 * 02_components/checkbox.js
 */
export default function checkbox(props = {}) {
  const { checked = false, label = '', state = 'enabled', className = '' } = props;
  const chkCls = checked ? ' cb--on' : '';
  const stCls = state !== 'enabled' ? ` state-${state}` : '';
  const cls = `cb${chkCls}${stCls} ${className}`;

  return `
    <div class="${cls}">
      <div class="cb__box"><div class="cb__inner"></div></div>
      ${label ? `<span class="cb__label">${label}</span>` : ''}
    </div>`;
}