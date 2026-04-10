/**
 * Toast Component (Pill)
 * @param {object} opts
 * @param {string} opts.titleText - title string
 * @param {boolean} opts.button - show action button (default true)
 * @param {string} opts.buttonLabel - action button label
 */
export default function toast(opts = {}) {
  const { esc } = window.DS_UTILS;
  const { avatar } = window.DS;

  const titleText = opts.titleText || 'Title text';
  const button = opts.button !== false;
  const buttonLabel = opts.buttonLabel || 'Button';

  const leftIcon = avatar ? avatar({ size: 'small', type: 'ai' }) : '';

  return `
    <div class="toast toast--pill">
      <div class="toast__left">
        <span class="toast__avatar">${leftIcon}</span>
        <div class="toast__title">${esc(titleText)}</div>
      </div>
      ${button ? `<button class="toast__action toast__action--pill" type="button">${esc(buttonLabel)}</button>` : ''}
    </div>
  `;
}
