export default function accordion(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const isOpen = opts.state === 'expanded';
    const cls = 'accordion-item' + (isOpen ? ' open' : '');
    const chev = icon('chevron-down_solid', { size: 20, color: 'var(--color-content-primary)' });
    html = '<div class="accordion" style="border-radius:var(--border-radius-200);overflow:hidden;box-shadow:0 var(--border-width-100) var(--spacing-100) var(--color-border-secondary);width:100%;max-width:calc(var(--sizing-100) * 85);">'
         + '<div class="' + cls + '" onclick="toggleAccordion(this)">'
         + '<div class="accordion-header"><span class="accordion-title">Title text</span><div class="accordion-icon">' + chev + '</div></div>'
         + '<div class="accordion-content"><p>Description text here.</p></div>'
         + '<div class="accordion-divider"></div></div></div>';
    lines = [
      '<span class="tok-cmt">&lt;!-- selected=' + isOpen + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"' + cls + '"</span><span class="tok-tag">&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"accordion-header"</span><span class="tok-tag">&gt;</span>',
      '    <span class="tok-tag">&lt;span</span> <span class="tok-attr">class</span>=<span class="tok-str">"accordion-title"</span><span class="tok-tag">&gt;</span>Title text<span class="tok-tag">&lt;/span&gt;</span>',
      '    <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"accordion-icon"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      '  <span class="tok-tag">&lt;/div&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"accordion-content"</span><span class="tok-tag">&gt;</span>',
      '    <span class="tok-tag">&lt;p&gt;</span>Description text<span class="tok-tag">&lt;/p&gt;</span>',
      '  <span class="tok-tag">&lt;/div&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  
  return html;

}