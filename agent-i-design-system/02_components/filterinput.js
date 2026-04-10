/**
 * 02_components/filterinput.js
 * Search / Price Range Input
 */
export default function filterInput(opts = {}) {
  const { esc, icon } = window.DS_UTILS || { esc: (s) => s, icon: null };
  const type = opts.type === 'price' ? 'price' : 'search';
  const placeholder = opts.placeholder || '商品名、型番などを入力';
  const minValue = opts.minValue || '18,000円';
  const maxValue = opts.maxValue || '25,000円';
  const className = opts.className || '';

  if (type === 'price') {
    return `
      <div class="filter-input filter-input--price ${className}">
        <div class="filter-input__field">
          <span class="filter-input__value">${esc(minValue)}</span>
        </div>
        <span class="filter-input__minus" aria-hidden="true"></span>
        <div class="filter-input__field">
          <span class="filter-input__value">${esc(maxValue)}</span>
        </div>
      </div>
    `;
  }

  const searchIcon = icon ? icon('search_solid', { size: 20, color: 'var(--color-content-tertiary)' }) : '';
  return `
    <div class="filter-input filter-input--search ${className}">
      <div class="filter-input__field">
        <span class="filter-input__icon">${searchIcon}</span>
        <span class="filter-input__placeholder">${esc(placeholder)}</span>
      </div>
    </div>
  `;
}
