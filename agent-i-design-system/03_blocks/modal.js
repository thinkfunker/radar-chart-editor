/**
 * 03_blocks/modal.js
 */
export default function modal(props = {}) {
  const { title = 'Modal Title', content = 'Modal content goes here.', show = true, className = '' } = props;
  if (!show) return '';

  return `
    <div class="modal-overlay ${className}">
      <div class="modal">
        <div class="modal__header">
          <div class="modal__title">${title}</div>
          <button class="modal__close"><span data-ds-icon="cross_solid" data-ds-size="24"></span></button>
        </div>
        <div class="modal__body">${content}</div>
        <div class="modal__footer">
          <button class="btn btn--secondary">Cancel</button>
          <button class="btn btn--primary">Confirm</button>
        </div>
      </div>
    </div>`;
}