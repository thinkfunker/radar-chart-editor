export default function selectionCard(opts = {}) {
  const { esc, icon } = window.DS_UTILS || {};
  if (!icon) return '';

  const title = opts.title || 'Text';
  const columns = opts.columns || '2 Columns';
  const isFour = String(columns).toLowerCase().includes('4');
  const perRow = isFour ? 4 : 2;

  const bgStyle = 'background:linear-gradient(36.987deg, var(--color-gradient-background-ai-surface-stop-1) 5.1%, var(--color-gradient-background-ai-surface-stop-2) 92.36%)';
  const questionIcon = icon('question-text-circle_solid', { size: 24, color: 'var(--color-content-primary)' });
  const chevronRight = icon('chevron-right_outline', { size: 20, color: 'var(--color-content-tertiary)' });

  const labels = Array.from({ length: isFour ? 8 : 8 }, () => 'Label');
  const rows = [];
  for (let i = 0; i < labels.length; i += perRow) {
    const slice = labels.slice(i, i + perRow);
    rows.push(`
      <div class="selcard__chip-row">
        ${slice.map((label) => `
          <button class="selcard__chip" type="button">
            <span class="selcard__chip-label">${esc ? esc(label) : label}</span>
            <span class="selcard__chip-chevron">${chevronRight}</span>
          </button>
        `).join('')}
      </div>
    `);
  }

  return `
    <div class="selcard" style="${bgStyle}">
      <div class="selcard__header">
        <div class="selcard__header-icon">${questionIcon}</div>
        <div class="selcard__header-text">${esc ? esc(title) : title}</div>
      </div>
      <div class="selcard__chip-group">
        ${rows.join('')}
      </div>
    </div>
  `;
}