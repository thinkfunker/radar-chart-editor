export default function aiStatusIndicator(opts = {}) {
  const size = opts.size || 'xxlarge';
  const style = opts.style || 'primary';
  const type = opts.type || 'word';
  const className = opts.className || '';

  const sizeMap = {
    small: 16,
    medium: 20,
    large: 24,
    xlarge: 40,
    xxlarge: 48
  };

  const map = {
    primary: {
      word: {
        small: '/icons/ai-status-primary-word-small.svg',
        medium: '/icons/ai-status-primary-word-medium.svg',
        large: '/icons/ai-status-primary-word-large.svg',
        xlarge: '/icons/ai-status-primary-word-xlarge.svg',
        xxlarge: '/icons/ai-status-primary-word-xxlarge.svg'
      },
      check: {
        small: '/icons/ai-status-primary-check-small.svg',
        medium: '/icons/ai-status-primary-check-medium.svg',
        large: '/icons/ai-status-primary-check-large.svg',
        xlarge: '/icons/ai-status-primary-check-xlarge.svg',
        xxlarge: '/icons/ai-status-primary-check-xxlarge.svg'
      }
    },
    riff: {
      word: {
        small: '/icons/ai-status-riff-word-small.svg',
        medium: '/icons/ai-status-riff-word-medium.svg',
        large: '/icons/ai-status-riff-word-large.svg',
        xlarge: '/icons/ai-status-riff-word-xlarge.svg',
        xxlarge: '/icons/ai-status-riff-word-xxlarge.svg'
      },
      check: {
        small: '/icons/ai-status-riff-check-small.svg',
        medium: '/icons/ai-status-riff-check-medium.svg',
        large: '/icons/ai-status-riff-check-large.svg',
        xlarge: '/icons/ai-status-riff-check-xlarge.svg',
        xxlarge: '/icons/ai-status-riff-check-xxlarge.svg'
      }
    },
    black: {
      word: {
        small: '/icons/ai-status-black-word-small.svg',
        medium: '/icons/ai-status-black-word-medium.svg',
        large: '/icons/ai-status-black-word-large.svg',
        xlarge: '/icons/ai-status-black-word-xlarge.svg',
        xxlarge: '/icons/ai-status-black-word-xxlarge.svg'
      },
      check: {
        small: '/icons/ai-status-black-check-small.svg',
        medium: '/icons/ai-status-black-check-medium.svg',
        large: '/icons/ai-status-black-check-large.svg',
        xlarge: '/icons/ai-status-black-check-xlarge.svg',
        xxlarge: '/icons/ai-status-black-check-xxlarge.svg'
      }
    }
  };

  const sizeKey = sizeMap[size] ? size : 'xxlarge';
  const styleMap = map[style] || map.primary;
  const typeMap = styleMap[type] || styleMap.word;
  const src = typeMap[sizeKey] || typeMap.xxlarge;

  const cls = [
    'ai-status-indicator',
    `ai-status-indicator--${sizeKey}`,
    `ai-status-indicator--${style}`,
    className
  ].filter(Boolean).join(' ');

  return `<span class="${cls}"><img src="${src}" alt="" /></span>`;
}
