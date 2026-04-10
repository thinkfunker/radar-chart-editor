/**
 * Bottom Sheet (Figma 20964:5081)
 * @param {object} opts
 * @param {string} opts.type - 'default' | 'header only'
 * @param {string} opts.headerTitle
 * @param {boolean} opts.showBottomButton
 * @param {boolean} opts.showLeftButton
 * @param {boolean} opts.showLeftIcon
 * @param {boolean} opts.showRightIcon
 * @param {boolean} opts.showRightButton
 * @param {boolean} opts.showTitleText
 */
export default function bottomSheet(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const { button } = window.DS;

  const type = opts.type || 'header only';
  const isDefault = type === 'default';
  const headerTitle = opts.headerTitle || 'Title';
  const showBottomButton = opts.showBottomButton !== false;
  const showLeftButton = opts.showLeftButton !== false;
  const showLeftIcon = !!opts.showLeftIcon;
  const showRightIcon = !!opts.showRightIcon;
  const showRightButton = opts.showRightButton !== false;
  const showTitleText = opts.showTitleText !== false;

  const chevronLeft = icon('chevron-left_outline', { size: 24, color: 'var(--color-content-tertiary)' });
  const cross = icon('cross_outline', { size: 24, color: 'var(--color-content-tertiary)' });

  return `
    <div class="bsheet ${isDefault ? 'bsheet--default' : 'bsheet--header'}">
      <div class="bsheet__header">
        <div class="bsheet__handlebar">
          <div class="bsheet__handle"></div>
        </div>
        <div class="bsheet__top">
          <div class="bsheet__side bsheet__side--left">
            ${showLeftIcon ? `<div class="bsheet__icon">${chevronLeft}</div>` : ''}
            ${showLeftButton ? `<button class="bsheet__ghost">${esc('Label')}</button>` : ''}
          </div>
          <div class="bsheet__center">
            ${showTitleText ? `<div class="bsheet__title">${esc(headerTitle)}</div>` : ''}
          </div>
          <div class="bsheet__side bsheet__side--right">
            ${showRightButton ? `<button class="bsheet__ghost bsheet__ghost--primary">${esc('Label')}</button>` : ''}
            ${showRightIcon ? `<div class="bsheet__icon">${cross}</div>` : ''}
          </div>
        </div>
      </div>
      ${isDefault ? `<div class="bsheet__content"></div>` : ''}
      ${isDefault && showBottomButton ? `
        <div class="bsheet__bottom">
          <div class="bsheet__cta">
            ${button({ label: 'Label', size: 'xxlarge', priority: 'solid-primary' })}
          </div>
          <div class="bsheet__system">
            <div class="bsheet__home-indicator"></div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}