/**
 * Top Navigation Component
 * @param {object} opts
 * @param {string} opts.headerTitle - title text
 * @param {string} opts.os - 'mobile'|'pc' (default 'mobile')
 * @param {string} opts.titleAlign - 'center'|'left' (default 'center')
 * @param {boolean} opts.showLeftIcon
 * @param {boolean} opts.showRightIcon1
 * @param {boolean} opts.showRightIcon2
 * @param {boolean} opts.showRightIcon3
 * @param {boolean} opts.showAvatar
 * @param {boolean} opts.textButton - show text buttons on PC
 * @param {string} opts.leftIcon - custom left icon HTML (optional)
 * @param {string} opts.rightContent - custom right HTML (optional)
 */
export default function topnav(opts = {}) {
  const { icon, esc } = window.DS_UTILS;

  const os = opts.os || 'mobile';
  const titleAlign = opts.titleAlign || opts.align || 'center';
  const headerTitle = opts.headerTitle || opts.title || 'title text';

  const showLeftIcon = opts.showLeftIcon !== undefined ? opts.showLeftIcon : !!opts.leftIcon;
  const showRightIcon1 = opts.showRightIcon1 !== undefined ? opts.showRightIcon1 : true;
  const showRightIcon2 = opts.showRightIcon2 === true;
  const showRightIcon3 = opts.showRightIcon3 === true;
  const showAvatar = opts.showAvatar === true;
  const textButton = opts.textButton === true;

  const chevron = icon('chevron-left_outline', { size: 24, color: 'var(--color-content-primary)' });
  const menu = icon('bars_solid', { size: 24, color: 'var(--color-content-primary)' });
  const logo = icon('ai-messenger_primary', { size: 24 });
  const alertIcon = icon('exclamation-circle_solid', { size: 24, color: 'var(--color-content-primary)' });

  const leftIconHtml = opts.leftIcon || chevron;
  const rightIcons = opts.rightContent || [
    showRightIcon3 ? `<div class="topnav__icon">${alertIcon}</div>` : '',
    showRightIcon2 ? `<div class="topnav__icon">${logo}</div>` : '',
    showRightIcon1 ? `<div class="topnav__icon">${menu}</div>` : '',
    showAvatar ? `<div class="topnav__avatar"><img class="topnav__avatar-img" src="/images/agent-i-design-system/assets/avatar-portrait.png" alt="" /><img class="topnav__avatar-frame" src="/images/agent-i-design-system/assets/avatar-outline-xsmall.svg" alt="" /></div>` : ''
  ].join('');

  if (os === 'pc') {
    const textButtons = textButton
      ? `<div class="topnav__text-buttons">
          <button class="topnav__text-btn" type="button">Text btn</button>
          <button class="topnav__text-btn" type="button">Text btn</button>
          <button class="topnav__text-btn" type="button">Text btn</button>
          <button class="topnav__text-btn" type="button">Text btn</button>
        </div>`
      : '';
    return `
      <div class="topnav topnav--pc">
        <div class="topnav__pc-left">
          <div class="topnav__title topnav__title--pc">${esc(headerTitle)}</div>
          ${textButtons}
        </div>
        <div class="topnav__right">${rightIcons}</div>
      </div>
    `;
  }

  if (titleAlign === 'left') {
    return `
      <div class="topnav topnav--mobile">
        <div class="topnav__left">
          ${showLeftIcon ? `<div class="topnav__icon">${leftIconHtml}</div>` : ''}
          <div class="topnav__title topnav__title--left">${esc(headerTitle)}</div>
        </div>
        <div class="topnav__right">${rightIcons}</div>
      </div>
    `;
  }

  return `
    <div class="topnav topnav--mobile">
      <div class="topnav__left topnav__left--fixed">
        ${showLeftIcon ? `<div class="topnav__icon">${leftIconHtml}</div>` : '<div class="topnav__placeholder"></div>'}
      </div>
      <div class="topnav__title topnav__title--center">${esc(headerTitle)}</div>
      <div class="topnav__right">${rightIcons}</div>
    </div>
  `;
}