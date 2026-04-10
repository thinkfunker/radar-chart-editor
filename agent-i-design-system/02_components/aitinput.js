export default function aitinput(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const toBool = (val) => (
    val === true ||
    val === 'true' ||
    val === 1 ||
    val === '1' ||
    val === 'on'
  );

  const type = opts.type || 'simple';
  const state = opts.state || 'enabled';
  const inputText = opts.inputText || 'なんでも聞いてください';
  const showLeftButton = toBool(opts.showLeftButton ?? opts.showLeftIcon ?? true);
  const showLeftIcon = toBool(opts.showLeftIcon ?? true);
  const showRightButton1 = toBool(opts.showRightButton1 ?? true);
  const showRightButton2 = toBool(opts.showRightButton2 ?? true);

  const isMultiple = type === 'multiple';
  const isDisabled = state === 'disabled';
  const isTyping = state === 'typing';
  const isTyped = state === 'typed';
  const isFocused = state === 'focused';
  const isPlaceholder = !(isTyping || isTyped);

  const rootCls = [
    'aitinput',
    isMultiple ? 'aitinput--multiple' : 'aitinput--simple',
    (!showLeftButton || !showLeftIcon) ? 'aitinput--no-left' : '',
    `aitinput--state-${state}`
  ].filter(Boolean).join(' ');

  const textCls = [
    'aitinput__text',
    isDisabled ? 'is-disabled' : '',
    isPlaceholder ? 'is-placeholder' : 'is-typed'
  ].filter(Boolean).join(' ');

  const plusColor = isDisabled ? 'var(--color-content-disabled)' : 'var(--color-content-primary)';
  const micColor = isDisabled ? 'var(--color-content-disabled)' : 'var(--color-content-tertiary)';
  const sendActive = isTyping || isTyped;
  const sendColor = sendActive ? 'var(--color-background-white)' : 'var(--color-content-tertiary)';

  const plusIcon = icon('plus_solid', { size: 20, color: plusColor });
  const micIcon = icon('microphone_outline', { size: 20, color: micColor });
  const sendIcon = icon('arrow-up_solid', { size: 20, color: sendColor });

  const leftButton = (showLeftButton && showLeftIcon)
    ? `<button class="aitinput__icon-btn" type="button">${plusIcon}</button>`
    : '';

  const rightControls = `
    <div class="aitinput__controls">
      ${showRightButton1 ? `<button class="aitinput__btn" type="button">${micIcon}</button>` : ''}
      ${showRightButton2 ? `<button class="aitinput__btn ${sendActive ? 'aitinput__btn--send-on' : 'aitinput__btn--send-off'}" type="button">${sendIcon}</button>` : ''}
    </div>
  `;

  const textHtml = `
    <span class="${textCls}">${esc(inputText)}${(isFocused || isTyping) && !isDisabled ? '<span class="aitinput__cursor"></span>' : ''}</span>
  `;

  if (!isMultiple) {
    return `
      <div class="${rootCls}">
        ${leftButton}
        ${textHtml}
        ${rightControls}
      </div>
    `;
  }

  return `
    <div class="${rootCls}">
      <div class="aitinput__row">${textHtml}</div>
      <div class="aitinput__row aitinput__row--space">
        ${leftButton}
        ${rightControls}
      </div>
    </div>
  `;
}