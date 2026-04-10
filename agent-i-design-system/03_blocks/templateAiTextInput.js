/**
 * Template AI Text Input (Keyboard Area)
 * @param {object} opts
 * @param {string} opts.type - 'default'|'login button'|'multiline'
 * @param {boolean} opts.background
 * @param {boolean} opts.showFooter
 * @param {boolean} opts.showLeftButton
 * @param {boolean} opts.showSystem
 * @param {boolean} opts.sendActive
 * @param {string} opts.placeholder
 * @param {boolean} opts.useTextarea - render real textarea instead of static text
 * @param {number} opts.rows - textarea rows when useTextarea is true
 * @param {string} opts.value - textarea value when useTextarea is true
 * @param {boolean} opts.sendDisabled - disable send button
 * @param {boolean} opts.autoResize - auto-resize textarea based on content
 * @param {string}  opts.maxHeight - max height for auto-resize textarea
 * @param {boolean} opts.redoAnim - spin redo icon on click
 * @param {boolean} opts.toggleChips - hide suggestion chips when input has text
 * @param {boolean} opts.floating - float input area at bottom
 * @param {string}  opts.width - 'phone'|'full'
 */
export default function templateAiTextInput(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const { button } = window.DS;
  const type = opts.type || 'default';
  const background = opts.background === true;
  const showFooter = opts.showFooter === true;
  const showLeftButton = opts.showLeftButton !== false;
  const showSystem = opts.showSystem !== false;
  const sendActive = opts.sendActive === true;
  const sendDisabled = opts.sendDisabled === true;
  const placeholder = opts.placeholder || 'なんでも聞いてください';
  const useTextarea = opts.useTextarea === true;
  const rows = typeof opts.rows === 'number' ? opts.rows : 1;
  const value = typeof opts.value === 'string' ? opts.value : '';
  const autoResize = opts.autoResize === true;
  const maxHeight = typeof opts.maxHeight === 'string' ? opts.maxHeight : '';
  const redoAnim = opts.redoAnim === true;
  const toggleChips = opts.toggleChips === true;
  const floating = opts.floating === true;
  const width = opts.width || '';

  const plusIcon = icon('plus_solid', { size: 20, color: 'var(--color-content-primary)' });
  const arrowUp = icon('arrow-up_solid', { size: 20, color: sendActive ? 'var(--color-content-inverted)' : 'var(--color-content-tertiary)' });
  const bulbIcon = icon('bulb_outline', { size: 16, color: 'var(--color-content-tertiary)' });

  const leftButton = (showLeftButton && type === 'default')
    ? `<div class="aitmpl__left">
        ${button({ size: 'xlarge', priority: 'outline-tertiary', iconOnly: true, swapIcon: 'redo_outline', iconSize: 24, ariaLabel: 'redo' })}
      </div>`
    : '';

  const sendButtonCls = `aitmpl__send ${sendActive ? 'aitmpl__send--on' : 'aitmpl__send--off'}`;
  const sendButton = `<button class="${sendButtonCls}" type="button" ${sendDisabled ? 'disabled' : ''}>${arrowUp}</button>`;

  const loginButton = `
    <button class="aitmpl__login" type="button">Label</button>
  `;

  const inputSingle = `
    <div class="aitmpl__input">
      ${useTextarea
        ? `<textarea class="aitmpl__textarea" rows="${rows}" placeholder="${esc(placeholder)}">${esc(value)}</textarea>`
        : `<span class="aitmpl__placeholder">${esc(placeholder)}</span>`}
      ${type === 'login button' ? loginButton : sendButton}
    </div>
  `;

  const multilineText = `${esc(placeholder)}${esc(placeholder)}${esc(placeholder)}${esc(placeholder)}`;
  const inputMultiline = `
    <div class="aitmpl__input aitmpl__input--multiline">
      ${useTextarea
        ? `<textarea class="aitmpl__textarea" rows="${rows}" placeholder="${esc(placeholder)}">${esc(value)}</textarea>`
        : `<span class="aitmpl__multiline-text">${multilineText}</span>`}
      <div class="aitmpl__multiline-actions">${sendButton}</div>
    </div>
  `;

  const footer = `
    <div class="aitmpl__footer">
      <p class="aitmpl__footer-text">AIの回答は不正確な可能性があります。 AIが生成した回答の注意点は<span class="aitmpl__footer-link">ガイドライン</span>をご確認ください</p>
      <div class="aitmpl__footer-row">
        <p class="aitmpl__footer-text">参考：<span class="aitmpl__footer-link">mybest</span>（YYYY/MM/DD更新）</p>
        <span class="aitmpl__footer-note">${bulbIcon}<span>商品情報の注意事項</span></span>
      </div>
    </div>
  `;

  const homeIndicator = `
    <div class="aitmpl__system">
      <div class="aitmpl__home-indicator"></div>
    </div>
  `;

  const widthClass = width === 'phone' ? 'aitmpl--width-phone' : (width === 'full' ? 'aitmpl--width-full' : '');
  const dataAttrs = [
    'data-aitmpl="true"',
    autoResize ? 'data-aitmpl-auto-resize="true"' : '',
    maxHeight ? `data-aitmpl-max-height="${esc(maxHeight)}"` : '',
    redoAnim ? 'data-aitmpl-redo-anim="true"' : '',
    toggleChips ? 'data-aitmpl-toggle-chips="true"' : '',
    floating ? 'data-aitmpl-floating="true"' : '',
    width ? `data-aitmpl-width="${esc(width)}"` : ''
  ].filter(Boolean).join(' ');

  return `
    <div class="aitmpl ${background ? 'aitmpl--bg' : 'aitmpl--no-bg'} ${widthClass}" ${dataAttrs}>
      <div class="aitmpl__container">
        ${type === 'default' ? leftButton : ''}
        ${type === 'multiline' ? inputMultiline : inputSingle}
      </div>
      ${showFooter ? footer : ''}
      ${showSystem ? homeIndicator : ''}
    </div>
  `;
}
