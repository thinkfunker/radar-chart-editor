/**
 * AI Suggestion Chips Component
 * @param {string[]} questions
 * @param {object}   opts
 * @param {string}   opts.context - 'agent home'|'chat'
 * @param {string}   opts.layout  - 'carousel'|'card compact'|'card description'|'list'|'list title'|'list icon'|'list tag'|'group icon'|'chat popular'|'floating btn'
 * @param {boolean}  opts.showTitleText
 * @param {string}   opts.titleText|opts.title
 * @param {string}   opts.headerTitle
 * @param {string}   opts.chipTitle1..6
 * @param {string}   opts.subText1..4
 */
export default function aiSuggestionChips(questions = [], opts = {}) {
  const { esc, icon } = window.DS_UTILS;
  const { avatar } = window.DS || {};

  const context = opts.context || 'agent home';
  const layout = opts.layout || (context === 'chat' ? 'chat popular' : (context === 'agent home' ? 'carousel' : 'list'));
  const showTitleText = opts.showTitleText === true;
  const titleText = opts.titleText !== undefined ? opts.titleText : (opts.title || '');
  const headerTitle = opts.headerTitle || opts.chipTitle1 || questions[0] || 'Title text';

  const titles = [
    opts.chipTitle1,
    opts.chipTitle2,
    opts.chipTitle3,
    opts.chipTitle4,
    opts.chipTitle5,
    opts.chipTitle6
  ].map((t, i) => t ?? questions[i] ?? 'Title text');

  const subTexts = [
    opts.subText1,
    opts.subText2,
    opts.subText3,
    opts.subText4
  ].map((t) => t ?? 'Text Text Text Text Text Text Text Text Text');
  const chatPrefix1 = opts.chatPrefix1 || 'この2本の違いを';
  const chatHighlight1 = opts.chatHighlight1 || 'もう少し詳しく';
  const chatSuffix1 = opts.chatSuffix1 || '知りたい';
  const chatPrefix2 = opts.chatPrefix2 || '';
  const chatHighlight2 = opts.chatHighlight2 || '長く使うなら';
  const chatSuffix2 = opts.chatSuffix2 || 'どちらがおすすめ？';

  const iconCart = icon('cart_outline', { size: 20, color: 'var(--color-content-primary)' });
  const iconMap = icon('map-marker_outline', { size: 20, color: 'var(--color-content-primary)' });
  const iconBrowser = icon('browser_outline', { size: 20, color: 'var(--color-content-primary)' });
  const iconChevron = icon('chevron-right_solid', { size: 16, color: 'var(--color-content-primary)' });
  const iconChevronLg = icon('chevron-right_solid', { size: 20, color: 'var(--color-content-primary)' });
  const iconArrowDownRight = icon('arrow-turn-down-right_outline', { size: 24, color: 'var(--color-content-primary)' });
  const iconArrowUp = icon('arrow-up_solid', { size: 16, color: 'var(--color-background-white)' });
  const iconAiShopping = icon('ai-shopping_gradient', { size: 20 });

  const listTitleRows = titles.slice(1, 6).map((t) => `
    <div class="aisc-list-row">
      <span class="aisc-list-row-text">${esc(t)}</span>
      <button class="aisc-send-btn" type="button">${iconArrowUp}</button>
    </div>
  `).join('');

  const wrap = (inner, extraClass = '') => {
    const cls = ['aisc', extraClass].filter(Boolean).join(' ');
    return `<div class="${cls}">${inner}</div>`;
  };

  if (context === 'chat' && layout === 'list title') {
    return wrap(`
      <div class="aisc-list-title">
        <div class="aisc-list-header">
          <div class="aisc-list-header-title">${esc(headerTitle)}</div>
        </div>
        ${listTitleRows}
      </div>
    `, 'aisc--list-title');
  }

  if (layout === 'chat popular') {
    const aiIcon = avatar ? avatar({ size: 'small', type: 'ai' }) : icon('ai-agent-primary', { size: 24, color: 'var(--color-content-primary)' });
    const chip = (prefix, highlight, suffix) => `
      <div class="aisc-chat__chip">
        <span class="aisc-chat__text">
          ${prefix ? `<span>${esc(prefix)} </span>` : ''}
          ${highlight ? `<span class="aisc-text-gradient">${esc(highlight)}</span>` : ''}
          ${suffix ? `<span> ${esc(suffix)}</span>` : ''}
        </span>
      </div>
    `;
    return wrap(`
      <div class="aisc-chat">
        <div class="aisc-chat__header">
          <span class="aisc-icon-md">${aiIcon}</span>
          <div class="aisc-chat__title">${esc(headerTitle)}</div>
        </div>
        <div class="aisc-chat__list">
          ${chip(chatPrefix1, chatHighlight1, chatSuffix1)}
          ${chip(chatPrefix2, chatHighlight2, chatSuffix2)}
        </div>
      </div>
    `, 'aisc--chat');
  }

  if (layout === 'floating btn') {
    return wrap(`
      <div class="aisc-floating">
        ${titles.slice(0, 3).map((t) => `
          <div class="aisc-floating__chip">
            <span class="aisc-chip-title">${esc(t)}</span>
          </div>
        `).join('')}
      </div>
    `, 'aisc--floating');
  }

  if (context === 'chat' && layout === 'list') {
    return wrap(`
      <div class="aisc-list-pill">
        ${titles.slice(0, 5).map((t) => `<div class="aisc-chip-pill">${esc(t)}</div>`).join('')}
      </div>
    `, 'aisc--list');
  }

  if (context === 'chat' && layout === 'list icon') {
    return wrap(`
      <div class="aisc-list-icon">
        ${titles.slice(0, 5).map((t) => `
          <div class="aisc-chip-icon">
            <span class="aisc-icon-md">${iconArrowDownRight}</span>
            <span class="aisc-icon-text">${esc(t)}</span>
          </div>
        `).join('')}
      </div>
    `, 'aisc--list-icon');
  }

  if (context === 'agent home' && layout === 'list tag') {
    return wrap(`
      <div class="aisc-list-tag">
        ${titles.slice(0, 5).map((t) => `
          <div class="aisc-chip-tag">
            <span class="aisc-tag-label">Label</span>
            <span class="aisc-tag-text">${esc(t)}</span>
          </div>
        `).join('')}
      </div>
    `, 'aisc--list-tag');
  }

  if (context === 'agent home' && layout === 'group icon') {
    return wrap(`
      <div class="aisc-group-row">
        ${titles.slice(0, 2).map((t) => `
          <div class="aisc-chip-group">
            <span class="aisc-icon-sm">${iconAiShopping}</span>
            <span class="aisc-group-text">${esc(t)}</span>
            <span class="aisc-icon-sm">${iconChevron}</span>
          </div>
        `).join('')}
      </div>
    `, 'aisc--group-icon');
  }

  if (context === 'agent home' && layout === 'card compact') {
    const icons = [iconCart, iconMap];
    return wrap(`
      <div class="aisc-card-row">
        ${titles.slice(0, 2).map((t, i) => `
          <div class="aisc-chip-card">
            <span class="aisc-icon-sm">${icons[i]}</span>
            ${showTitleText ? `<div class="aisc-chip-title--bold">${esc(t)}</div>` : ''}
            <div class="aisc-card-desc-sub">${esc(subTexts[i])}</div>
          </div>
        `).join('')}
      </div>
    `, 'aisc--card-compact');
  }

  if (context === 'agent home' && layout === 'card description') {
    const cards = titles.slice(0, 4).map((t, i) => `
      <div class="aisc-chip-card-desc">
        <div class="aisc-card-desc-title">
          <span>${esc(t)}</span>
          <span class="aisc-icon-sm">${iconChevronLg}</span>
        </div>
        <div class="aisc-card-desc-sub">${esc(subTexts[i])}</div>
      </div>
    `);
    return wrap(`
      <div class="aisc-card-desc-grid">
        <div class="aisc-card-desc-row">${cards[0]}${cards[1]}</div>
        <div class="aisc-card-desc-row">${cards[2]}${cards[3]}</div>
      </div>
    `, 'aisc--card-desc');
  }

  if (context === 'agent home' && layout === 'carousel') {
    const icons = [iconCart, iconMap, iconBrowser];
    return wrap(`
      <div class="aisc-carousel">
        ${titles.slice(0, 3).map((t, i) => `
          <div class="aisc-chip-carousel">
            <span class="aisc-icon-md">${icons[i]}</span>
            <div class="aisc-chip-title">${esc(t)}</div>
          </div>
        `).join('')}
      </div>
    `, 'aisc--carousel');
  }

  return wrap(`
    <div class="aisc-list-pill">
      ${titles.slice(0, 5).map((t) => `<div class="aisc-chip-pill">${esc(t)}</div>`).join('')}
    </div>
  `, 'aisc--list');
}
