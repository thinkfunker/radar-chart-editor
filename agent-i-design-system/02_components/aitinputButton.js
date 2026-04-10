export default function aitinputButton(opts = {}) {
  const { icon, esc } = window.DS_UTILS;
  const toBool = (val) => (
    val === true ||
    val === 'true' ||
    val === 1 ||
    val === '1' ||
    val === 'on'
  );

  const type = opts.type || 'send';
  const label = opts.label || 'Label';
  const isOn = toBool(opts.state ?? true);
  const className = opts.className || '';

  const sendColor = isOn ? 'var(--color-content-inverted)' : 'var(--color-content-tertiary)';
  const micColor = isOn ? 'var(--color-content-tertiary)' : 'var(--color-content-disabled)';
  const analysisColor = isOn ? 'var(--color-content-inverted)' : 'var(--color-content-disabled)';

  const sendIcon = icon('arrow-up_solid', { size: 20, color: sendColor });
  const micIcon = icon('microphone_outline', { size: 20, color: micColor });
  const analysisIcon = icon('ai-analysis_primary', { size: 20, color: analysisColor });

  if (type === 'login') {
    const btnCls = ['aitinput__label-btn', !isOn ? 'is-disabled' : '', className].filter(Boolean).join(' ');
    return `<button class="${btnCls}" type="button">${esc(label)}</button>`;
  }

  if (type === 'analysis') {
    const btnCls = [
      'aitinput__btn',
      isOn ? 'aitinput__btn--analysis' : 'aitinput__btn--disabled',
      className
    ].filter(Boolean).join(' ');
    return `<button class="${btnCls}" type="button">${analysisIcon}</button>`;
  }

  if (type === 'voice') {
    const btnCls = ['aitinput__btn', className].filter(Boolean).join(' ');
    return `<button class="${btnCls}" type="button">${micIcon}</button>`;
  }

  const btnCls = [
    'aitinput__btn',
    isOn ? 'aitinput__btn--send-on' : 'aitinput__btn--send-off',
    className
  ].filter(Boolean).join(' ');
  return `<button class="${btnCls}" type="button">${sendIcon}</button>`;
}
