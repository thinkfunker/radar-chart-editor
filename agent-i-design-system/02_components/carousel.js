export default function carousel(opts = {}) {
  const { esc, icon } = window.DS_UTILS || {};
  const DS = window.DS || {};
  if (!icon) return '';

  const type = opts.type || 'gallery';
  const moreState = opts.more || 'enabled';
  const imgThumb = '/icons/image-alt_outline.svg';

  const renderMore = () => {
    if (DS.moreButton) return DS.moreButton({ state: moreState });
    const stateClass = moreState === 'enabled' ? '' : ` state-${moreState}`;
    const isDisabled = moreState === 'disabled';
    const chevR = icon('chevron-right_solid', { size: 24, color: 'var(--color-content-primary)' });
    return `<button class="car__more${stateClass}" type="button" ${isDisabled ? 'disabled' : ''}>${chevR}</button>`;
  };

  const moreWrap = `<div class="car__more-wrap">${renderMore()}</div>`;

  const thumb = (size) => `
    <div class="car__gthumb car__gthumb--${size}">
      ${DS.thumb ? DS.thumb({ ratio: 'r11', state: 'image', cropped: true, gradation: false, outline: true, fill: true }) : `<img src="${imgThumb}" alt="" />`}
    </div>
  `;

  const pinIcon = icon('map-marker_outline', { size: 12, color: 'var(--color-content-tertiary)' });
  const earthIcon = icon('earth_solid', { size: 12, color: 'var(--color-content-tertiary)' });

  const mediaCard = () => `
    <div class="car__mcard">
      <div class="car__mcard-img">
        <img src="${imgThumb}" alt="" />
      </div>
      <div class="car__mcard-body">
        <div class="car__mcard-title">Text</div>
        <div class="car__mcard-row">${pinIcon}<span>Text</span></div>
        <div class="car__mcard-row">${earthIcon}<span>Text</span></div>
      </div>
    </div>
  `;

  const listCard = () => `
    <div class="car__lcard">
      <div class="car__lcard-title">Text</div>
      <div class="car__lcard-sub">Text</div>
      <div class="car__lcard-foot">Text</div>
    </div>
  `;

  const reviewCard = () => (DS.reviewcard ? DS.reviewcard({ header: 'title', tags: 'none' }) : '');

  if (type === 'gallery') {
    const thumbs = [
      thumb('lg'),
      thumb('sm'),
      thumb('lg'),
      thumb('sm'),
      thumb('lg')
    ].join('');
    return `
      <div class="car">
        <div class="car__track" style="align-items:center;">
          ${thumbs}
        </div>
        ${moreWrap}
      </div>
    `;
  }

  if (type === 'media') {
    const cards = Array.from({ length: 4 }).map(() => mediaCard()).join('');
    return `
      <div class="car">
        <div class="car__track">
          ${cards}
        </div>
        ${moreWrap}
      </div>
    `;
  }

  if (type === 'list') {
    const cards = Array.from({ length: 2 }).map(() => listCard()).join('');
    return `
      <div class="car car--list">
        <div class="car__track" style="align-items:center;">
          ${cards}
        </div>
        ${moreWrap}
      </div>
    `;
  }

  const reviews = Array.from({ length: 2 }).map(() => reviewCard()).join('');
  return `
    <div class="car car--review">
      <div class="car__track">
        ${reviews}
      </div>
      ${moreWrap}
    </div>
  `;
}
