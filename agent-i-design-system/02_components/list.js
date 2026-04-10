export default function list(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const { thumb } = window.DS;
  const type = opts.type || 'default';
  const image = opts.image !== false;
  const ghostButton = opts.ghostButton !== false;
  const listTitle = opts.listTitle || 'Title text';
  const subText = opts.subText || 'Sub text';
  const chevron = icon('chevron-down_solid', { size: 16, color: 'currentColor', className: 'list-chev-icon' });
  const boxIcon = icon('cart_solid', { size: 16, color: 'var(--color-content-key)' });
  const thumbImg = thumb ? thumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true }) : '';

  if (type === 'box') {
    return `
      <div class="list-item list-item--box">
        ${image ? `<div class="list-box-icon">${boxIcon}</div>` : ''}
        <div class="list-text">
          <div class="list-title">${esc(listTitle)}</div>
          <div class="list-sub">${esc(subText)}</div>
        </div>
        ${ghostButton ? `<button class="list-box-chevron-btn" type="button">${chevron}</button>` : ''}
      </div>
    `;
  }

  const typeCls = type === 'divider' ? ' list-item--divider' : '';
  return `
    <div class="list-item${typeCls}">
      ${image ? `<div class="list-thumb">${thumbImg}</div>` : ''}
      <div class="list-text">
        <div class="list-title">${esc(listTitle)}</div>
        <div class="list-sub">${esc(subText)}</div>
      </div>
      ${ghostButton ? `<div class="list-action"><button class="list-ghost-btn" type="button">Label ${chevron}</button></div>` : ''}
    </div>
  `;
}
