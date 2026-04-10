export default function card(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const v = opts.variant;
    const starsHtml = '<div class="card__stars">'
      + '<span class="card__star">★</span>'.repeat(5)
      + '</div>';

    if (v === 'list-min') {
      html = '<div class="card card--r12 card-list-min">'
           + '<div class="card__title">商品タイトル</div>'
           + '<div class="card__sub">ブランド名 · カテゴリ</div>'
           + '<div class="card__meta">追加説明テキストがここに入ります</div>'
           + '</div>';

    } else if (v === 'list-thumb') {
      html = '<div class="card card--r12 card-list-thumb">'
           + '<div class="card-list-thumb__body">'
           + '<div class="card__title">商品タイトル</div>'
           + '<div class="card__sub">ブランド名</div>'
           + '<div class="card__body" style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">詳細説明がここに入ります。長く続く内容です。</div>'
           + '</div>'
           + '<div class="card-list-thumb__img card__photo-bg"></div>'
           + '</div>';

    } else if (v === 'list-gallery') {
      html = '<div class="card card--r16 card-list-gallery">'
           + '<div class="card__title-lg">ギャラリータイトル</div>'
           + '<div class="card__gallery">'
           + '<div class="card__gallery-img card__photo-bg"></div>'
           + '<div class="card__gallery-img card__photo-bg"></div>'
           + '<div class="card__gallery-img card__photo-bg"></div>'
           + '</div>'
           + '<button class="card__btn">詳しく見る</button>'
           + '</div>';

    } else if (v === 'review') {
      html = '<div class="card card--r16 card-review">'
           + '<div class="card-review__header">'
           + '<div class="card__title-lg">レビュータイトル</div>'
           + '<div class="card__body">サブテキスト説明が入ります</div>'
           + '</div>'
           + '<div class="card__body">この場所についての詳細説明がここに入ります。さまざまな情報を一緒に提供します。</div>'
           + '<div class="card__rating-row">' + starsHtml + '<span class="card__meta">5.0（1,234件のレビュー）</span></div>'
           + '<div class="card-review__gallery">'
           + '<div class="card-review__gallery-img card__photo-bg"></div>'
           + '<div class="card-review__gallery-img card__photo-bg"></div>'
           + '<div class="card-review__gallery-img card__photo-bg"></div>'
           + '</div>'
           + '<div class="card__infobox">'
           + '<div class="card__body">追加の詳細情報がこのエリアに表示されます。</div>'
           + '<a href="#" class="card__link">もっと見る</a>'
           + '</div>'
           + '<div class="card__tags">'
           + ['絶景スポット','ファミリー','駐車場あり','待ち時間なし','コスパ良し','リピーター'].map(t => '<span class="card__tag">'+t+'</span>').join('')
           + '</div>'
           + '<button class="card__btn">予約する</button>'
           + '</div>';

    } else if (v === 'info') {
      const iconSvg = window.DS_UTILS.icon('star_solid_full', { size: 24, color: 'var(--color-content-inverted)' });
      html = '<div class="card card--r12 card-info">'
           + '<div class="card-info__icon">' + iconSvg + '</div>'
           + '<div class="card-info__text">'
           + '<div class="card__title">AIサービス名</div>'
           + '<div class="card__meta">サービスカテゴリ</div>'
           + '</div>'
           + '</div>';

    const cls = (v === 'list-min' || v === 'list-thumb') ? 'card card--r12' : 'card card--r16';
    lines = [
      '<span class="tok-cmt">&lt;!-- variant: ' + v + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"' + cls + '"</span><span class="tok-tag">&gt;</span>',
      '  …',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  
  return html;

}
}
