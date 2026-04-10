export default function msgactionbar(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  let html = '';
  let lines = [];

  const ASSETS = {
    thumbUpSolid: '/images/agent-i-design-system/assets/toggle-thumb-up-solid.svg',
    thumbUpOutline: '/images/agent-i-design-system/assets/toggle-thumb-up-outline.svg',
    redoOutline: '/images/agent-i-design-system/assets/toggle-redo-outline.svg',
    squaresOutline: '/images/agent-i-design-system/assets/toggle-squares-outline.svg',
    divider: '/images/agent-i-design-system/assets/toggle-divider.svg'
  };

  const isFull = opts.type === 'full';
  const goodSel = opts.good === 'on';
  const badSel = opts.bad === 'on';
  const copySel = opts.copy === 'on';
  const div = `<div class="mab__divider"><img src="${ASSETS.divider}" alt="" /></div>`;
  const goodIcon = goodSel
    ? `<img class="mab__icon" src="${ASSETS.thumbUpSolid}" alt="" />`
    : `<img class="mab__icon" src="${ASSETS.thumbUpOutline}" alt="" />`;
  const badIcon = `<img class="mab__icon mab__icon--bad" src="${ASSETS.thumbUpOutline}" alt="" />`;
  const regenIcon = `<img class="mab__icon" src="${ASSETS.redoOutline}" alt="" />`;
  const copyIcon = `<img class="mab__icon" src="${ASSETS.squaresOutline}" alt="" />`;

  const goodBtn = `<button class="mab__btn${goodSel ? ' mab__btn--selected' : ''}" title="Good">${goodIcon}</button>`;
  const badBtn = `<button class="mab__btn${badSel ? ' mab__btn--selected' : ''}" title="Bad">${badIcon}</button>`;
  const regenBtn = `<button class="mab__btn" title="Regenerate">${regenIcon}</button>`;
  const copyBtn = `<button class="mab__btn${copySel ? ' mab__btn--selected' : ''}" title="Copy">${copyIcon}</button>`;

  if (isFull) {
    html = `<div class="mab"><div class="mab__pill">${goodBtn}${div}${badBtn}${div}${regenBtn}${div}${copyBtn}</div></div>`;
    lines = [
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__pill"</span><span class="tok-tag">&gt;</span>',
      '    <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__btn mab__btn--selected"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span>',
      '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__divider"</span><span class="tok-tag">&gt;&lt;/div&gt;</span>',
      '    <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__btn mab__btn--bad"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span>',
      '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__divider"</span><span class="tok-tag">&gt;&lt;/div&gt;</span>',
      '    <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__btn"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span> <span class="tok-cmt">&lt;!-- redo --&gt;</span>',
      '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__divider"</span><span class="tok-tag">&gt;&lt;/div&gt;</span>',
      '    <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__btn"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span> <span class="tok-cmt">&lt;!-- copy --&gt;</span>',
      '  <span class="tok-tag">&lt;/div&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  } else {
    html = `<div class="mab"><div class="mab__pill">${goodBtn}${div}${badBtn}</div></div>`;
    lines = [
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__pill"</span><span class="tok-tag">&gt;</span>',
      '    <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__btn mab__btn--selected"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span>',
      '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__divider"</span><span class="tok-tag">&gt;&lt;/div&gt;</span>',
      '    <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-str">"mab__btn mab__btn--bad"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/button&gt;</span>',
      '  <span class="tok-tag">&lt;/div&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  }

  return html;

}