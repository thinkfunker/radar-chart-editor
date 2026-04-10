export default function cardbtn(opts = {}) {
  const { esc } = window.DS_UTILS || { esc: (s) => s };
  const priority = opts.priority || 'solid';
  const state = opts.state || 'enabled';
  const label = opts.label || 'Label';

  const isDisabled = state === 'disabled';
  const isSolid = priority === 'solid';
  const stateLayer = (!isDisabled && state !== 'enabled')
    ? `<span class="cb__layer cb__layer--${state}-${priority}"></span>`
    : '';

  if (isSolid) {
    const btnCls = isDisabled ? 'cb cb--solid-dis' : 'cb cb--solid';
    return `
      <div class="cb-wrap">
        <button class="${btnCls}" type="button"${isDisabled ? ' disabled' : ''}>
          ${stateLayer}
          <span class="cb__label">${esc(label)}</span>
        </button>
      </div>
    `;
  }

  const wrapCls = isDisabled ? 'cb-out-wrap cb-out-wrap--dis' : 'cb-out-wrap';
  const btnCls = isDisabled ? 'cb cb--outline cb--outline-dis' : 'cb cb--outline';
  return `
    <div class="${wrapCls}">
      <button class="${btnCls}" type="button"${isDisabled ? ' disabled' : ''}>
        ${stateLayer}
        <span class="cb__label">${esc(label)}</span>
      </button>
    </div>
  `;
}