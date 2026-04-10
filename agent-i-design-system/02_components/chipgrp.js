export default function chipgrp(opts = {}) {
  const { esc } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const {  cols  } = opts;
    const chip = '<div class="cg__chip">Label</div>';
    const row = '<div class="cg__row">' + chip.repeat(cols) + '</div>';
    html = '<div class="cg">' + row + row + '</div>';

    lines = [
      '<span class="tok-cmt">&lt;!-- Chip Group — ' + cols + ' columns --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"cg"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"cg__row"</span><span class="tok-tag">&gt;</span>',
      '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"cg__chip"</span><span class="tok-tag">&gt;</span>Label<span class="tok-tag">&lt;/div&gt;</span>',
      '    …<span class="tok-cmt"> × ' + cols + '</span>',
      '  <span class="tok-tag">&lt;/div&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  
  return html;

}