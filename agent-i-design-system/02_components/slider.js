/**
 * Slider (Segmented)
 * @param {object} opts
 * @param {string} opts.percentage - 'null' | '25%' | '50%' | '75%' | '100%'
 */
export default function slider(opts = {}) {
  const percentage = opts.percentage || 'null';
  const activeCountMap = { '25%': 1, '50%': 2, '75%': 3, '100%': 4 };
  const activeCount = activeCountMap[percentage] || 0;
  const posMap = {
    'null': 'slider--start',
    '25%': 'slider--25',
    '50%': 'slider--50',
    '75%': 'slider--75',
    '100%': 'slider--100'
  };
  const posClass = posMap[percentage] || 'slider--start';

  const segmentClass = (idx) => {
    const isOn = idx < activeCount;
    const isFirst = idx === 0;
    const isLast = idx === 3;
    return [
      'slider__segment',
      isOn ? 'is-on' : 'is-off',
      isFirst ? 'is-first' : '',
      isLast ? 'is-last' : ''
    ].filter(Boolean).join(' ');
  };

  return `
    <div class="slider ${posClass}">
      <div class="slider__track">
        ${[0, 1, 2, 3].map((idx) => `<div class="${segmentClass(idx)}"></div>`).join('')}
      </div>
      <div class="slider__knob"></div>
    </div>
  `;
}
