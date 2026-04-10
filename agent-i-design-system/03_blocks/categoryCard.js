/**
 * 03_blocks/categoryCard.js
 * Category Card (Figma 2057:12296)
 */
export default function categoryCard(opts = {}) {
  const { esc, icon } = window.DS_UTILS || { esc: (s) => s, icon: null };
  const { thumb: dsThumb } = window.DS || {};
  const form = opts.form || 'square';
  const contents = opts.contents || 'image';

  const isHorizontal = form === 'horizontal';
  const isSquare = form === 'square';
  const isVertical = form === 'vertical';
  const isVideo = contents === 'video';

  const label = esc(opts.label || 'カテゴリ');
  const title = esc(opts.title || '薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇');

  const syncIcon = icon ? icon('heart_outline', { size: 16, color: 'var(--color-content-inverted)' }) : '';
  const playIcon = icon ? icon('chevron-right_solid', { size: 24, color: 'var(--color-content-inverted)' }) : '';

  const baseCls = `catcard catcard--${form}${isVideo ? ' catcard--video' : ''}`;

  const thumbBlock = dsThumb
    ? dsThumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: false, fill: true })
    : `<img src="${opts.image || '/icons/image-alt_outline.svg'}" alt="" class="catcard__img" />`;

  return `
    <div class="${baseCls}">
      <div class="catcard__img">${thumbBlock}</div>
      <div class="catcard__badge">${syncIcon}</div>
      ${isHorizontal ? `
        <div class="catcard__h-text">
          <div class="catcard__label">${label}</div>
          <div class="catcard__title">${title}</div>
        </div>
      ` : `
        <div class="catcard__label catcard__label--fixed">${label}</div>
        <div class="catcard__title catcard__title--bottom">${title}</div>
      `}
      ${isSquare || isVertical ? `<div class="catcard__grad"></div>` : ''}
      ${isVideo && isVertical ? `
        <div class="catcard__play">
          ${playIcon}
        </div>
      ` : ''}
    </div>
  `;
}
