export default function aibg(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const isDark = opts.dark;
    const modCls = isDark ? 'aibg aibg--dark' : 'aibg aibg--light';
    // Scale: 390×844 → 195×422 (50%)
    html = '<div class="aibg-preview" style="width:var(--size-aibg-preview-width-lg);height:var(--size-aibg-preview-height-lg);">'
         + '<div class="' + modCls + '" style="transform:scale(0.5);transform-origin:0 0;"></div>'
         + '</div>';
    lines = [
      '<span class="tok-cmt">&lt;!-- dark: ' + isDark + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"' + modCls + '"</span><span class="tok-tag">&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  
  return html;

}