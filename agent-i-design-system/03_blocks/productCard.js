/**
 * Product Card Component
 * @param {object} opts
 * @param {string}  opts.brand       - brand name
 * @param {string}  opts.name        - product name
 * @param {string}  opts.price       - formatted price
 * @param {number}  opts.rating      - star rating (0–5)
 * @param {string}  opts.reviewCount - review count text
 * @param {string}  opts.badgeLabel  - badge text
 * @param {string}  opts.badgeVariant- tag variant (default 'gradient-primary')
 * @param {string}  opts.imgBg       - CSS background for image area
 * @param {string}  opts.imgIcon     - SVG content for placeholder
 */
export default function productCard(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const badgeHtml = opts.badgeLabel ? `<div style="position:absolute;top:var(--sizing-200);left:var(--sizing-200);display:flex;gap:var(--spacing-100);">${window.DS.tag({ label: opts.badgeLabel, variant: opts.badgeVariant || 'gradient-primary' })}</div>` : '';
  const rating  = opts.rating  !== undefined ? opts.rating : 5;
  return `<div class="pcard" role="article"><div class="pcard__img-wrap"><div style="width:100%;height:100%;background:${opts.imgBg || 'linear-gradient(135deg,var(--color-background-secondary),var(--color-background-tertiary))'};display:flex;align-items:center;justify-content:center;">${opts.imgIcon || ''}</div>${badgeHtml}<button class="pcard__wish">${icon('heart_solid', { size: 16, color: 'var(--color-content-primary)' })}</button></div><div class="pcard__body"><span class="pcard__brand">${esc(opts.brand || '')}</span><span class="pcard__name">${esc(opts.name || '')}</span>${window.DS.score({ rating, trail: opts.reviewCount || '', size: 'sm' })}<div class="pcard__price-row"><span class="pcard__price" style="font-size:var(--sizing-400);font-weight:700;color:${opts.salePriceAlert ? 'var(--color-content-alert)' : 'var(--color-content-primary)'};">${esc(opts.price || '')}</span></div></div></div>`;
}