/**
 * Progress Indicator Component
 * @param {object} opts
 * @param {string} opts.type     - 'circle' | 'bar' (default 'circle')
 * @param {string} opts.size     - 'small' | 'medium' | 'large' (default 'medium')
 * @param {number} opts.value    - progress value (0-100) for 'bar' type
 * @param {string} opts.label    - optional text label
 */
export default function progress(opts = {}) {
  const { esc } = window.DS_UTILS;
  const type = opts.type || 'circle';
  const size = opts.size || 'medium';
  const value = Math.max(0, Math.min(100, opts.value || 0));
  const label = opts.label || '';

  if (type === 'bar') {
    return `
      <div class="progress-bar-wrap" style="width:100%;margin:0;">
        ${label ? `<div style="font-size:var(--sizing-300);color:var(--color-content-tertiary);margin-bottom:var(--spacing-100);">${esc(label)}</div>` : ''}
        <div class="progress-bar" style="height:var(--sizing-100);background: var(--color-background-tertiary);border-radius:var(--border-width-200);overflow:hidden;position:relative;">
          <div class="progress-bar__fill" style="width:${value}%;height:100%;background:linear-gradient(26.07deg, var(--color-gradient-background-stop-1) 5.1%, var(--color-gradient-background-stop-2) 92.36%);"></div>
        </div>
      </div>
    `;
  }

  // Circle (Spinner)
  const sizePx = { small: 20, medium: 32, large: 40 }[size] || 32;
  return `
    <div class="progress-circle-wrap" style="display:inline-flex;flex-direction:column;align-items:center;gap:var(--spacing-200);">
      <div class="progress-circle" style="width:${sizePx}px;height:${sizePx}px;border:var(--border-width-300) solid var(--color-background-tertiary);border-top-color: var(--color-content-key);border-radius:50%;animation: ds-spin 1s linear infinite;"></div>
      ${label ? `<div style="font-size:var(--sizing-300);color:var(--color-content-tertiary);">${esc(label)}</div>` : ''}
      <style>
        @keyframes ds-spin { to { transform: rotate(360deg); } }
      </style>
    </div>
  `;
}
