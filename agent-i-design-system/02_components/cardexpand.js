/**
 * Card Expand (Figma 38864:3867)
 * @param {object} opts
 * @param {string} opts.type - 'default' | 'inline'
 * @param {boolean} opts.expand
 */
export default function cardExpand(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const type = opts.type || 'default';
  const expand = opts.expand !== false;
  const isInline = type === 'inline';

  const chevronUp = icon('chevron-up_solid', { size: 20, color: 'var(--color-content-key)' });
  const chevronDown = icon('chevron-down_solid', { size: 20, color: 'var(--color-content-key)' });
  const label = expand ? '閉じる' : '詳細を見る';

  if (isInline) {
    return `
      <div class="card-expand card-expand--inline ${expand ? 'is-expanded' : 'is-collapsed'}">
        <div class="card-expand__text">
          ${esc('Text Text Text Text Text Text Text Text Text Text Text Text')}
        </div>
        ${expand ? '' : `<button class="card-expand__ghost">${esc('詳細を見る')}</button>`}
      </div>
    `;
  }

  return `
    <div class="card-expand card-expand--default ${expand ? 'is-expanded' : 'is-collapsed'}">
      <button class="card-expand__ghost card-expand__ghost--icon">
        <span class="card-expand__icon">${expand ? chevronUp : chevronDown}</span>
        <span class="card-expand__label">${esc(label)}</span>
      </button>
    </div>
  `;
}