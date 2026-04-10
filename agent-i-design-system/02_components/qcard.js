export default function qcard(opts = {}) {
  const { esc, icon } = window.DS_UTILS || {};
  if (!icon) return '';

  const {
    selectionType = 'none',
    completion = 'incomplete',
    subText = '',
    title = 'Text',
    placeholder = 'Placeholder',
    ghostLabel = 'Ghost button',
    buttonLabel = 'Label',
    chips = null,
    listItems = null
  } = opts;

  const safe = (value) => (esc ? esc(String(value)) : String(value));
  const bgAngle = selectionType === 'none' ? '9.5' : selectionType === 'list' ? '59.67' : '42.63';
  const bgStyle = `background:linear-gradient(${bgAngle}deg, var(--color-gradient-background-ai-surface-stop-1) 5.1%, var(--color-gradient-background-ai-surface-stop-2) 92.36%)`;

  const qIcon = icon('question-text-circle_solid', { size: 24 });
  const checkColor = completion === 'completed' ? 'var(--color-content-success)' : 'var(--color-content-primary)';
  const checkIcon = icon('check-circle_solid', { size: 24, color: checkColor });
  const chevColor = completion === 'completed' ? 'var(--color-content-tertiary)' : 'var(--color-content-primary)';
  const chevDown = icon('chevron-down_solid', { size: 20, color: chevColor });
  const chevOutline = icon('chevron-down_outline', { size: 20, color: 'var(--color-content-tertiary)' });
  const penIcon = icon('pen_solid', { size: 20, color: 'var(--color-content-tertiary)' });
  const bulbIcon = icon('bulb_outline', { size: 20, color: 'var(--color-content-tertiary)' });

  const qHeader = `
    <div class="qcard__q-header">
      ${qIcon}
      <div class="qcard__q-text">
        <div class="qcard__q-title">${safe(title)}</div>
        ${subText ? `<div class="qcard__q-sub">${safe(subText)}</div>` : ''}
      </div>
    </div>
  `;

  const textInput = `
    <div class="qcard__input">
      ${penIcon}
      <span class="qcard__input-text">${safe(placeholder)}</span>
    </div>
  `;

  const ghostArea = `
    <div class="qcard__ghost-area">
      <div class="qcard__ghost-row">
        ${bulbIcon}
        <span class="qcard__ghost-label">${safe(ghostLabel)}</span>
        ${chevOutline}
      </div>
    </div>
  `;

  const renderButton = () => {
    if (window.DS && typeof window.DS.button === 'function') {
      return window.DS.button({
        label: buttonLabel,
        priority: 'outline-primary',
        size: 'large',
        state: 'enabled',
        iconOnly: false,
        showLeftIcon: false,
        showRightIcon: false
      });
    }
    return `<button class="qcard__btn">${safe(buttonLabel)}</button>`;
  };

  const bottomBtn = `<div class="qcard__btn-wrap">${renderButton()}</div>`;

  if (selectionType === 'none') {
    const done = completion === 'completed';
    return `
      <div class="qcard qcard--collapsed" style="${bgStyle}">
        ${checkIcon}
        <span class="qcard__collapse-title${done ? ' qcard__collapse-title--done' : ''}">${safe(title)}</span>
        <button class="qcard__collapse-btn" type="button">${chevDown}</button>
      </div>
    `;
  }

  if (selectionType === 'chip-h') {
    const chipLabels = (chips && chips.length ? chips : Array.from({ length: 8 }, () => 'Label'));
    const chipHtml = chipLabels.map((label) => `<button class="qcard__chip" type="button">${safe(label)}</button>`).join('');
    return `
      <div class="qcard qcard--expanded" style="${bgStyle}">
        <div class="qcard__q-area">
          <div class="qcard__q-container">
            ${qHeader}
            <div class="qcard__chips-h">${chipHtml}</div>
          </div>
          ${textInput}
          ${ghostArea}
        </div>
        ${bottomBtn}
      </div>
    `;
  }

  if (selectionType === 'chip-d') {
    const chipLabels = (chips && chips.length ? chips : Array.from({ length: 4 }, () => 'Label'));
    const rows = [];
    for (let i = 0; i < chipLabels.length; i += 2) {
      const a = chipLabels[i];
      const b = chipLabels[i + 1];
      rows.push(`
        <div class="qcard__chips-d-row">
          ${a ? `<button class="qcard__chip qcard__chip--full" type="button">${safe(a)}</button>` : ''}
          ${b ? `<button class="qcard__chip qcard__chip--full" type="button">${safe(b)}</button>` : ''}
        </div>
      `);
    }
    return `
      <div class="qcard qcard--expanded" style="${bgStyle}">
        <div class="qcard__q-area">
          <div class="qcard__q-container">
            ${qHeader}
            <div class="qcard__chips-d">${rows.join('')}</div>
          </div>
          ${textInput}
          ${ghostArea}
        </div>
        ${bottomBtn}
      </div>
    `;
  }

  const items = (listItems && listItems.length ? listItems : Array.from({ length: 5 }, () => ({ title: 'Title text', sub: 'Sub text' })));
  const listHtml = items.map((item) => {
    const titleText = typeof item === 'string' ? item : (item.title || 'Title text');
    const subTextValue = typeof item === 'string' ? 'Sub text' : (item.sub || 'Sub text');
    return `
      <div class="qcard__list-item">
        <div class="qcard__list-title">${safe(titleText)}</div>
        <div class="qcard__list-sub">${safe(subTextValue)}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="qcard qcard--expanded" style="${bgStyle}">
      <div class="qcard__q-area">
        <div class="qcard__q-container">
          ${qHeader}
          <div class="qcard__list">${listHtml}</div>
        </div>
        ${textInput}
        ${ghostArea}
      </div>
      ${bottomBtn}
    </div>
  `;
}