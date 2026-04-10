export default function selcard(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const {  selected  } = opts;

    // ── Icons ──
    const qIcon   = icon('ai-analysis_gradient', { size: 24 });
    const backIcon = icon('chevron-left_solid', { size: 24, color: 'var(--color-content-primary)' });
    const chevRight = icon('chevron-right_solid', { size: 20, color: 'var(--color-content-tertiary)', className: 'selcard__chip-chevron' });

    const bgStyle = 'background:linear-gradient(' + (selected ? '33' : '37') + 'deg,var(--color-gradient-background-ai-surface-stop-1) 5.1%,var(--color-gradient-background-ai-surface-stop-2) 92.36%)';

    // Chip builders
    function chipNav(label) {
      return '<div class="selcard__chip">'
        + '<span class="selcard__chip-label">' + label + '</span>'
        + chevRight
        + '</div>';
    }
    function chipUnsel(label) {
      return '<div class="selcard__chip"><span class="selcard__chip-label--c">' + label + '</span></div>';
    }
    function chipSel(label) {
      return '<div class="selcard__chip selcard__chip--sel"><span class="selcard__chip-label--c">' + label + '</span></div>';
    }
    function row(...chips) {
      return '<div class="selcard__chip-row">' + chipopts.join('') + '</div>';
    }

    if (!selected) {
      // 2-col nav chips, 4 rows
      html = '<div class="selcard" style="' + bgStyle + '">'
        + '<div class="selcard__header"><div class="selcard__header-icon">' + qIcon + '</div><span class="selcard__header-text">Text</span></div>'
        + '<div class="selcard__chip-group">'
        + row(chipNav('Label'), chipNav('Label'))
        + row(chipNav('Label'), chipNav('Label'))
        + row(chipNav('Label'), chipNav('Label'))
        + row(chipNav('Label'), chipNav('Label'))
        + '</div>'
        + '</div>';
    } else {
      // 4-col chips, first selected, + bottom button
      html = '<div class="selcard" style="' + bgStyle + '">'
        + '<div class="selcard__header"><div class="selcard__header-icon">' + backIcon + '</div><span class="selcard__header-text">Text</span></div>'
        + '<div class="selcard__chip-group">'
        + row(chipSel('Label'), chipUnsel('Label'), chipUnsel('Label'), chipUnsel('Label'))
        + row(chipUnsel('Label'), chipUnsel('Label'), chipUnsel('Label'), chipUnsel('Label'))
        + '</div>'
        + '<div class="selcard__btn-wrap"><button class="selcard__btn">Label</button></div>'
        + '</div>';

    lines = [
      '<span class="tok-cmt">&lt;!-- Selection Card — ' + (selected ? 'selected' : 'not selected') + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"selcard"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"selcard__header"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"selcard__chip-group"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      selected ? '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"selcard__btn-wrap"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>' : '',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ].filter(Boolean);
  
  return html;

}
}