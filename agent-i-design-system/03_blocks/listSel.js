/**
 * 03_blocks/listSel.js
 */
export default function listSel(props = {}) {
  const { items = [], selectedIndex = 0, className = '' } = props;
  
  const listItems = items.map((item, idx) => {
    const isSel = idx === selectedIndex;
    const cls = isSel ? 'list-selectable__item--on' : '';
    return `
      <div class="list-selectable__item ${cls}">
        <div class="list-selectable__label">${item.label || item}</div>
        ${isSel ? '<div class="list-selectable__check"><span data-ds-icon="check_solid" data-ds-size="16"></span></div>' : ''}
      </div>`;
  }).join('');

  return `<div class="list-selectable ${className}">${listItems}</div>`;
}