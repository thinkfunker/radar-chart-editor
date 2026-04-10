export default function thumb(opts = {}) {
  const { icon } = window.DS_UTILS;
  const ratioMap = {
    '1:1': 'r11',
    '4:3': 'r43',
    '3:2': 'r32',
    '16:9': 'r169',
    r11: 'r11',
    r43: 'r43',
    r32: 'r32',
    r169: 'r169'
  };
  const ratio = ratioMap[opts.ratio] || 'r11';
  const state = opts.state || 'image';
  const cropped = opts.cropped !== false;
  const gradation = opts.gradation === true;
  const outline = opts.outline !== false;
  const fill = opts.fill === true;

  const ratioClass = `thumb--${ratio}`;
  const cropClass = cropped ? 'thumb--cropped' : 'thumb--uncropped';
  const fillClass = fill ? 'thumb--fill' : '';

  const showImage = state === 'image';
  const showEmpty = state === 'empty' && !cropped;
  const showGrad = gradation && (showImage ? (cropped || !cropped) : !cropped);
  const showOutline = outline && (showImage ? (cropped || !cropped) : !cropped);

  const photo = cropped
    ? '<div class="thumb__photo"></div>'
    : '<div class="thumb__img-wrap"><div class="thumb__photo"></div></div>';

  const emptyIcon = icon('image-alt_outline', { size: 24, color: 'var(--color-content-tertiary)' });

  return `
    <div class="thumb ${ratioClass} ${cropClass} ${fillClass}">
      ${showImage ? photo : ''}
      ${showEmpty ? `<div class="thumb__empty thumb__empty--${ratio}"><span class="thumb__empty-icon">${emptyIcon}</span></div>` : ''}
      ${showGrad ? '<div class="thumb__grad"></div>' : ''}
      ${showOutline ? '<div class="thumb__outline"></div>' : ''}
    </div>
  `;
}
