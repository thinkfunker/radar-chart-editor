export default function mcthumbnail(opts = {}) {
  const { thumb } = window.DS || {};
  const padded = opts.padding === 'true';
  const inner = thumb
    ? thumb({ ratio: 'r43', state: 'image', cropped: true, gradation: false, outline: true, fill: true })
    : '<div class="mct__outline"></div>';

  if (padded) {
    return `<div class="mct mct--padded"><div class="mct__inner">${inner}</div></div>`;
  }
  return `<div class="mct">${inner}</div>`;
}
