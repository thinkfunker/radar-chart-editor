export default function chipcard(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const {  size, selected, state  } = opts;
    const isDisabled = state === 'disabled';

    let cls = 'sch sch--' + size;
    if (isDisabled) cls += ' sch--disabled';
    else if (selected) cls += ' sch--sel';

    let layerHTML = '';
    if (!isDisabled && state !== 'enabled') {
      const mod = state === 'hovered' ? 'hover' : state === 'focused' ? 'focus' : 'press';
      layerHTML = '<div class="sch__layer sch__layer--' + mod + '"></div>';

    html = '<div class="' + cls + '">' + layerHTML + '<span>Label</span></div>';

    const selStr = isDisabled ? 'disabled' : (selected ? 'selected' : 'not-selected');
    lines = [
      '<span class="tok-cmt">&lt;!-- Chip — ' + size + ' · ' + selStr + ' · ' + state + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"' + cls + '"</span><span class="tok-tag">&gt;</span>',
      layerHTML ? '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"sch__layer sch__layer--' + (state === 'hovered' ? 'hover' : state === 'focused' ? 'focus' : 'press') + '"</span><span class="tok-tag">&gt;&lt;/div&gt;</span>' : '',
      '  <span class="tok-tag">&lt;span&gt;</span>Label<span class="tok-tag">&lt;/span&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ].filter(Boolean);
  
  return html;

}
}