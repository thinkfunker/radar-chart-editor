export default function listsel(opts = {}) {
  const { esc } = window.DS_UTILS;
  const selected = !!opts.selected;
  const state = opts.state || 'enabled';
  const showSubText = opts.showSubText !== false;
  const title = opts.title || 'Title text';
  const subText = opts.subText || 'Sub text';

  const selCls = selected ? 'list-sel--selected' : 'list-sel--unselected';
  const stateCls = state !== 'enabled' ? ` state-${state}` : '';
  const cls = `list-sel ${selCls}${stateCls}`;

  return `<div class="${cls}">
    <div class="list-sel-title">${esc(title)}</div>
    ${showSubText ? `<div class="list-sel-sub">${esc(subText)}</div>` : ''}
  </div>`;
}