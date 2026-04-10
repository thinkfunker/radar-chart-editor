/**
 * 02_components/mappin.js
 * Map Pin / Mappin component
 */
export default function mappin(props = {}) {
  const { esc } = window.DS_UTILS || { esc: (s) => s };
  const style = props.style === 'outline' ? 'outline' : 'solid';
  const type = props.type || 'selected';
  const number = props.number != null ? String(props.number) : (type === 'number-multiple' ? '123' : '1');
  const text = props.text != null ? String(props.text) : 'Text';

  const cls = `mappin mappin--${style} mappin--${type}`;

  if (type === 'check') {
    return `
      <div class="${cls}">
        <div class="mappin-check">
          <div class="mappin-check__content">
            <span data-ds-icon="check-circle_solid" data-ds-size="24" data-ds-color="var(--color-content-key)"></span>
            <span class="mappin-check__text">${esc(text)}</span>
          </div>
        </div>
        <div class="mappin-leg"></div>
      </div>
    `;
  }

  if (type === 'number-multiple') {
    return `
      <div class="${cls}">
        <div class="mappin-balloon">
          <span class="mappin-balloon__num">${esc(number)}</span>
        </div>
        <div class="mappin-leg"></div>
      </div>
    `;
  }

  const baseType = type === 'other' ? 'other' : 'selected';
  const iconName = `mappin-${baseType}_${style}`;

  return `
    <div class="${cls}">
      <img class="mappin__icon" src="/icons/${iconName}.svg" alt="" />
      ${type === 'number-single' ? `<span class="mappin__number">${esc(number)}</span>` : ''}
    </div>
  `;
}
