export default function aisc(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const layout = opts.layout;

    // SVG icons
    const sparkSvg = icon('ai-search_gradient', { size: 20 });
    const arrowUpSvg = icon('arrow-up_solid', { size: 20, color: 'var(--color-background-white)' });
    const chevronUpSvg = icon('chevron-up_solid', { size: 16, color: 'var(--color-content-primary)' });
    const arrowTurnSvg = icon('arrow-turn-down-right_solid', { size: 24, color: 'var(--color-content-primary)' });
    const shopSvg = icon('cart_solid', { size: 20, color: 'var(--color-content-primary)' });
    const chevronRtSvg = icon('chevron-right_solid', { size: 16, color: 'var(--color-content-primary)' });

    const chipTexts = ['何をお探しですか？', '最近のトレンドは？', 'おすすめして', '新しい提案', '比べて'];
    const tagLabels = ['NEW', '人気', 'HOT', 'おすすめ', 'BEST'];
    const cardTitles = ['今日のおすすめ', 'トレンド探索', '私の好み', '人気アイテム'];
    const cardSubs = ['今すぐチェック', '最新トレンドを一目で', '私だけへの提案', 'よく探されるアイテム'];

    let pg = '';
    if (layout === 'carousel') {
      pg = '<div class="aisc-carousel">'
         + [0,1,2].map(i => '<div class="aisc-chip-carousel"><div class="aisc-icon-sm">' + sparkSvg + '</div><span class="aisc-chip-title">' + (i===0?'今日のおすすめ':i===1?'トレンド探索':'マイ好み探し') + '</span></div>').join('')
         + '</div>';
    } else if (layout === 'cardCompact') {
      pg = '<div class="aisc-card-row">'
         + '<div class="aisc-chip-card"><div class="aisc-icon-sm">' + sparkSvg + '</div><span class="aisc-chip-title--bold">今日のおすすめ</span><span class="aisc-chip-title">今すぐ確認してみて</span></div>'
         + '<div class="aisc-chip-card"><div class="aisc-icon-sm">' + sparkSvg + '</div><span class="aisc-chip-title--bold">トレンド探索</span><span class="aisc-chip-title">最新トレンドを一目で</span></div>'
         + '</div>';
    } else if (layout === 'cardDesc') {
      pg = '<div class="aisc-card-desc-grid">'
         + [0,1].map(() => '<div class="aisc-card-desc-row">'
           + [0,1].map(j => '<div class="aisc-chip-card-desc"><div class="aisc-card-desc-title"><span>' + cardTitles[j] + '</span>' + chevronUpSvg + '</div><span class="aisc-card-desc-sub">' + cardSubs[j] + '</span></div>').join('')
           + '</div>').join('')
         + '</div>';
    } else if (layout === 'listTitle') {
      pg = '<div class="aisc-list-title">'
         + '<div class="aisc-list-header"><div class="aisc-icon-sm">' + sparkSvg + '</div><span class="aisc-list-header-title">AIおすすめ 質問</span></div>'
         + chipTextopts.map(t => '<div class="aisc-list-row"><span class="aisc-list-row-text">' + t + '</span><button class="aisc-send-btn">' + arrowUpSvg + '</button></div>').join('')
         + '</div>';
    } else if (layout === 'list') {
      pg = '<div class="aisc-list-pill">'
         + chipTextopts.map(t => '<div class="aisc-chip-pill">' + t + '</div>').join('')
         + '</div>';
    } else if (layout === 'listTag') {
      pg = '<div class="aisc-list-tag">'
         + chipTextopts.map((t,i) => '<div class="aisc-chip-tag"><span class="aisc-tag-label">' + tagLabels[i] + '</span><span class="aisc-tag-text">' + t + '</span></div>').join('')
         + '</div>';
    } else if (layout === 'listIcon') {
      pg = '<div class="aisc-list-icon">'
         + chipTextopts.map(t => '<div class="aisc-chip-icon"><div class="aisc-icon-md">' + arrowTurnSvg + '</div><span class="aisc-icon-text">' + t + '</span></div>').join('')
         + '</div>';
    } else if (layout === 'groupIcon') {
      pg = '<div class="aisc-group-row">'
         + '<div class="aisc-chip-group"><div class="aisc-icon-sm">' + shopSvg + '</div><span class="aisc-group-text">ショッピングおすすめ</span>' + chevronRtSvg + '</div>'
         + '<div class="aisc-chip-group"><div class="aisc-icon-sm">' + sparkSvg + '</div><span class="aisc-group-text">AI提案</span>' + chevronRtSvg + '</div>'
         + '</div>';

    html  = pg;
    lines = [
      layout === 'carousel'   ? '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"aisc-carousel"</span><span class="tok-tag">&gt;</span>' : null,
      layout === 'cardCompact'? '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"aisc-card-row"</span><span class="tok-tag">&gt;</span>' : null,
      layout === 'cardDesc'   ? '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"aisc-card-desc-grid"</span><span class="tok-tag">&gt;</span>' : null,
      layout === 'listTitle'  ? '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"aisc-list-title"</span><span class="tok-tag">&gt;</span>' : null,
      layout === 'list'       ? '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"aisc-list-pill"</span><span class="tok-tag">&gt;</span>' : null,
      layout === 'listTag'    ? '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"aisc-list-tag"</span><span class="tok-tag">&gt;</span>' : null,
      layout === 'listIcon'   ? '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"aisc-list-icon"</span><span class="tok-tag">&gt;</span>' : null,
      layout === 'groupIcon'  ? '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"aisc-group-row"</span><span class="tok-tag">&gt;</span>' : null,
      '  …',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ].filter(Boolean);
  
  return html;

}
}