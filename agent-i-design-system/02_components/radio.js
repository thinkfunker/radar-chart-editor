/**
 * 02_components/radio.js
 */
export default function radio(props = {}) {
  const {
    selected: selectedProp,
    checked,
    label = 'Label',
    showLabel = true,
    state = 'enabled',
    className = '',
  } = props;
  const selected = typeof selectedProp === 'boolean' ? selectedProp : !!checked;
  const selectedCls = selected ? ' radio-wrap--selected' : '';
  const disabledCls = state === 'disabled' ? ' radio-wrap--disabled' : '';
  const stateCls = ['hovered', 'focused', 'pressed'].includes(state) ? ` state-${state}` : '';
  const cls = `radio-wrap${selectedCls}${disabledCls}${stateCls} ${className}`.trim();

  return `
    <div class="${cls}">
      <div class="radio-btn"><div class="radio-dot"></div></div>
      ${showLabel ? `<span class="radio-label">${label}</span>` : ''}
    </div>`;
}
