/**
 * 02_components/avatar.js
 */
const ASSETS = {
  portrait: '/images/agent-i-design-system/assets/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png',
  ai: {
    xsmall: '/icons/ai-agent-gradient.svg',
    small: '/icons/ai-agent-gradient.svg',
    medium: '/icons/ai-agent-gradient.svg'
  },
  outline: {
    xsmall: '/images/agent-i-design-system/assets/avatar-outline-xsmall.svg'
  }
};

export default function avatar(props = {}) {
  const { size = 'medium', type = 'user', src = '', className = '' } = props;
  const cls = `avatar avatar--${size} avatar--${type} ${className}`.trim();

  let content = '';
  if (type === 'ai') {
    const aiSrc = ASSETS.ai[size] || ASSETS.ai.small;
    content = `<img src="${aiSrc}" alt="" />`;
  } else {
    const imgSrc = src || ASSETS.portrait;
    content = `<img src="${imgSrc}" alt="" />`;
    if (size === 'xsmall') {
      content += `<img class="avatar-outline" src="${ASSETS.outline.xsmall}" alt="" />`;
    }
  }

  return `<div class="${cls}">${content}</div>`;
}
