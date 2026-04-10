export default function footer(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const isMobile = opts.os === 'mobile';
    const sepH = '<span class="footer-sep"></span>';
    const linkH = '<a class="footer-link">Link Label</a>';
    const links6 = linkH + sepH + linkH + sepH + linkH + sepH + linkH + linkH + sepH + linkH;
    const linksPC = linkH + sepH + linkH + sepH + linkH + sepH + linkH + sepH + linkH + sepH + linkH;
    if (isMobile) {
      html = '<div class="footer footer--mobile" style="width:calc(var(--sizing-100) * 80);">'
           + '<div class="footer-links">' + links6 + '</div>'
           + '<span class="footer-copyright">© LY Corporation</span>'
           + '</div>';
    } else {
      html = '<div class="footer footer--pc" style="width:calc(var(--sizing-100) * 180);">'
           + '<span class="footer-copyright">© LY Corporation</span>'
           + '<div class="footer-links">' + linksPC + '</div>'
           + '</div>';
    const cls = 'footer footer--' + opts.os;
    lines = [
      '<span class="tok-cmt">&lt;!-- os:' + opts.os + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span>',
      '  <span class="tok-attr">class</span>=<span class="tok-str">"' + cls + '"</span>',
      '<span class="tok-tag">&gt;</span>',
      (opts.os === 'pc' ? '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"footer-copyright"</span><span class="tok-tag">&gt;</span>© LY Corporation<span class="tok-tag">&lt;/span&gt;</span>' : null),
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"footer-links"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      (opts.os === 'mobile' ? '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"footer-copyright"</span><span class="tok-tag">&gt;</span>© LY Corporation<span class="tok-tag">&lt;/span&gt;</span>' : null),
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ].filter(Boolean);
  
  return html;

}
}