/**
 * List Card (Figma variants 29998:25402)
 * @param {object} opts
 * @param {string} opts.variant
 * @param {boolean} opts.showThumbnail
 * @param {boolean} opts.showTextBox
 */
export default function listCard(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const { thumb } = window.DS;
  const variant = opts.variant || 'label-none-basic-single';
  const showThumbnail = opts.showThumbnail !== false;
  const showTextBox = opts.showTextBox === true;

  const chevronDown = icon('chevron-down_solid', { size: 14, color: 'var(--color-content-tertiary)' });
  const chevronRight = icon('chevron-right_outline', { size: 16, color: 'var(--color-content-tertiary)' });
  const starFull = icon('star_solid_full', { size: 16, color: 'var(--color-content-warning)' });
  const starHalf = icon('star_solid_half', { size: 16, color: 'var(--color-content-warning)' });
  const aiTravel = icon('ai-travel_gradient', { size: 24 });
  const aiMessenger = icon('ai-messenger_gradient', { size: 20 });
  const aiCheck = icon('ai-check_gradient', { size: 16 });
  const heart = icon('heart_solid', { size: 20, color: 'var(--color-content-tertiary)' });
  const oceanView = icon('ocean-view_solid', { size: 22, color: 'var(--color-content-inverted)' });
  const souvenir = icon('souvenir_solid', { size: 22, color: 'var(--color-content-inverted)' });
  const streetfood = icon('streetfood_solid', { size: 22, color: 'var(--color-content-inverted)' });
  const landmark = icon('landmark_solid', { size: 22, color: 'var(--color-content-inverted)' });
  const bus = icon('bus_solid', { size: 18, color: 'var(--color-content-primary)' });

  const thumbBlock = (size = 'sm', ratio = 'r11') => showThumbnail && thumb ? `
    <div class="lcard__thumb lcard__thumb--${size}">
      ${thumb({ ratio, state: 'image', cropped: true, gradation: false, outline: true, fill: true })}
    </div>
  ` : '';

  const galleryRow = (count = 3) => `
    <div class="lcard__gallery">
      ${Array.from({ length: count }).map(() => `
        <div class="lcard__gallery-img">
          ${thumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true })}
        </div>
      `).join('')}
    </div>
  `;

  const richThumb = (tag = false, wide = false) => `
    <div class="lcard__gallery-tile${wide ? ' lcard__gallery-tile--wide' : ''}">
      ${thumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true })}
      ${tag ? `<div class="lcard__img-tag"><span>Label</span></div>` : ''}
    </div>
  `;

  const rating = () => `
    <div class="lcard__rating">
      <div class="lcard__stars">${starFull}${starFull}${starFull}${starFull}${starHalf}</div>
      <span class="lcard__rating-text">4.5</span>
    </div>
  `;

  const badgeTitle = (num = 1) => `
    <div class="lcard__badge">${esc(String(num))}</div>
  `;

  const textBox = () => `
    <div class="lcard__textbox">
      <div class="lcard__textbox-row">${aiTravel}<span>Text Text Text Text Text Text Text Text</span></div>
      <span>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</span>
    </div>
  `;

  const ghostIconButton = () => `<button class="lcard__ghost" type="button">${chevronRight}</button>`;

  const cardLabelBasic = () => `
    <div class="lcard lcard--w326">
      <div class="lcard__stack">
        <div class="lcard__title">Text</div>
        <div class="lcard__sub">Text</div>
        <div class="lcard__meta">Text Text Text</div>
      </div>
    </div>
  `;

  const cardLabelMulti = () => `
    <div class="lcard-multi">
      ${Array.from({ length: 2 }).map(() => `
        <div class="lcard lcard--w220 lcard--r8">
          <div class="lcard__stack">
            <div class="lcard__sub">Text</div>
            <div class="lcard__mini">
              ${thumbBlock('xs')}
              <span class="lcard__meta">Text</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  const cardThumbBasic = () => `
    <div class="lcard lcard--w358 lcard--row">
      <div class="lcard__stack lcard__stack--tight">
        <div class="lcard__title">Text</div>
        <div class="lcard__sub">Text</div>
        <div class="lcard__body">Text</div>
      </div>
      ${thumbBlock('sm')}
    </div>
  `;

  const cardThumbMeta = () => `
    <div class="lcard lcard--w358 lcard--row">
      <div class="lcard__stack lcard__stack--tight">
        <div class="lcard__title">Text</div>
        <div class="lcard__meta">Text</div>
        <div class="lcard__row">
          <span class="lcard__meta">Text</span>
          <span class="lcard__dot"></span>
          <span class="lcard__meta">Text</span>
          <span class="lcard__chev">${chevronDown}</span>
        </div>
        <div class="lcard__sub">Text</div>
      </div>
      ${thumbBlock('lg')}
    </div>
  `;

  const cardThumbIcon = () => `
    <div class="lcard lcard--w358 lcard--r16 lcard--shadow lcard--row lcard--gap16">
      ${thumbBlock('sm')}
      <div class="lcard__stack lcard__stack--tight lcard__grow">
        <div class="lcard__label">Text</div>
        <div class="lcard__sub">Text</div>
        <div class="lcard__title">Text</div>
      </div>
      ${ghostIconButton()}
    </div>
  `;

  const cardTitleGalleryButton = () => `
    <div class="lcard lcard--w358 lcard--r16 lcard--col">
      <div class="lcard__title-lg">Text</div>
      ${galleryRow(3)}
      <button class="card__btn" type="button">Label</button>
    </div>
  `;

  const cardTitleGalleryTags = () => `
    <div class="lcard lcard--w288 lcard--r16 lcard--col">
      <div class="lcard__title-lg lcard__ellipsis">Text</div>
      <div class="lcard__body">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
      <div class="lcard__gallery-grid">
        <div class="lcard__gallery-top">
          ${richThumb(true)}${richThumb(true)}
        </div>
        <div class="lcard__gallery-bottom">
          ${Array.from({ length: 3 }).map(() => richThumb(false, true)).join('')}
        </div>
      </div>
      <button class="card__btn" type="button">Label</button>
    </div>
  `;

  const cardTitleButton = () => `
    <div class="lcard lcard--w358 lcard--r16 lcard--col lcard--gap16">
      <div class="lcard__header">
        <div class="lcard__title-lg">Text</div>
        <button class="lcard__outline-btn" type="button">Label</button>
      </div>
      <div class="lcard__divider"></div>
      <div class="lcard__row">
        <div class="lcard__circle lcard__circle--blue">${oceanView}</div>
        <div class="lcard__stack lcard__stack--tight">
          <div class="lcard__title">Text</div>
          <div class="lcard__body">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
        </div>
      </div>
      <div class="lcard__sublist">
        <div class="lcard__sublist-line"></div>
        <div class="lcard__sublist-items">
          ${Array.from({ length: 2 }).map(() => `
            <div class="lcard__row">
              ${thumbBlock('sm')}
              <div class="lcard__stack lcard__stack--tight">
                <div class="lcard__title">Text</div>
                <div class="lcard__body">Text Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
              </div>
            </div>
          `).join('')}
          <div class="lcard__row lcard__row--dot">
            <span class="lcard__dot lcard__dot--lg"></span>
            <span class="lcard__meta">Text</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const cardTitleGalleryIcon = () => `
    <div class="lcard lcard--w358 lcard--r16 lcard--col lcard--gap16">
      <div class="lcard__title-lg">Text</div>
      <div class="lcard__divider"></div>
      <div class="lcard__stack lcard__stack--tight">
        ${[1, 2].map(() => `
          <div class="lcard__row">
            ${thumbBlock('sm')}
            <div class="lcard__stack lcard__stack--tight">
              <div class="lcard__title">Text</div>
              <div class="lcard__body">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
            </div>
          </div>
          ${showTextBox ? `
            <div class="lcard__textbox">
              <div class="lcard__textbox-row">${aiMessenger}<span>Text</span></div>
            </div>
          ` : ''}
        `).join('')}
      </div>
      <div class="lcard__divider"></div>
      <div class="lcard__body">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
      <div class="lcard__row">
        <div class="lcard__circle lcard__circle--blue">${oceanView}</div>
        <div class="lcard__title lcard__grow">Text</div>
        ${ghostIconButton()}
      </div>
    </div>
  `;

  const cardTitleButtonMultiple = () => `
    <div class="lcard lcard--w358 lcard--r16 lcard--col lcard--gap16">
      ${['purple', 'pink', 'teal'].map((tone) => `
        <div class="lcard__group">
          <div class="lcard__header">
            <div class="lcard__title-lg">Text</div>
            <button class="lcard__outline-btn" type="button">Label</button>
          </div>
          <div class="lcard__divider"></div>
          <div class="lcard__row">
            <div class="lcard__circle lcard__circle--${tone}">
              ${tone === 'purple' ? souvenir : tone === 'pink' ? streetfood : landmark}
            </div>
            <div class="lcard__stack lcard__stack--tight">
              <div class="lcard__title">Text</div>
              <div class="lcard__body">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
            </div>
          </div>
          <div class="lcard__sublist">
            <div class="lcard__sublist-line"></div>
            <div class="lcard__sublist-items">
              ${Array.from({ length: 2 }).map(() => `
                <div class="lcard__row">
                  ${thumbBlock('sm')}
                  <div class="lcard__stack lcard__stack--tight">
                    <div class="lcard__title">Text</div>
                    <div class="lcard__body">Text Text Text Text Text Text Text Text Text Text Text Text Text Text</div>
                  </div>
                </div>
              `).join('')}
              <div class="lcard__row lcard__row--dot">
                <span class="lcard__dot lcard__dot--lg"></span>
                <span class="lcard__meta">Text</span>
              </div>
            </div>
          </div>
          <button class="lcard__outline-btn lcard__outline-btn--full" type="button">Label</button>
        </div>
      `).join('')}
    </div>
  `;

  const badgeBlock = (index = 1) => `
    <div class="lcard lcard--w358 lcard--r16 lcard--col lcard--gap12">
      <div class="lcard__row">
        ${badgeTitle(index)}
        <div class="lcard__title-lg">Title</div>
      </div>
      <div class="lcard__stack lcard__stack--tight">
        <div class="lcard__row lcard__row--wrap">
          <span class="lcard__meta">Category</span>
          ${rating()}
        </div>
        <div class="lcard__tags">
          ${Array.from({ length: 5 }).map(() => `<span class="lcard__tag">ラベル</span>`).join('')}
        </div>
      </div>
      ${galleryRow(3)}
      ${textBox()}
    </div>
    <div class="lcard__bridge">
      <div class="lcard__bridge-line"></div>
      <div class="lcard__bridge-row">
        <div class="lcard__bridge-icon">${bus}</div>
        <span>Sub text</span>
      </div>
    </div>
  `;

  const cardBadgeTitleMultiple = () => `
    <div class="lcard-stack">
      ${[1, 2, 3, 4, 5].map((i) => badgeBlock(i)).join('')}
    </div>
  `;

  const savedProduct = () => `
    <div class="lcard-saved lcard-saved--product">
      <div class="lcard-saved__thumb">
        ${thumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true })}
        <button class="lcard-saved__heart" type="button" aria-label="Favorite">${heart}</button>
      </div>
      <div class="lcard-saved__text">
        <div class="lcard-saved__brand">Text</div>
        <div class="lcard-saved__name">Text</div>
        <div class="lcard-saved__price">000,000円</div>
      </div>
    </div>
  `;

  const savedComparison = () => `
    <div class="lcard-saved lcard-saved--comparison">
      <div class="lcard-saved__header">
        <div class="lcard-saved__category">
          <span class="lcard-saved__grad">Category</span>
          <span class="lcard-saved__grad">・4点</span>
        </div>
        <div class="lcard-saved__title">Title</div>
        <div class="lcard-saved__meta">最終更新 N時間前</div>
      </div>
      <div class="lcard-saved__list">
        ${Array.from({ length: 4 }).map(() => `
          <div class="lcard-saved__row">
            <div class="lcard-saved__row-thumb">
              ${thumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true })}
            </div>
            <div class="lcard-saved__row-text">
              <div class="lcard-saved__row-brand">Text</div>
              <div class="lcard-saved__row-name">ProductName</div>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="lcard-saved__btn" type="button">Label</button>
    </div>
  `;

  const categoryTop = () => `
    <div class="lcard-saved lcard-saved--category">
      <div class="lcard-saved__hero">
        ${thumb({ ratio: 'r169', state: 'image', cropped: true, gradation: false, outline: false, fill: true })}
        <div class="lcard-saved__hero-title">薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇</div>
      </div>
      <div class="lcard-saved__category-list">
        ${Array.from({ length: 3 }).map(() => `
          <div class="lcard-saved__category-item">
            <div class="lcard-saved__category-thumb">
              ${thumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true })}
            </div>
            <div class="lcard-saved__category-body">
              <div class="lcard-saved__category-label">
                <span class="lcard-saved__category-icon">${aiCheck}</span>
                <span class="lcard-saved__grad lcard-saved__label-text">Label</span>
              </div>
              <div class="lcard-saved__category-title">Text</div>
              <div class="lcard-saved__category-price">
                <span class="lcard-saved__category-price-main">000,000円</span>
                <span class="lcard-saved__category-price-old">新品11,600円</span>
              </div>
            </div>
            <button class="lcard-saved__heart" type="button" aria-label="Favorite">${heart}</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  if (variant === 'saved-product') return savedProduct();
  if (variant === 'saved-comparison') return savedComparison();
  if (variant === 'category-top') return categoryTop();

  if (variant === 'label-none-basic-multiple') return cardLabelMulti();
  if (variant === 'label-thumbnail-basic') return cardThumbBasic();
  if (variant === 'label-thumbnail-meta') return cardThumbMeta();
  if (variant === 'label-thumbnail-basic-icon') return cardThumbIcon();
  if (variant === 'title-gallery-button') return cardTitleGalleryButton();
  if (variant === 'title-gallery-button-tags') return cardTitleGalleryTags();
  if (variant === 'title-gallery-icon') return cardTitleGalleryIcon();
  if (variant === 'titleButton-gallery-button') return cardTitleButton();
  if (variant === 'titleButton-gallery-buttons') return cardTitleButtonMultiple();
  if (variant === 'badgeTitle-gallery-meta-buttons') return cardBadgeTitleMultiple();

  return cardLabelBasic();
}
