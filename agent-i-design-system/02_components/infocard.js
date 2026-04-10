/**
 * Info Card (Figma 29998:25445)
 * @param {object} opts
 * @param {string} opts.detail - 'low'|'medium'|'high'
 * @param {string} opts.media - 'icon'|'thumbnail'|'none'
 * @param {string} opts.action - 'none'|'button'
 */
export default function infocard(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const { button, avatar, thumb } = window.DS;
  const detail = opts.detail || 'low';
  const media = opts.media || 'icon';
  const action = opts.action || 'none';

  const bellOutline = icon('bell_outline', { size: 18, color: 'var(--color-content-tertiary)' });
  const chevronRight = icon('chevron-right_outline', { size: 16, color: 'var(--color-content-tertiary)' });
  const checkCircle = icon('check-circle_solid', { size: 40, color: 'var(--color-content-key)' });
  const arrowUp = icon('arrow-up_solid', { size: 20, color: 'var(--color-content-tertiary)' });
  const paypay = icon('paypay_solid', { size: 44, color: 'var(--color-content-primary)' });
  const listIcon = icon('ellipsis-vertical_outline', { size: 18, color: 'var(--color-content-tertiary)' });

  const renderThumb = (size = 96, ratio = '1:1') => `
    <div class="icard__thumb" style="width:${size}px;height:${size}px;">
      ${thumb({ ratio, fill: true, cropped: true, outline: true })}
    </div>
  `;

  const smallThumb = () => `
    <div class="icard__thumb icard__thumb--sm">
      ${thumb({ ratio: '16:9', fill: true, cropped: true, outline: true })}
    </div>
  `;

  const lowIcon = () => `
    <div class="icard icard--narrow">
      <div class="icard__icon-row">
        <div class="icard__dot icard__dot--warn"></div>
        <div class="icard__dot icard__dot--warn"></div>
      </div>
      <div class="icard__temp-row">
        <span class="icard__temp-hi">Text</span>
        <span class="icard__temp-slash">/</span>
        <span class="icard__temp-lo">Text</span>
      </div>
    </div>
  `;

  const lowThumbnail = () => `
    <div class="icard icard--wide">
      <div class="icard__row icard__row--center">
        <div class="icard__icon">${bellOutline}</div>
        <div class="icard__meta">Text</div>
        <div class="icard__icon">${chevronRight}</div>
      </div>
      <div class="icard__row icard__row--space">
        <div class="icard__stack">
          <div class="icard__title-sm">Text</div>
          <div class="icard__meta">Text</div>
          <div class="icard__link">Text</div>
        </div>
        ${renderThumb(96)}
      </div>
    </div>
  `;

  const lowNoneButton = () => `
    <div class="icard icard--wide">
      <div class="icard__stack">
        <div class="icard__gradient-title">Text</div>
        <div class="icard__title-sm">Text</div>
      </div>
      ${button({ label: 'Label', size: 'large', variant: 'outline-tertiary' })}
    </div>
  `;

  const mediumIcon = () => `
    <div class="icard icard--wide icard--center">
      <div class="icard__check">${checkCircle}</div>
      <div class="icard__stack icard__stack--center">
        <div class="icard__title-sm">Text</div>
        <div class="icard__title-lg">Text</div>
      </div>
      <div class="icard__stack icard__stack--center icard__meta-block">
        <div>Text</div>
        <div>Text</div>
      </div>
      <div class="icard__divider"></div>
      <div class="icard__info-rows">
        <div class="icard__info-row"><span>Text</span><span>Text</span></div>
        <div class="icard__info-row"><span>Text</span><span>Text</span></div>
      </div>
      <div class="icard__btn-col">
        ${button({ label: 'Label', size: 'large', variant: 'outline-secondary' })}
        ${button({ label: 'Label', size: 'large', variant: 'outline-tertiary' })}
      </div>
    </div>
  `;

  const mediumThumbnail = () => `
    <div class="icard icard--wide">
      <div class="icard__row icard__row--space">
        <div class="icard__stack">
          <div class="icard__title-lg">Text</div>
          <div class="icard__meta">Text</div>
        </div>
        ${renderThumb(96)}
      </div>
      <div class="icard__divider"></div>
      <div class="icard__body">Text Text Text Text Text Text Text Text Text Text Text Text</div>
    </div>
  `;

  const highIcon = () => `
    <div class="icard icard--sq">
      <div class="icard__avatar">${avatar({ size: 'small', type: 'user' })}</div>
      <div class="icard__big-num">Text</div>
      <div class="icard__meta">Text</div>
      <div class="icard__divider"></div>
      <div class="icard__info-rows icard__info-rows--center">
        <div class="icard__info-row"><span>Text</span><span>Text</span></div>
        <div class="icard__info-row"><span>Text</span><span>Text</span></div>
      </div>
    </div>
  `;

  const highThumbnail = () => `
    <div class="icard icard--wide">
      <div class="icard__row icard__row--space">
        <div class="icard__stack">
          <div class="icard__temp">10°</div>
          <div class="icard__row">
            <div class="icard__icon">${arrowUp}</div>
            <div class="icard__temp-sub">5º</div>
          </div>
        </div>
        ${renderThumb(96)}
      </div>
      <div class="icard__data-cols">
        ${['Text', 'Text', 'Text'].map(() => `
          <div class="icard__data-col">
            <div class="icard__meta">Text</div>
            <div class="icard__title-sm">Text</div>
          </div>
        `).join('')}
      </div>
      <div class="icard__body">Text Text Text Text Text Text Text Text Text Text Text Text</div>
    </div>
  `;

  const highThumbnailButton = () => `
    <div class="icard icard--wide">
      <div class="icard__row icard__row--space">
        <div class="icard__title-sm">Text</div>
        ${renderThumb(88)}
      </div>
      <div class="icard__divider"></div>
      <div class="icard__kv">
        ${['Text', 'Text', 'Text'].map(() => `
          <div class="icard__kv-row">
            <span class="icard__kv-key">Text</span>
            <span class="icard__kv-val">Text</span>
          </div>
        `).join('')}
      </div>
      <div class="icard__divider"></div>
      <div class="icard__btn-row">
        ${button({ label: 'Label', size: 'large', variant: 'outline-secondary' })}
        ${button({ label: 'Label', size: 'large', variant: 'outline-tertiary' })}
      </div>
    </div>
  `;

  const highNone = () => `
    <div class="icard icard--wide">
      ${['Text', 'Text', 'Text', 'Text', 'Text'].map(() => `
        <div class="icard__section">
          <div class="icard__title-sm">Text</div>
          <ul class="icard__list">
            ${['label', 'label', 'label', 'label', 'label'].map((t) => `<li>${esc(t)}</li>`).join('')}
          </ul>
          <div class="icard__divider"></div>
        </div>
      `).join('')}
      <div class="icard__meta">Text</div>
      <div class="icard__row icard__row--list">
        <div class="icard__mini-card">
          <div class="icard__mini-title">Text</div>
          <div class="icard__mini-row">${smallThumb()}<span class="icard__meta">Text</span></div>
        </div>
        <div class="icard__mini-card">
          <div class="icard__mini-title">Text</div>
          <div class="icard__mini-row">${smallThumb()}<span class="icard__meta">Text</span></div>
        </div>
      </div>
    </div>
  `;

  if (detail === 'low' && media === 'icon') return lowIcon();
  if (detail === 'low' && media === 'thumbnail') return lowThumbnail();
  if (detail === 'low' && media === 'none') return lowNoneButton();
  if (detail === 'medium' && media === 'icon') return mediumIcon();
  if (detail === 'medium' && media === 'thumbnail') return mediumThumbnail();
  if (detail === 'high' && media === 'icon') return highIcon();
  if (detail === 'high' && media === 'thumbnail' && action === 'button') return highThumbnailButton();
  if (detail === 'high' && media === 'thumbnail') return highThumbnail();
  if (detail === 'high' && media === 'none') return highNone();

  return lowIcon();
}
