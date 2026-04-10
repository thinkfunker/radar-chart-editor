export default function textinput(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const state = opts.state || 'enabled';
  const inputText = opts.inputText || 'Placeholder';
  const modCls = state !== 'enabled' ? ` tinput--${state}` : '';
  const cls = `tinput${modCls}`;

  const pen = icon('pen_solid', { size: 20, color: 'var(--color-content-tertiary)' });
  const clearIcon = icon('cross-circle_solid', { size: 24, color: 'var(--color-content-tertiary)' });

  if (state === 'enabled') {
    return `
      <div class="${cls}">
        <span class="tinput__icon">${pen}</span>
        <div class="tinput__body">
          <span class="tinput__placeholder">${esc(inputText)}</span>
        </div>
      </div>
    `;
  }

  if (state === 'focused') {
    return `
      <div class="${cls}">
        <span class="tinput__cursor"></span>
        <div class="tinput__body">
          <span class="tinput__placeholder">${esc(inputText)}</span>
        </div>
      </div>
    `;
  }

  if (state === 'typing') {
    return `
      <div class="${cls}">
        <div class="tinput__body">
          <span class="tinput__value">${esc(inputText)}</span>
          <span class="tinput__cursor"></span>
        </div>
        <button class="tinput__clear" type="button" aria-label="Clear">${clearIcon}</button>
      </div>
    `;
  }

  if (state === 'typed') {
    return `
      <div class="${cls}">
        <div class="tinput__body">
          <span class="tinput__value">${esc(inputText)}</span>
        </div>
      </div>
    `;
  }

  if (state === 'error') {
    return `
      <div class="${cls}">
        <div class="tinput__body">
          <span class="tinput__value">${esc(inputText)}</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="${cls}">
      <div class="tinput__body">
        <span class="tinput__placeholder tinput__placeholder--disabled">${esc(inputText)}</span>
      </div>
    </div>
  `;
}