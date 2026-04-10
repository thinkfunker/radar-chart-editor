/**
 * 03_blocks/chatModal.js
 * Chat Modal (Figma 2057:11933)
 */
export default function chatModal(opts = {}) {
  const { esc, icon } = window.DS_UTILS || { esc: (s) => s, icon: null };
  const type = opts.type || 'default-100';
  const placeholder = esc(opts.placeholder || 'なんでも聞いてください');

  const isHeaderOnly = type === 'header-only';
  const isDefault70 = type === 'default-70';
  const heightClass = isHeaderOnly ? 'chatmodal--header' : isDefault70 ? 'chatmodal--70' : 'chatmodal--100';

  const closeIcon = icon ? icon('cross_outline', { size: 16, color: 'var(--color-content-primary)' }) : '';
  const menuIcon = icon ? icon('ellipsis-horizonal_solid', { size: 16, color: 'var(--color-content-primary)' }) : '';
  const plusIcon = icon ? icon('plus_outline', { size: 20, color: 'var(--color-content-primary)' }) : '';
  const sendIcon = icon ? icon('arrow-up_solid', { size: 16, color: 'var(--color-content-tertiary)' }) : '';

  const header = `
    <div class="chatmodal__header">
      <div class="chatmodal__header-bg"></div>
      <div class="chatmodal__handle"></div>
      <button class="chatmodal__icon-btn" type="button" aria-label="Close">${closeIcon}</button>
      <button class="chatmodal__icon-btn chatmodal__icon-btn--right" type="button" aria-label="Menu">${menuIcon}</button>
    </div>
  `;

  const input = `
    <div class="chatmodal__input">
      <div class="chatmodal__input-inner">
        <button class="chatmodal__input-btn" type="button" aria-label="Add">${plusIcon}</button>
        <span class="chatmodal__placeholder">${placeholder}</span>
        <div class="chatmodal__input-controls">
          <button class="chatmodal__send" type="button" aria-label="Send">${sendIcon}</button>
        </div>
      </div>
    </div>
  `;

  const system = `
    <div class="chatmodal__system">
      <div class="chatmodal__home"></div>
    </div>
  `;

  if (isHeaderOnly) {
    return `
      <div class="chatmodal ${heightClass}">
        ${header}
      </div>
    `;
  }

  return `
    <div class="chatmodal ${heightClass}">
      ${header}
      <div class="chatmodal__body"></div>
      ${input}
      ${system}
    </div>
  `;
}
