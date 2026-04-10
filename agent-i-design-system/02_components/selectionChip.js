export default function selectionChip(props = {}) {
  const { esc } = window.DS_UTILS || { esc: (s) => s };
  const toBool = (val) => (
    val === true ||
    val === 'true' ||
    val === 1 ||
    val === '1' ||
    val === 'on'
  );

  const label = props.label || 'Label';
  const size = props.size || 'medium';
  const state = props.state || 'enabled';
  const selected = toBool(props.selected);
  const className = props.className || '';

  const sizeClass = size === 'large' ? 'sch--lg' : 'sch--md';
  const selectedClass = selected ? 'sch--sel' : '';
  const disabledClass = state === 'disabled' ? 'sch--disabled' : '';
  const cls = `sch ${sizeClass} ${selectedClass} ${disabledClass} ${className}`.trim();

  const layerMap = {
    hovered: 'sch__layer sch__layer--hover',
    focused: 'sch__layer sch__layer--focus',
    pressed: 'sch__layer sch__layer--press'
  };
  const layerClass = state in layerMap ? layerMap[state] : '';
  const layerHtml = layerClass && state !== 'disabled' ? `<span class="${layerClass}"></span>` : '';

  return `
    <button class="${cls}" type="button"${state === 'disabled' ? ' disabled' : ''}>
      ${layerHtml}
      <span class="sch__label">${esc(label)}</span>
    </button>
  `;
}