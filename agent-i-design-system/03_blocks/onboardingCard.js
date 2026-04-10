/**
 * 03_blocks/onboardingCard.js
 * Onboarding Card (Figma 2057:11904)
 */
export default function onboardingCard(opts = {}) {
  const { esc } = window.DS_UTILS || { esc: (s) => s };
  const { thumb: dsThumb } = window.DS || {};
  const titleTop = esc(opts.titleTop || '薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔');
  const titleBottom = esc(opts.titleBottom || '薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔');
  const badgeText = esc(opts.badgeText || 'VS');
  const titleWidth = esc(opts.titleWidth || '310px');
  const titleTopOffset = esc(opts.titleTopOffset || '24px');
  const titleBottomOffset = esc(opts.titleBottomOffset || '193px');
  const centered = opts.centered !== false;
  const cardStyle = centered ? ' style="margin:0 auto;"' : '';
  const thumbBlock = dsThumb
    ? dsThumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: false, fill: true })
    : `<img src="${opts.image || '/icons/image-alt_outline.svg'}" alt="" class="obcard__img" />`;

  return `
    <div class="obcard"${cardStyle}>
      <div class="obcard__cards">
        <div class="obcard__item obcard__item--top">
          <div class="obcard__img">${thumbBlock}</div>
          <div class="obcard__dim obcard__dim--top"></div>
          <div class="obcard__title obcard__title--top" style="width:${titleWidth};top:${titleTopOffset};">${titleTop}</div>
        </div>
        <div class="obcard__item obcard__item--bottom">
          <div class="obcard__img">${thumbBlock}</div>
          <div class="obcard__dim obcard__dim--bottom"></div>
          <div class="obcard__title obcard__title--bottom" style="width:${titleWidth};top:${titleBottomOffset};">${titleBottom}</div>
        </div>
      </div>
      <div class="obcard__badge"><span>${badgeText}</span></div>
    </div>
  `;
}
