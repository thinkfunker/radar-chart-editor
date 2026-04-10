export default function topnav(opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  let html = '';
  let lines = [];
  const s = opts;

    const align     = opts.align;    // 'center'|'left'
    const leftIcon  = opts.leftIcon;
    const rightMenu = opts.rightMenu;
    const avatar    = opts.avatar;

    // SVG icons (inline)
    const chevronSvg = icon('chevron-left_solid', { size: 24, color: 'var(--color-content-primary)' });
    const menuSvg    = icon('bars_solid', { size: 24, color: 'var(--color-content-primary)' });
    const avatarSvg  = '<div class="topnav__avatar">' + icon('user_solid', { size: 16, color: 'var(--color-content-inverted)' }) + '</div>';

    if (align === 'center') {
      html = '<div class="topnav topnav--mobile">'
           + '<div class="topnav__left--fixed">' + (leftIcon ? '<div class="topnav__icon">' + chevronSvg + '</div>' : '<div style="width:var(--sizing-600)"></div>') + '</div>'
           + '<div class="topnav__title topnav__title--center">title text</div>'
           + '<div class="topnav__right">'
           + (rightMenu ? '<div class="topnav__icon">' + menuSvg + '</div>' : '')
           + (avatar    ? avatarSvg : '')
           + '</div>'
           + '</div>';
    } else {
      html = '<div class="topnav topnav--mobile">'
           + '<div class="topnav__left">'
           + (leftIcon ? '<div class="topnav__icon">' + chevronSvg + '</div>' : '')
           + '<span class="topnav__title topnav__title--left">title text</span>'
           + '</div>'
           + '<div class="topnav__right">'
           + (rightMenu ? '<div class="topnav__icon">' + menuSvg + '</div>' : '')
           + (avatar    ? avatarSvg : '')
           + '</div>'
           + '</div>';

    lines = [
      '<span class="tok-cmt">&lt;!-- align:' + align + ' --&gt;</span>',
      '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"topnav topnav--mobile"</span><span class="tok-tag">&gt;</span>',
      align === 'center'
        ? '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"topnav__left--fixed"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>'
        : '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"topnav__left"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      '  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-str">"topnav__right"</span><span class="tok-tag">&gt;</span>…<span class="tok-tag">&lt;/div&gt;</span>',
      '<span class="tok-tag">&lt;/div&gt;</span>',
    ];
  
  return html;

}
}