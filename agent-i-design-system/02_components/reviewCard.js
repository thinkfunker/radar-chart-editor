export default function reviewcard(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const { button, thumb: dsThumb } = window.DS;
  const header = opts.header || 'title';
  const tags = opts.tags || 'none';
  const imgThumb = '/icons/image-alt_outline.svg';

  const starFull = icon('star_solid_full', { size: 16, color: 'var(--color-content-warning)' });
  const starHalf = icon('star_solid_half', { size: 16, color: 'var(--color-content-warning)' });
  const starFullLg = icon('star_solid_full', { size: 20, color: 'var(--color-content-warning)' });
  const starHalfLg = icon('star_solid_half', { size: 20, color: 'var(--color-content-warning)' });
  const earth = icon('earth_solid', { size: 12, color: 'var(--color-content-tertiary)' });
  const paypay = icon('paypay_solid', { size: 14, color: 'var(--color-content-primary)' });
  const aiTravel = icon('ai-travel_gradient', { size: 20 });

  const gallery = () => `
    <div class="rc__gallery">
      ${Array.from({ length: 3 }).map(() => `
        <div class="rc__gallery-img">
          ${dsThumb ? dsThumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true }) : `<img src="${imgThumb}" alt="" />`}
        </div>
      `).join('')}
    </div>
  `;

  const aiBox = () => `
    <div class="rc__ai-box">
      <div class="rc__ai-icon">${aiTravel}</div>
      <div class="rc__ai-text">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
    </div>
  `;

  const lightTags = () => `
    <div class="rc__tags">
      ${Array.from({ length: 6 }).map(() => `<span class="rc__tag">Tag</span>`).join('')}
    </div>
  `;

  const darkTags = () => `
    <div class="rc__tags">
      ${Array.from({ length: 6 }).map(() => `<span class="rc__tag rc__tag--dark">ラベル</span>`).join('')}
    </div>
  `;

  const shopIcons = () => `
    <div class="rc__shop-icons">
      <div class="rc__shop-icon">${starFull}</div>
      <div class="rc__shop-icon">${starFull}</div>
      <div class="rc__shop-icon">${earth}</div>
    </div>
  `;

  const ratingRow = () => `
    <div class="rc__star-row">
      ${starFull}${starFull}${starFull}${starFull}${starHalf}
      <span class="rc__score-text">Text</span>
      <span class="rc__sub">Text</span>
    </div>
  `;

  if (header === 'title' && tags === 'none') {
    return `
      <div class="rc">
        <div class="rc__text-group">
          <div class="rc__title">Text</div>
          <div class="rc__title">Text 2</div>
        </div>
        <div class="rc__sub">Text Text Text Text Text Text Text Text Text Text Text Text</div>
        <div class="rc__shop-row">
          ${shopIcons()}
          <span class="rc__sub">Text</span>
          <div class="rc__star-row rc__star-row--end">
            ${starFull}${starFull}${starFull}${starFull}${starHalf}
            <span class="rc__score-text">Text</span>
            <span class="rc__sub">Text</span>
          </div>
        </div>
        ${gallery()}
        ${aiBox()}
        <div class="rc__desc">
          <div class="rc__desc-title">Text</div>
          <div class="rc__desc-body">Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
          <a class="rc__desc-link" href="#">Text link</a>
        </div>
        ${lightTags()}
        ${button({ label: 'Label', size: 'large', variant: 'outline-tertiary' })}
      </div>
    `;
  }

  if (header === 'title' && tags === 'multiple') {
    return `
      <div class="rc">
        <div class="rc__text-group">
          <div class="rc__title">Text</div>
          <div class="rc__price-row">
            <span class="rc__price">Text 2</span>
            <span class="rc__discount">Text</span>
          </div>
          <div class="rc__logo-row">${paypay}<span class="rc__sub">Sub text</span></div>
        </div>
        <div class="rc__sub">Text Text Text Text Text Text Text Text Text Text Text Text</div>
        <div class="rc__shop-row">
          <div class="rc__shop-icons"><div class="rc__shop-icon">${starFull}</div></div>
          <div class="rc__star-row rc__star-row--end">
            ${starFull}${starFull}${starFull}${starFull}${starHalf}
            <span class="rc__score-text">Text</span>
            <span class="rc__sub">Text</span>
          </div>
        </div>
        ${darkTags()}
        ${gallery()}
        ${aiBox()}
        <div class="rc__desc">
          <div class="rc__desc-title">Text</div>
          <div class="rc__desc-body">Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
          <a class="rc__desc-link" href="#">Text link</a>
        </div>
        ${lightTags()}
        ${button({ label: 'Label', size: 'large', variant: 'outline-tertiary' })}
      </div>
    `;
  }

  const compareCol = (score) => `
    <div class="rc__cmp-col">
      <div class="rc__cmp-section rc__cmp-top">
        <div class="rc__cmp-thumb">
          ${dsThumb ? dsThumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true }) : `<img src="${imgThumb}" alt="" />`}
        </div>
        <div class="rc__cmp-product">
          <div class="rc__cmp-product-line">Text</div>
          <div class="rc__cmp-product-line">Text</div>
        </div>
      </div>
      <div class="rc__cmp-section rc__cmp-score">
        <div class="rc__cmp-label">レビュー</div>
        <div class="rc__cmp-score-wrap">
          <div class="rc__cmp-score-num">${esc(score)}</div>
          <div class="rc__cmp-stars">
            <span class="rc__cmp-star">${starFullLg}</span>
            <span class="rc__cmp-star">${starFullLg}</span>
            <span class="rc__cmp-star">${starFullLg}</span>
            <span class="rc__cmp-star">${starFullLg}</span>
            <span class="rc__cmp-star">${starHalfLg}</span>
          </div>
          <div class="rc__cmp-score-sub">Text</div>
        </div>
      </div>
      ${Array.from({ length: 6 }).map(() => `
        <div class="rc__cmp-section rc__cmp-sub">
          <div class="rc__cmp-sub-label">Text</div>
          <div class="rc__cmp-sub-value">Text</div>
        </div>
      `).join('')}
    </div>
  `;

  return `
    <div class="rc rc--cmp">
      <div class="rc__cmp-list">
        ${compareCol('4.8')}
        ${compareCol('4.8')}
      </div>
      <div class="rc__cmp-action">
        ${button({
          label: 'お気に入り',
          size: 'large',
          priority: 'outline-tertiary',
          showLeftIcon: true,
          leftIcon: 'heart_solid'
        })}
      </div>
    </div>
  `;
}
