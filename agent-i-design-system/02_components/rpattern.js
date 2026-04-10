export default function rpattern(opts = {}) {
  const { esc, icon } = window.DS_UTILS || {};
  const { avatar, thumb: dsThumb } = window.DS || {};
  if (!icon) return '';

  const {
    type = 'list',
    media = 'none',
    mediaSize = 'none'
  } = opts;

  const safe = (value) => (esc ? esc(String(value)) : String(value));
  const imgThumb = '/icons/image-alt_outline.svg';

  const thumbBlock = (size = 'sm', outline = true) => `
    <div class="rp__lcard-thumb rp__lcard-thumb--${size}">
      ${dsThumb ? dsThumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline, fill: true }) : `<img src="${imgThumb}" alt="" />`}
    </div>
  `;

  const mediaThumb = (size = 'lg') => `
    <div class="rp__mcard-img rp__mcard-img--${size}">
      ${dsThumb ? dsThumb({ ratio: 'r43', state: 'image', cropped: true, gradation: false, outline: true, fill: true }) : `<img src="${imgThumb}" alt="" />`}
      <span class="rp__mcard-badge">Label</span>
    </div>
  `;

  const chevronDown = icon('chevron-down_solid', { size: 14, color: 'var(--color-content-tertiary)' });
  const chevronRight = icon('chevron-right_solid', { size: 12, color: 'var(--color-content-tertiary)' });
  const star = icon('star_solid_full', { size: 12, color: 'var(--color-content-warning)' });
  const utensil = icon('streetfood_solid', { size: 12, color: 'var(--color-content-tertiary)' });

  const dots = `
    <div class="rp__paginate" aria-hidden="true">
      <span class="rp__dot rp__dot--active"></span>
      <span class="rp__dot"></span>
      <span class="rp__dot"></span>
      <span class="rp__dot"></span>
      <span class="rp__dot"></span>
    </div>
  `;

  const listCardBasic = () => `
    <div class="rp__lcard">
      <div class="rp__lcard-content">
        <div class="rp__lcard-title">Text</div>
        <div class="rp__lcard-sub">Text</div>
        <div class="rp__lcard-meta">Text</div>
      </div>
    </div>
  `;

  const listCardThumb = () => `
    <div class="rp__lcard rp__lcard--thumb">
      <div class="rp__lcard-content">
        <div class="rp__lcard-top">
          <div class="rp__lcard-name">Text</div>
          <div class="rp__lcard-small-gray">Text</div>
        </div>
        <div class="rp__lcard-bottom">
          <div class="rp__lcard-addr">
            <span class="rp__lcard-small-gray">Text</span>
            <span class="rp__lcard-dot"></span>
            <span class="rp__lcard-small-gray">Text</span>
            <span class="rp__lcard-chevdown">${chevronDown}</span>
          </div>
          <div class="rp__lcard-small-gray">Text</div>
        </div>
      </div>
      ${thumbBlock('lg', true)}
    </div>
  `;

  const listCardThumbSmall = () => `
    <div class="rp__lcard rp__lcard--sm">
      <div class="rp__lcard-content">
        <div class="rp__lcard-title">Text</div>
        <div class="rp__lcard-sub">Text</div>
      </div>
      ${thumbBlock('sm', true)}
    </div>
  `;

  const mediaCardMedium = () => `
    <div class="rp__mcard rp__mcard--md">
      ${mediaThumb('md')}
      <div class="rp__mcard-body rp__mcard-body--md">
        <div class="rp__mcard-title">Text</div>
        <div class="rp__mcard-info">
          <span class="rp__mcard-info-text">Text</span>
          <span class="rp__mcard-icon">${utensil}</span>
          <span class="rp__mcard-info-text">Text</span>
        </div>
        <div class="rp__mcard-user">
          ${avatar ? avatar({ size: 'xsmall', type: 'user' }) : '<span class="rp__mcard-avatar"></span>'}
          <span class="rp__mcard-user-text">Text</span>
        </div>
      </div>
    </div>
  `;

  const mediaCardLarge = () => `
    <div class="rp__mcard rp__mcard--lg">
      ${mediaThumb('lg')}
      <div class="rp__mcard-body rp__mcard-body--lg">
        <div class="rp__mcard-brand-row">
          <span class="rp__mcard-brand">Text</span>
          <span class="rp__mcard-brand-chev">${chevronRight}</span>
        </div>
        <div class="rp__mcard-title">Text Text Text Text Text</div>
        <div class="rp__mcard-price-row">
          <span class="rp__mcard-price-red">Text</span>
          <span class="rp__mcard-price-dark">Text</span>
        </div>
        <div class="rp__mcard-stars">
          ${star}${star}${star}${star}${star}
          <span class="rp__mcard-rating">Text</span>
        </div>
      </div>
    </div>
  `;

  if (type === 'list' && media === 'none') {
    return `
      <div class="rp__list">
        ${listCardBasic()}
        ${listCardBasic()}
        ${listCardBasic()}
        ${listCardBasic()}
      </div>
    `;
  }

  if (type === 'list' && media === 'thumbnail' && mediaSize === 'small') {
    return `
      <div class="rp__list rp__list--sm">
        ${listCardThumb()}
        ${listCardThumb()}
        ${listCardThumb()}
        ${listCardThumb()}
      </div>
    `;
  }

  if (type === 'carousel' && media === 'none') {
    return `
      <div class="rp__carousel">
        <div class="rp__cols">
          <div class="rp__col">
            ${listCardBasic()}
            ${listCardBasic()}
            ${listCardBasic()}
          </div>
          <div class="rp__col">
            ${listCardBasic()}
            ${listCardBasic()}
            ${listCardBasic()}
          </div>
        </div>
        ${dots}
      </div>
    `;
  }

  if (type === 'carousel' && media === 'thumbnail' && mediaSize === 'small') {
    return `
      <div class="rp__carousel">
        <div class="rp__cols">
          <div class="rp__col">
            ${listCardThumbSmall()}
            ${listCardThumbSmall()}
            ${listCardThumbSmall()}
          </div>
          <div class="rp__col">
            ${listCardThumbSmall()}
            ${listCardThumbSmall()}
            ${listCardThumbSmall()}
          </div>
        </div>
        ${dots}
      </div>
    `;
  }

  if (type === 'carousel' && media === 'thumbnail' && mediaSize === 'medium') {
    return `
      <div class="rp__carousel">
        <div class="rp__cols">
          ${mediaCardMedium()}
          ${mediaCardMedium()}
          ${mediaCardMedium()}
          ${mediaCardMedium()}
        </div>
        ${dots}
      </div>
    `;
  }

  if (type === 'carousel' && media === 'thumbnail' && mediaSize === 'large') {
    return `
      <div class="rp__carousel">
        <div class="rp__cols">
          ${mediaCardLarge()}
          ${mediaCardLarge()}
          ${mediaCardLarge()}
        </div>
        ${dots}
      </div>
    `;
  }

  return `
    <div class="rp__list">
      ${listCardBasic()}
      ${listCardBasic()}
    </div>
  `;
}
