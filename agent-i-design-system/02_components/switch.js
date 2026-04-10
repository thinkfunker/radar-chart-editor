/**
 * 02_components/switch.js
 */
export default function sw(props = {}) {
  const { selected = false, state = 'enabled', className = '' } = props;
  const onCls = selected ? ' sw--on' : '';
  const stCls = state !== 'enabled' ? ` state-${state}` : '';
  const cls = `sw${onCls}${stCls} ${className}`;

  return `<div class="${cls}"><div class="sw__thumb"></div><div class="sw__layer"></div></div>`;
}