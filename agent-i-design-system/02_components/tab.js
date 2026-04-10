export default function tab(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];

  const typeCls = opts.type === 'flexible' ? 'tab--flexible' : 'tab--fixed';
  const empCls = opts.emphasis === 'subtle' ? ' tab--subtle' : '';
  const cls = 'tab ' + typeCls + empCls;
  const defaultLabels = ['Home', 'Search', 'Saved', 'Profile'];
  const items = Array.isArray(opts.items)
    ? opts.items
    : Array.from({ length: parseInt(opts.items, 10) || 2 }, (_, idx) => ({
        label: defaultLabels[idx] || 'Label',
        selected: opts.selected === idx
      }));

  let itemsHtml = '';
  for (let i = 0; i < items.length; i++) {
    const item = items[i] || {};
    const selected = item.selected ?? opts.selected === i;
    const onCls = selected ? ' tab__item--on' : '';
    const label = esc(item.tabLabel || item.label || defaultLabels[i] || 'Label');
    const badge = item.badge ? `<span class="tab__badge">${esc(item.badgeLabel || item.badgeText || '3')}</span>` : '';
    const dotBadge = item.dotBadge
      ? '<span class="tab__dot"><span class="tab__dot-badge"></span></span>'
      : '';
    itemsHtml += '<div class="tab__item' + onCls + '"><div class="tab__item-content"><span class="tab__label">' + label + '</span>' + badge + dotBadge + '</div></div>';
  }

  html = '<div class="' + cls + '" style="max-width:calc(var(--sizing-100) * 120);">' + itemsHtml + '</div>';
  lines = [
    '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"' + cls + '"</span><span class="tok-tag">&gt;</span>',
    '  <span class="tok-cmt">&lt;!-- tab__item--on = selected --&gt;</span>',
    '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"tab__item tab__item--on"</span><span class="tok-tag">&gt;</span>',
    '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"tab__item-content"</span><span class="tok-tag">&gt;</span>',
    '      <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"tab__label"</span><span class="tok-tag">&gt;</span>Label<span class="tok-tag">&lt;/span&gt;</span>',
    '      <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"tab__badge"</span><span class="tok-tag">&gt;</span>3<span class="tok-tag">&lt;/span&gt;</span>',
    '      <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"tab__dot"</span><span class="tok-tag">&gt;&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"tab__dot-badge"</span><span class="tok-tag">&gt;&lt;/span&gt;&lt;/span&gt;</span>',
    '    <span class="tok-tag">&lt;/div&gt;</span>',
    '  <span class="tok-tag">&lt;/div&gt;</span>',
    '<span class="tok-tag">&lt;/div&gt;</span>',
  ];

  return html;

}