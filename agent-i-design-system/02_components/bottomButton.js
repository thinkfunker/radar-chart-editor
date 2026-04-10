/**
 * Bottom Button (Figma 851:44137)
 * @param {object} opts
 * @param {string} opts.layout - '1 button' | '2 button (horizonal)' | '2 button (vertical)' | '3 button (vertical)'
 */
export default function bottomButton(opts = {}) {
  const { button } = window.DS;
  const layout = opts.layout || '1 button';
  const isTwoH = layout === '2 button (horizonal)';
  const isTwoV = layout === '2 button (vertical)';
  const isThreeV = layout === '3 button (vertical)';

  const solid = () => button({ label: 'Label', size: 'xxlarge', priority: 'solid-primary' });
  const outline = () => button({ label: 'Label', size: 'xxlarge', priority: 'outline-tertiary' });

  let content = '';
  if (isTwoH) {
    content = `
      <div class="bbt__row bbt__row--h">
        <div class="bbt__item bbt__item--flex">${outline()}</div>
        <div class="bbt__item bbt__item--flex">${solid()}</div>
      </div>
    `;
  } else if (isTwoV) {
    content = `
      <div class="bbt__row bbt__row--v">
        <div class="bbt__item">${outline()}</div>
        <div class="bbt__item">${solid()}</div>
      </div>
    `;
  } else if (isThreeV) {
    content = `
      <div class="bbt__row bbt__row--v">
        <div class="bbt__item">${outline()}</div>
        <div class="bbt__item">${outline()}</div>
        <div class="bbt__item">${solid()}</div>
      </div>
    `;
  } else {
    content = `
      <div class="bbt__row">
        <div class="bbt__item bbt__item--full">${solid()}</div>
      </div>
    `;
  }

  return `
    <div class="bbt">
      ${content}
      <div class="bbt__system">
        <div class="bbt__home-indicator"></div>
      </div>
    </div>
  `;
}