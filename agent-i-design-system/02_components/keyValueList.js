export default function keyValueList(opts = {}) {
  const { esc, icon } = window.DS_UTILS || {};
  if (!icon) return '';

  const state = opts.state || 'collapsed';
  const isExpanded = state === 'expanded';
  const itemCount = isExpanded ? 10 : 3;
  const items = Array.from({ length: itemCount }).map(() => ({ key: 'Key', value: 'Value' }));

  const chevron = isExpanded
    ? icon('chevron-up_outline', { size: 16, color: 'var(--color-content-primary)' })
    : icon('chevron-down_outline', { size: 16, color: 'var(--color-content-primary)' });
  const label = isExpanded ? '閉じる' : 'もっと見る';

  const rows = items.map((item) => `
    <div class="kvlist__row">
      <div class="kvlist__key">${esc ? esc(item.key) : item.key}</div>
      <div class="kvlist__value">${esc ? esc(item.value) : item.value}</div>
    </div>
  `).join('');

  return `
    <div class="kvlist">
      <div class="kvlist__list">
        ${rows}
      </div>
      <button class="kvlist__toggle" type="button">
        <span class="kvlist__toggle-icon">${chevron}</span>
        <span class="kvlist__toggle-label">${label}</span>
      </button>
    </div>
  `;
}