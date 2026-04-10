/**
 * 02_components/floatingButton.js
 * Floating Button (AI / Close)
 */
export default function floatingButton(opts = {}) {
  const { icon } = window.DS_UTILS || {};
  const type = opts.type === 'close' ? 'close' : 'ai-agent';
  const className = opts.className || '';

  if (type === 'close') {
    const closeIcon = icon ? icon('cross_solid', { size: 28, color: 'var(--color-content-primary)' }) : '';
    return `
      <button class="float-btn ${className}" type="button" aria-label="Close">
        <span class="float-btn__icon">${closeIcon}</span>
      </button>
    `;
  }

  const aiAvatar = window.DS?.avatar
    ? window.DS.avatar({ size: 'medium', type: 'ai', className: 'float-btn__ai' })
    : '';

  return `
    <button class="float-btn ${className}" type="button" aria-label="AI Agent">
      ${aiAvatar}
    </button>
  `;
}
