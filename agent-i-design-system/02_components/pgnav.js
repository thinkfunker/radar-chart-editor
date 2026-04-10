/**
 * 02_components/pgnav.js
 * Pagination Navigation Button
 */
export default function paginationNav(opts = {}) {
  const { icon } = window.DS_UTILS || {};
  const direction = opts.direction === 'next' ? 'next' : 'prev';
  const state = opts.state || 'enabled';
  const className = opts.className || '';

  const isDisabled = state === 'disabled';
  const stateCls = ['hovered', 'focused', 'pressed'].includes(state) ? ` state-${state}` : '';
  const disabledCls = isDisabled ? ' pg-nav--disabled' : '';
  const cls = `pg-nav${disabledCls}${stateCls} ${className}`.trim();

  const iconName = direction === 'next' ? 'chevron-right_solid' : 'chevron-left_solid';
  const iconHtml = icon ? icon(iconName, { size: 20, color: 'currentColor' }) : '';

  return `<button class="${cls}" aria-label="${direction === 'next' ? 'Next' : 'Prev'}">${iconHtml}</button>`;
}
