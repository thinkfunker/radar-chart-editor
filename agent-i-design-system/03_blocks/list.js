/**
 * 03_blocks/list.js
 */
export default function list(props = {}) {
  const { BACK_SVG, MENU_SVG, SEARCH_SVG } = window.DS_UTILS;
  const { title = 'List Title', items = [], className = '' } = props;
  
  const listItems = items.map(item => `
    <div class="list-item">
      <div class="list-item__content">
        <div class="list-item__title">${item.title || 'Item Title'}</div>
        ${item.sub ? `<div class="list-item__sub">${item.sub}</div>` : ''}
      </div>
      ${item.meta ? `<div class="list-item__meta">${item.meta}</div>` : ''}
    </div>
  `).join('');

  return `
    <div class="list ${className}">
      ${title ? `<div class="list__header">${title}</div>` : ''}
      <div class="list__body">
        ${listItems || '<div style="padding:var(--spacing-400);color: var(--color-content-tertiary);text-align:center;">No items</div>'}
      </div>
    </div>`;
}