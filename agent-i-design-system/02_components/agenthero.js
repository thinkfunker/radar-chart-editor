export default function agenthero(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const iconStyle = opts.icon; // 'gradient' | 'mono'
    const iconBg  = iconStyle === 'gradient'
      ? 'background:linear-gradient(135deg, var(--color-gradient-background-stop-1) 0%, var(--color-gradient-background-stop-2) 100%)'
      : 'background:var(--color-content-primary)';
    const iconSvg = window.DS_UTILS.icon('star_solid_full', { size: 18, color: 'var(--color-content-inverted)' });

    html = '<div class="agenthero">'
         + '<div class="agenthero__header">'
         + '<div class="agenthero__icon" style="' + iconBg + '">' + iconSvg + '</div>'
         + '<span class="agenthero__name">AIエージェント</span>'
         + '</div>'
         + '<div class="agenthero__title">何でもお気軽にどうぞ。<br>求める答えをお届けします。</div>'
         + '</div>';

    lines = [
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"agenthero"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"agenthero__header"</span><span class="tok-tag">&gt;</span>',
      '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"agenthero__icon"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      '    <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"agenthero__name"</span><span class="tok-tag">&gt;</span>AIエージェント<span class="tok-tag">&lt;/span&gt;</span>',
      '  <span class="tok-tag">&lt;/div&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"agenthero__title"</span><span class="tok-tag">&gt;</span>何でも聞いてください.<span class="tok-tag">&lt;/div&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  
  return html;

}
