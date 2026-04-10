export default function pagination(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const os = opts.os, disp = opts.display;
    const cleft  = icon('chevron-left_solid', { size: 20, color: 'currentColor' });
    const cright = icon('chevron-right_solid', { size: 20, color: 'currentColor' });
    const cdown  = icon('chevron-down_solid', { size: 16, color: 'currentColor' });

    if (os === 'pc') {
      const ld = disp === 'start' ? ' pg-nav--disabled' : '';
      const rd = disp === 'end'   ? ' pg-nav--disabled' : '';
      let pageData = [];
      if (disp === 'start')  pageData = [['1',true],['2',false],['3',false],['4',false],['5',false],['...',false],['100',false]];
      if (disp === 'middle') pageData = [['1',false],['...',false],['32',false],['33',true],['34',false],['...',false],['100',false]];
      if (disp === 'end')    pageData = [['1',false],['...',false],['95',false],['96',false],['97',false],['98',false],['100',true]];
      const pagesH = pageData.map(([n,sel]) => {
        let c = 'pg-page' + (sel ? ' pg-page--selected' : '') + (n==='...' ? ' pg-page--dots' : '');
        return '<div class="' + c + '">' + n + '</div>';
      }).join('');
      html = '<div class="pg-wrap pg-wrap--pc">'
           + '<button class="pg-nav' + ld + '" aria-label="Prev">' + cleft + '</button>'
           + '<div class="pg-page-group">' + pagesH + '</div>'
           + '<button class="pg-nav' + rd + '" aria-label="Next">' + cright + '</button>'
           + '</div>';
    } else {
      const ld = disp === 'start' ? ' pg-nav--disabled' : '';
      const rd = disp === 'end'   ? ' pg-nav--disabled' : '';
      const pnum = disp === 'start' ? 1 : disp === 'middle' ? 33 : 100;
      html = '<div class="pg-wrap pg-wrap--mobile">'
           + '<button class="pg-nav' + ld + '" aria-label="Prev">' + cleft + '</button>'
           + '<div class="pg-jumper-wrap">'
           + '<button class="pg-jumper-select"><span class="pg-jumper-page-num">' + pnum + '</span>' + cdown + '</button>'
           + '<span class="pg-jumper-sep">/</span>'
           + '<span class="pg-jumper-total">100</span>'
           + '</div>'
           + '<button class="pg-nav' + rd + '" aria-label="Next">' + cright + '</button>'
           + '</div>';
    lines = [
      '<span class="tok-cmt">&lt;!-- os:' + os + ' display:' + disp + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"pg-wrap pg-wrap--' + os + '"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"pg-nav…"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span>',
      (os === 'pc'
        ? '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"pg-page-group"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>'
        : '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"pg-jumper-wrap"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>'),
      '  <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"pg-nav…"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  
  return html;

}
}