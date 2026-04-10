export default function mctaggroup(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const isH = opts.direction === 'horizontal';
    const tagCount = isH ? 10 : 3;
    const labels = ['食事','雰囲気','サービス','コスパ','アクセス','景色','駐車場','テイクアウト','デート','家族'];
    const tagHtml = labelopts.slice(0, tagCount).map(function(l){ return '<span class="mctg__tag">' + l + '</span>'; }).join('');
    html = '<div class="mctg ' + (isH ? 'mctg--horizontal' : 'mctg--vertical') + '">' + tagHtml + '</div>';
    lines = [
      '<span class="tok-cmt">&lt;!-- MediaCardTagGroup direction=' + opts.direction + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mctg ' + (isH ? 'mctg--horizontal' : 'mctg--vertical') + '"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"mctg__tag"</span><span class="tok-tag">&gt;</span>Label<span class="tok-tag">&lt;/span&gt;</span>',
      '  <span class="tok-cmt">&lt;!-- × ' + tagCount + ' tags --&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  
  return html;

}