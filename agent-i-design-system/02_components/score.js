/**
 * Score (Star Rating) Component
 * @param {object} opts
 * @param {number} opts.rating  - score out of 5 (default 5)
 * @param {number} opts.max     - max stars (default 5)
 * @param {string} opts.trail   - review count text e.g. '(128)'
 * @param {string} opts.size    - 'small' | 'medium' | 'sm' | 'md' (default 'medium')
 * @param {string} opts.type    - 'default' | 'simple' (default 'default')
 * @param {boolean} opts.leadingText  - show leading text (default true)
 * @param {boolean} opts.trailingText - show trailing text (default true)
 */
export default function score(opts = {}) {
  const { renderStars, esc } = window.DS_UTILS;
  const rating = opts.rating !== undefined ? opts.rating : 5;
  const trail = opts.trail || '';
  const max = opts.max || 5;
  const type = opts.type || 'default';
  const leadingText = opts.leadingText !== undefined ? opts.leadingText : true;
  const trailingText = opts.trailingText !== undefined ? opts.trailingText : true;
  const sizeRaw = opts.size || 'medium';
  const size = sizeRaw === 'sm' ? 'small' : sizeRaw === 'md' ? 'medium' : sizeRaw;
  const sizeClass = size === 'small' ? 'score--sm' : '';
  const typeClass = type === 'simple' ? 'score--simple' : 'score--default';
  const starSize = size === 'small' ? 16 : 20;

  const starsHtml = type === 'simple'
    ? renderStars(1, 1, { size: starSize })
    : renderStars(rating, max, { size: starSize });

  const leadHtml = leadingText ? `<span class="score__lead">${rating.toFixed(1)}</span>` : '';
  const trailHtml = trailingText && trail ? `<span class="score__trail">${esc(trail)}</span>` : '';

  if (type === 'simple') {
    return `
<div class="score ${typeClass} ${sizeClass}">
  <span class="score__stars">${starsHtml}</span>
  ${leadHtml}
  ${trailHtml}
</div>`;
  }

  return `
<div class="score ${typeClass} ${sizeClass}">
  ${leadHtml}
  <span class="score__stars">${starsHtml}</span>
  ${trailHtml}
</div>`;
}