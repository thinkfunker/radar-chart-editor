export default function tooltip(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const pos     = opts.position; // 'top' | 'bottom'
    const hasTitle = opts.title;
    const cls     = 'tooltip tooltip--' + pos;
    const xIcon   = DS_UTILS.icon('cross_solid', { size: 24, color: 'currentColor' });
    const titleHtml = hasTitle ? '<div class="tooltip__title">Title</div>' : '';
    html = '<div class="' + cls + '">'
         +   '<div class="tooltip__box">'
         +     '<button class="tooltip__close">' + xIcon + '</button>'
         +     (hasTitle ? '<div class="tooltip__title">Title</div>' : '')
         +     '<div class="tooltip__text">Text Text Text Text Text Text Text Text Text Text Text</div>'
         +   '</div>'
         + '</div>';
    lines = [
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"' + cls + '"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"tooltip__box"</span><span class="tok-tag">&gt;</span>',
      '    <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"tooltip__close"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span>',
      ...(hasTitle ? ['    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"tooltip__title"</span><span class="tok-tag">&gt;</span>Title<span class="tok-tag">&lt;/div&gt;</span>'] : []),
      '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"tooltip__text"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      '  <span class="tok-tag">&lt;/div&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];

  // ── Tag ────────────────────────────────────────────────────
  return html;

}