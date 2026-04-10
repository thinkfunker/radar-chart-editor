export default function choicecard(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const {  display, button, progress  } = opts;
    const photo = 'background:linear-gradient(160deg,var(--color-background-secondary) 0%,var(--color-background-secondary) 45%,var(--color-background-tertiary) 100%)';
    const starsHtml = '<div class="crc__rcard-stars">' + '<span class="crc__rcard-star">★</span>'.repeat(5) + '</div>';

    // Question sections helper
    const questions = [
      { num: '1', title: '旅行スタイルはどのようなものですか？', chips: ['自然・癒し', '都市・ショッピング', '歴史・文化', 'グルメ・食べ歩き', 'アクティビティ'], sel: 0 },
      { num: '2', title: 'ご希望の宿泊タイプは？', chips: ['ホテル', 'リゾート', 'ゲストハウス', '民泊'], sel: 1 },
      { num: '3', title: 'ご予算の範囲を選択してください', chips: ['~5万円', '5~10万円', '10~20万円', '20万円以上'], sel: -1 },
    ];

    function buildSection(q) {
      let chips = q.chipopts.map((c, i) => {
        const sel = i === q.sel ? ' crc__chip--sel' : '';
        return '<button class="crc__chip crc__chip--lg' + sel + '">' + c + '</button>';
      }).join('');
      return '<div class="crc__section">'
        + '<div class="crc__q-header">'
        + '<div class="crc__q-icon"><span class="crc__q-num">' + q.num + '</span></div>'
        + '<div class="crc__q-title">' + q.title + '</div>'
        + '</div>'
        + '<div class="crc__chips">' + chips + '</div>'
        + '</div>';
    }

    // Result cards helper
    const resultItems = [
      { badge: 'AIおすすめ #1', brand: 'ホテルブランド', title: 'グランド東京ホテル', price: '₩180,000' },
      { badge: 'AIおすすめ #2', brand: 'リゾートブランド', title: '沖縄オーシャンリゾート', price: '₩240,000' },
      { badge: 'AIおすすめ #3', brand: 'ブティックホテル', title: '京都ビューススイート', price: '₩320,000' },
    ];
    const resultsHtml = '<div class="crc__results">' + resultItemopts.map(item =>
      '<div class="crc__rcard">'
      + '<div class="crc__rcard-img" style="' + photo + '">'
      + '<span class="crc__rcard-badge">' + item.badge + '</span>'
      + '</div>'
      + '<div class="crc__rcard-body">'
      + '<div class="crc__rcard-brand">' + item.brand + '</div>'
      + '<div class="crc__rcard-title">' + item.title + '</div>'
      + '<div class="crc__rcard-price">' + item.price + '</div>'
      + '<div style="display:flex;align-items:center;gap:var(--spacing-100);">' + starsHtml + '<span class="crc__rcard-rating">4.9 (1,234)</span></div>'
      + '</div>'
      + '</div>'
    ).join('') + '</div>';

    const spinnerHtml = progress
      ? '<div class="crc__progress-wrap"><div class="crc__spinner"></div></div>'
      : '';

    const btnHtml = button
      ? '<button class="crc__btn">結果を確認する</button>'
      : '';

    // Assemble by display mode
    if (display === 'choice') {
      html = '<div class="crc">'
        + '<div class="crc__header"><div class="crc__title">AIがあなたにぴったりの旅行をご提案します</div><div class="crc__subtitle">いくつかの質問にお答えください</div></div>'
        + '<div class="crc__divider"></div>'
        + '<div class="crc__sections">'
        + questionopts.map(buildSection).join('<div class="crc__divider"></div>')
        + '</div>'
        + btnHtml
        + '</div>';
    } else if (display === 'result') {
      html = '<div class="crc">'
        + '<div class="crc__header"><div class="crc__title">AIおすすめ結果</div><div class="crc__subtitle">ご選択の条件に最適な旅行先です</div></div>'
        + '<div class="crc__divider"></div>'
        + spinnerHtml
        + resultsHtml
        + btnHtml
        + '</div>';
    } else { // both
      html = '<div class="crc" style="background:linear-gradient(160deg, var(--color-gradient-background-ai-surface-stop-1) 0%, var(--color-gradient-background-ai-surface-stop-2) 100%)">'
        + '<div class="crc__header"><div class="crc__title">AIがあなたにぴったりの旅行をご提案します</div><div class="crc__subtitle">いくつかの質問にお答えください</div></div>'
        + '<div class="crc__divider"></div>'
        + '<div class="crc__sections">'
        + questionopts.map(buildSection).join('<div class="crc__divider"></div>')
        + '</div>'
        + '<div class="crc__divider"></div>'
        + '<div class="crc__label">AIおすすめ結果</div>'
        + spinnerHtml
        + resultsHtml
        + btnHtml
        + '</div>';

    lines = [
      '<span class="tok-cmt">&lt;!-- Choice Result Card — ' + display + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"crc"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"crc__header"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      display !== 'result' ? '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"crc__sections"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>' : '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"crc__results"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      button ? '  <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"crc__btn"</span><span class="tok-tag">&gt;</span>結果を確認する<span class="tok-tag">&lt;/button&gt;</span>' : '',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ].filter(Boolean);
  
  return html;

}
}