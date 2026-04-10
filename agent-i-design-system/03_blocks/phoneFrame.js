export default function phoneFrame(children, opts = {}) {
  const { join } = window.DS_UTILS;
  const bg = opts.bg || 'var(--color-background-secondary)';
  const clipOverflow = opts.clipOverflow === true;
  const centered = opts.centered !== false;
  
  const style = [
    `width:var(--size-phone-width)`,
    `min-height:100vh`,
    `background:${bg}`,
    `display:flex`,
    `flex-direction:column`,
    `position:relative`,
    `box-shadow: var(--shadow-4)`,
    centered ? `margin: 40px auto` : '',
    clipOverflow ? 'overflow:hidden' : 'overflow:visible'
  ].filter(Boolean).join(';');

  return `<div class="ds-phone" style="${style}">${join(children)}</div>`;
}
