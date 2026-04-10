/**
 * Media Card (Figma 29998:25400)
 * @param {object} opts
 * @param {string} opts.variant
 * @param {boolean} opts.showChips
 * @param {boolean} opts.showTextBox
 * @param {boolean} opts.showSwitch
 * @param {boolean} opts.selected
 */
export default function mediaCard(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const { chip, switch: sw, button, avatar, tab, thumb: dsThumb } = window.DS;
  const variant = opts.variant || 'image-large-basic-button';
  const showChips = opts.showChips !== false;
  const showTextBox = opts.showTextBox !== false;
  const showSwitch = opts.showSwitch !== false;
  const selected = opts.selected === true;
  const imgThumb = '/icons/image-alt_outline.svg';

  const starFull = icon('star_solid_full', { size: 16, color: 'var(--color-content-warning)' });
  const starHalf = icon('star_solid_half', { size: 16, color: 'var(--color-content-warning)' });
  const chevronRight = icon('chevron-right_solid', { size: 16, color: 'var(--color-content-tertiary)' });
  const bell = icon('bell_solid', { size: 20, color: 'var(--color-content-primary)' });
  const volumeSlash = icon('volume-slash_solid', { size: 20, color: 'var(--color-content-tertiary)' });
  const aiCalendar = icon('ai-calendar_gradient', { size: 24 });
  const aiShopping = icon('ai-shopping_gradient', { size: 24 });
  const aiCheck = icon('ai-check_gradient', { size: 24 });
  const check = icon('check_solid', { size: 16, color: 'var(--color-content-key)' });
  const clock = icon('clock_solid', { size: 16, color: 'var(--color-content-tertiary)' });
  const earth = icon('earth_solid', { size: 16, color: 'var(--color-content-tertiary)' });
  const pin = icon('map-marker_solid', { size: 16, color: 'var(--color-content-tertiary)' });

  const thumbBlock = (size = 'md', tag = false) => `
    <div class="medcard__thumb medcard__thumb--${size}">
      ${dsThumb ? dsThumb({ ratio: 'r43', state: 'image', cropped: true, gradation: false, outline: true, fill: true }) : `<img src="${imgThumb}" alt="" />`}
      ${tag ? `<div class="medcard__img-tag"><span>Label</span></div>` : ''}
    </div>
  `;

  const ratingRow = () => `
    <div class="medcard__rating">
      <div class="medcard__stars">${starFull}${starFull}${starFull}${starFull}${starHalf}</div>
      <span>Text</span>
      <span class="medcard__meta">Text</span>
    </div>
  `;

  const chipGroup = () => showChips ? `
    <div class="medcard__chips">
      ${chip({ variant: 'outline-gradient', size: 'large', label: 'Label' })}
      ${chip({ variant: 'outline-gradient', size: 'large', label: 'Label' })}
      ${chip({ variant: 'outline-gradient', size: 'large', label: 'Label', selected: true })}
      ${chip({ variant: 'outline-gradient', size: 'large', label: 'Label' })}
      ${chip({ variant: 'outline-gradient', size: 'large', label: 'Label' })}
    </div>
  ` : '';

  const textBox = (iconHtml, title = 'Text', body = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text') => `
    <div class="medcard__textbox">
      <div class="medcard__textbox-row">${iconHtml}<span class="medcard__textbox-title">${esc(title)}</span></div>
      <span>${esc(body)}</span>
    </div>
  `;

  const switchRow = () => showSwitch ? `
    <div class="medcard__switch-row">
      <div class="medcard__switch-icon">${bell}</div>
      <div class="medcard__switch-title">Text</div>
      ${sw({ selected: true })}
      <div class="medcard__switch-sub">Text Text Text Text Text Text Text Text Text Text Text</div>
    </div>
  ` : '';

  const infoRow = (iconHtml, text) => `
    <div class="medcard__info-row">${iconHtml}<span>${esc(text)}</span></div>
  `;

  const headerLabel = (label = 'Text') => `<div class="medcard__label">${esc(label)}</div>`;
  const headerTitle = (title = 'Text') => `<div class="medcard__title">${esc(title)}</div>`;

  const imageMediumBasic = () => `
    <div class="medcard medcard--w198">
      ${thumbBlock('md')}
      <div class="medcard__body">
        ${headerLabel()}
        ${headerTitle()}
        <div class="medcard__meta">Text Text Text Text Text Text Text Text</div>
        <div class="medcard__line"></div>
        <div class="medcard__meta">Text Text Text</div>
      </div>
    </div>
  `;

  const imageMediumBasicTag = () => `
    <div class="medcard medcard--w198">
      ${thumbBlock('md', true)}
      <div class="medcard__body">
        ${headerLabel()}
        ${headerTitle()}
        <div class="medcard__meta">Text Text Text Text Text Text Text Text</div>
        <div class="medcard__line"></div>
        <div class="medcard__meta">Text Text Text</div>
      </div>
    </div>
  `;

  const imageMediumMeta = () => `
    <div class="medcard medcard--w198">
      ${thumbBlock('md')}
      <div class="medcard__body">
        <div class="medcard__row medcard__row--space">
          ${headerLabel()}
          <div class="medcard__meta medcard__meta--link">Text</div>
        </div>
        ${headerTitle()}
        <div class="medcard__rating">${starFull}${starFull}${starFull}${starFull}${starHalf}<span class="medcard__meta">Text</span></div>
        <div class="medcard__meta">Text</div>
        <button class="medcard__btn" type="button">Label</button>
      </div>
    </div>
  `;

  const imageLargeBasicButton = (tab = false) => `
    <div class="medcard medcard--w358 ${tab ? 'medcard--tab' : ''}">
      ${thumbBlock('lg')}
      <div class="medcard__body medcard__body--pad">
        <div class="medcard__label">Text</div>
        <div class="medcard__title-lg">Text</div>
        <button class="medcard__btn medcard__btn--full" type="button">Label</button>
      </div>
    </div>
  `;

  const imageLargeBasic = () => `
    <div class="medcard medcard--w358">
      ${thumbBlock('lg')}
      <div class="medcard__body medcard__body--pad">
        ${headerTitle()}
        <div class="medcard__label">Text</div>
        ${infoRow(clock, 'Text')}
        ${infoRow(earth, 'Text')}
        ${infoRow(pin, 'Text')}
      </div>
      <button class="medcard__ghost" type="button">${volumeSlash}</button>
    </div>
  `;

  const imageLargeMeta = () => `
    <div class="medcard medcard--w358">
      ${thumbBlock('lg')}
      <div class="medcard__body medcard__body--pad">
        <div class="medcard__title-xl">Text</div>
        <div class="medcard__label">Text</div>
        ${ratingRow()}
        ${textBox(aiCalendar, 'Text', 'Text Text Text Text Text Text Text Text Text')}
        ${chipGroup()}
      </div>
    </div>
  `;

  const labelLargeMetaButton = (multi = false) => `
    <div class="medcard medcard--w288 ${selected ? 'medcard--selected' : ''}">
      <div class="medcard__body medcard__body--pad">
        <div class="medcard__row medcard__row--space">
          <div class="medcard__title-lg">Title</div>
          <div class="medcard__meta medcard__meta--link">Text</div>
        </div>
        <div class="medcard__line"></div>
        <div class="medcard__row">
          <div class="medcard__ai-icon">${aiCheck}</div>
          <div class="medcard__stack">
            <div class="medcard__title">Text</div>
            <div class="medcard__meta">Text Text Text Text Text Text Text Text</div>
          </div>
        </div>
        ${textBox(aiShopping, 'Text', 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text')}
        ${switchRow()}
        ${multi ? `<button class="medcard__btn medcard__btn--full" type="button">Label</button>` : ''}
      </div>
    </div>
  `;

  const labelMediumMeta = () => `
    <div class="medcard medcard--w358">
      <div class="medcard__body medcard__body--pad">
        <div class="medcard__row medcard__row--space">
          <div class="medcard__title-lg">Title</div>
          <div class="medcard__meta medcard__meta--link">Text</div>
        </div>
        <div class="medcard__line"></div>
        <div class="medcard__row">
          ${avatar({ size: 'xsmall', type: 'user' })}
          <div class="medcard__stack">
            <div class="medcard__title">Text</div>
            <div class="medcard__meta">Text Text Text Text Text Text Text Text</div>
          </div>
        </div>
        <div class="medcard__row medcard__row--icon">
          <div class="medcard__title">Text</div>
          <div class="medcard__meta">Text</div>
          ${chevronRight}
        </div>
      </div>
    </div>
  `;

  if (variant === 'image-medium-basic') return imageMediumBasic();
  if (variant === 'image-medium-basic-tag') return imageMediumBasicTag();
  if (variant === 'image-medium-meta') return imageMediumMeta();
  if (variant === 'image-large-basic') return imageLargeBasic();
  if (variant === 'image-large-basic-button') return imageLargeBasicButton(false);
  if (variant === 'image-large-basic-button-tab') return imageLargeBasicButton(true);
  if (variant === 'image-large-meta') return imageLargeMeta();
  if (variant === 'label-medium-meta') return labelMediumMeta();
  if (variant === 'label-large-meta-button') return labelLargeMetaButton(false);
  if (variant === 'label-large-meta-buttons') return labelLargeMetaButton(true);

  const prototypeSmall = () => `
    <div class="medcard medcard--proto-sm">
      <div class="medcard__thumb medcard__thumb--sm">
        ${dsThumb ? dsThumb({ ratio: 'r43', state: 'image', cropped: true, gradation: false, outline: true, fill: true }) : `<img src="${imgThumb}" alt="" />`}
      </div>
      <div class="medcard__proto-sm-body">
        <div class="medcard__proto-sm-label">Text</div>
        <div class="medcard__proto-sm-price">
          <span>新品より </span>
          <span class="medcard__proto-sm-price-line">7,000円</span>
        </div>
        <div class="medcard__proto-sm-final">
          <span class="medcard__proto-sm-discount">36%</span>
          <span class="medcard__proto-sm-final-price">9,000円</span>
        </div>
      </div>
    </div>
  `;

  const prototypeLarge = () => {
    const tabItems = [
      { label: 'Text', selected: false },
      { label: 'Text', selected: true },
      { label: 'Text', selected: false },
    ];
    const comment = () => `
      <div class="medcard__proto-lg-comment">
        <div class="medcard__proto-lg-comment-title">Text</div>
        <div class="medcard__proto-lg-comment-body">Text Text Text Text Text</div>
      </div>
    `;
    return `
      <div class="medcard medcard--proto-lg">
        <div class="medcard__thumb medcard__thumb--lg">
          ${dsThumb ? dsThumb({ ratio: 'r43', state: 'image', cropped: true, gradation: false, outline: true, fill: true }) : `<img src="${imgThumb}" alt="" />`}
          <div class="medcard__proto-lg-pager"><span>1/5</span></div>
        </div>
        <div class="medcard__proto-lg-body">
          <div class="medcard__proto-lg-title">
            <div class="medcard__label">Text</div>
            <div class="medcard__proto-lg-title-text">Text</div>
          </div>
          <div class="medcard__proto-lg-detail">
            <div class="medcard__proto-lg-detail-row">
              <span class="medcard__proto-lg-detail-label">Text</span>
              <span class="medcard__proto-lg-detail-value">Text</span>
            </div>
            <div class="medcard__proto-lg-detail-row">
              <span class="medcard__proto-lg-detail-label">Text</span>
              <span class="medcard__proto-lg-detail-value">Text</span>
            </div>
            <div class="medcard__proto-lg-detail-row">
              <span class="medcard__proto-lg-detail-label">Text</span>
              <span class="medcard__proto-lg-detail-value">Text</span>
            </div>
          </div>
          <div class="medcard__proto-lg-tab">
            ${tab ? tab({ type: 'fixed', emphasis: 'default', items: tabItems }) : ''}
          </div>
          <div class="medcard__proto-lg-comments">
            ${comment()}
            ${comment()}
            ${comment()}
          </div>
          <div class="medcard__proto-lg-action">
            ${button({
              label: 'お気に入り',
              size: 'large',
              priority: 'outline-tertiary',
              showLeftIcon: true,
              leftIcon: 'heart_solid'
            })}
          </div>
        </div>
      </div>
    `;
  };

  if (variant === 'prototype-small') return prototypeSmall();
  if (variant === 'prototype-large') return prototypeLarge();

  return imageLargeBasicButton(false);
}
