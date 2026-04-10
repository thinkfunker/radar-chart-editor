/**
 * 02_components/scrim.js
 * Scrim Layer
 */
export default function scrim(opts = {}) {
  const className = opts.className ? ` ${opts.className}` : '';
  const ariaHidden = opts.ariaHidden === false ? '' : ' aria-hidden="true"';

  return `<div class="scrim-layer${className}"${ariaHidden}></div>`;
}
