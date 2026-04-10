export default function pagind(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    if (opts.type === 'numbers') {
      const current = Number.isFinite(opts.current) ? Math.max(1, opts.current) : 1;
      const total = Number.isFinite(opts.total) ? Math.max(current, opts.total) : 5;
      html = `<div class="page-ind page-ind--numbers"><span class="page-ind__num">${esc(String(current))}/${esc(String(total))}</span></div>`;
      lines = [
        '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind page-ind--numbers"</span><span class="tok-tag">&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__num"</span><span class="tok-tag">&gt;</span>1/5<span class="tok-tag">&lt;/span&gt;</span>',
        '<span class="tok-tag">&lt;/div&gt;</span>',
      ];
    } else if (opts.pages === 'overflow') {
      html = '<div class="page-ind page-ind--overflow">'
           + '<span class="page-ind__dot page-ind__dot--xs"></span>'
           + '<span class="page-ind__dot page-ind__dot--sm"></span>'
           + '<span class="page-ind__dot"></span>'
           + '<span class="page-ind__dot"></span>'
           + '<span class="page-ind__dot"></span>'
           + '<span class="page-ind__dot page-ind__dot--sm"></span>'
           + '<span class="page-ind__dot page-ind__dot--xs"></span>'
           + '</div>';
      lines = [
        '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind page-ind--overflow"</span><span class="tok-tag">&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot page-ind__dot--xs"</span><span class="tok-tag">&gt;&lt;/span&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot page-ind__dot--sm"</span><span class="tok-tag">&gt;&lt;/span&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot"</span><span class="tok-tag">&gt;&lt;/span&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot"</span><span class="tok-tag">&gt;&lt;/span&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot"</span><span class="tok-tag">&gt;&lt;/span&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot page-ind__dot--sm"</span><span class="tok-tag">&gt;&lt;/span&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot page-ind__dot--xs"</span><span class="tok-tag">&gt;&lt;/span&gt;</span>',
        '<span class="tok-tag">&lt;/div&gt;</span>',
      ];
    } else {
      html = '<div class="page-ind page-ind--dot">'
           + '<span class="page-ind__dot"></span>'
           + '<span class="page-ind__dot"></span>'
           + '<span class="page-ind__dot page-ind__dot--active"></span>'
           + '<span class="page-ind__dot"></span>'
           + '<span class="page-ind__dot"></span>'
           + '</div>';
      lines = [
        '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind page-ind--dot"</span><span class="tok-tag">&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot"</span><span class="tok-tag">&gt;&lt;/span&gt;</span> <span class="tok-cmt">&lt;!-- inactive --&gt;</span>',
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"page-ind__dot page-ind__dot--active"</span><span class="tok-tag">&gt;&lt;/span&gt;</span> <span class="tok-cmt">&lt;!-- active --&gt;</span>',
        '<span class="tok-tag">&lt;/div&gt;</span>',
      ];
    }

  // ── Message ───────────────────────────────────────────────────
  return html;

}
