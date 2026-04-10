export default function moreButton(opts = {}) {
  const { icon } = window.DS_UTILS || {};
  if (!icon) return '';

  const state = opts.state || 'enabled';
  const stateClass = state === 'enabled' ? '' : ` state-${state}`;
  const isDisabled = state === 'disabled';
  const chevron = icon('chevron-right_solid', { size: 24, color: 'var(--color-content-primary)' });

  return `
    <button class="car__more${stateClass}" type="button" aria-pressed="false" ${isDisabled ? 'disabled' : ''}>
      ${chevron}
    </button>
  `;
}