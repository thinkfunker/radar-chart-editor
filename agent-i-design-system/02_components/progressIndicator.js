/**
 * 02_components/progressIndicator.js
 * Progress Indicator (bar)
 */
export default function progressIndicator(opts = {}) {
  const value = Math.max(0, Math.min(100, Number(opts.value ?? 20)));
  const className = opts.className || '';

  return `
    <div class="progress-indicator ${className}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}">
      <div class="progress-indicator__bar">
        <div class="progress-indicator__fill" style="width:${value}%;"></div>
      </div>
    </div>
  `;
}
