export default function modal(opts = {}) {
  const { esc } = window.DS_UTILS || {};

  const os = opts.os || 'mobile';
  const layout = opts.buttonLayout || 'vertical';
  const title = opts.title !== false;
  const description = opts.description !== false;
  const link = opts.link === true;
  const checkbox = opts.checkbox === true;
  const progressIndicator = opts.progressIndicator === true;
  const pageIndicator = opts.pageIndicator === true;
  const buttonClose = opts.buttonClose !== false;

  const imgCrossSolid = '/icons/cross_solid.svg';
  const imgCrossOutline = '/icons/cross_outline.svg';
  const imgProgress = '/icons/ellipsis-horizonal_solid.svg';
  const imgDotActive = '/icons/check-circle_solid.svg';
  const imgDotInactive = '/icons/check-circle_outline.svg';

  const titleHtml = title ? `<div class="mdl__title">${esc ? esc('Title') : 'Title'}</div>` : '';
  const descHtml = description ? `<div class="mdl__desc">${esc ? esc('Description Here') : 'Description Here'}</div>` : '';
  const linkHtml = link ? `<div class="mdl__link">${esc ? esc('Text link') : 'Text link'}</div>` : '';
  const progressHtml = progressIndicator ? `
    <div class="mdl__progress">
      <img src="${imgProgress}" alt="" />
    </div>
  ` : '';
  const paginationHtml = pageIndicator ? `
    <div class="mdl__pagination">
      <img src="${imgDotActive}" alt="" />
      <img src="${imgDotInactive}" alt="" />
      <img src="${imgDotInactive}" alt="" />
      <img src="${imgDotInactive}" alt="" />
      <img src="${imgDotInactive}" alt="" />
    </div>
  ` : '';
  const checkboxHtml = checkbox ? `
    <div class="mdl__checkbox">
      <span class="mdl__checkbox-box"></span>
      <span class="mdl__checkbox-label">${esc ? esc('Description of Check') : 'Description of Check'}</span>
    </div>
  ` : '';

  const mobileButtonsVertical = `
    <div class="mdl__btns">
      <button class="mdl__btn-solid" type="button">Label</button>
      <button class="mdl__btn-outline" type="button"><span>Label</span></button>
      ${buttonClose ? '<button class="mdl__btn-ghost" type="button">Close</button>' : ''}
    </div>
  `;
  const mobileButtonsHorizontal = `
    <div class="mdl__btns mdl__btns--h">
      <button class="mdl__btn-outline" type="button"><span>Label</span></button>
      <button class="mdl__btn-solid" type="button">Label</button>
    </div>
  `;

  const pcButtons = `
    <div class="mdl__bottom">
      ${link ? `<div class="mdl__link mdl__link--left">Text link</div>` : '<div class="mdl__link-spacer"></div>'}
      <div class="mdl__bottom-btns">
        <button class="mdl__btn-outline--lg" type="button"><span>Label</span></button>
        <button class="mdl__btn-solid--lg" type="button">Label</button>
      </div>
    </div>
  `;

  if (os === 'pc') {
    return `
      <div class="mdl-wrap mdl-wrap--pc">
        <div class="mdl mdl--pc">
          <div class="mdl__top">
            <div class="mdl__contents">
              ${titleHtml}
              ${descHtml}
            </div>
            ${buttonClose ? `<button class="mdl__close" type="button"><img src="${imgCrossOutline}" alt="" /></button>` : ''}
          </div>
          ${progressHtml}
          ${paginationHtml}
          ${checkboxHtml}
          ${pcButtons}
        </div>
      </div>
    `;
  }

  return `
    <div class="mdl-wrap">
      <div class="mdl mdl--mobile">
        <div class="mdl__contents">
          ${titleHtml}
          ${descHtml}
        </div>
        ${linkHtml}
        ${progressHtml}
        ${paginationHtml}
        ${checkboxHtml}
        ${layout === 'horizontal' ? mobileButtonsHorizontal : mobileButtonsVertical}
      </div>
    </div>
  `;
}
