export default function message(opts = {}) {
  const { esc } = window.DS_UTILS;
  const { avatar, progress } = window.DS;

  const role = (opts.role || 'user').toLowerCase();
  const os = opts.os || 'mobile';
  const state = opts.state || 'enabled';
  const type = opts.type || 'text';
  const background = typeof opts.background === 'boolean'
    ? opts.background
    : (opts.bg === 'on' ? true : role === 'user');
  const subText = opts.subText || 'AI Message';
  const padding = opts.padding || '';

  const widthClass = os === 'pc' ? 'msg--pc' : 'msg--mobile';
  const paddingStyle = padding ? `style="padding:${padding}"` : '';

  const avatarAI = avatar({ size: 'medium', type: 'ai' });
  const avatarUser = avatar({ size: 'medium', type: 'user' });

  const agentName = opts.agentName || 'Agent Name';
  const introText = opts.introText || 'AI Message';
  const titleText = opts.titleText || 'Title text';
  const orderedLabel = opts.orderedLabel || 'Title text :';
  const orderedValue = opts.orderedValue || 'AI Message';
  const bulletItems = Array.isArray(opts.bullets) ? opts.bullets : ['Bullet Item', 'Bullet Item', 'Bullet Item'];
  const bottomText = opts.bottomText || 'AI Message';

  const thumbnail = () => `
    <div class="msg-image__thumb">
      <img src="/icons/image-alt_outline.svg" alt="" />
      <div class="msg-image__outline"></div>
    </div>
  `;

  if (state === 'loading') {
    return `
      <div class="msg-loading ${widthClass}" ${paddingStyle}>
        <div class="msg-loading__spinner">${progress({ type: 'circle', size: 'small' })}</div>
        <div class="msg-loading__text">${esc(subText)}</div>
      </div>
    `;
  }

  if (type === 'image') {
    return `
      <div class="msg-image ${background ? 'msg-image--bubble' : 'msg-image--plain'} ${widthClass}" ${paddingStyle}>
        <div class="msg-image__frame">${thumbnail()}</div>
      </div>
    `;
  }

  if (role === 'ai') {
    return `
      <div class="msg-ai ${widthClass}" ${paddingStyle}>
        <div class="msg-ai-header">
          <div class="msg-avatar msg-avatar--ai">${avatarAI}</div>
          <div class="msg-ai-name">${esc(agentName)}</div>
        </div>
        <div class="msg-ai-content">
          <div class="msg-ai-intro">${esc(introText)}</div>
          <div class="msg-ai-body">
            <div class="msg-ai-title">${esc(titleText)}</div>
            <div class="msg-ai-ordered">
              <span class="msg-ai-ordered__label">${esc(orderedLabel)}</span>
              <span>${esc(orderedValue)}</span>
            </div>
            <ul class="msg-ai-list">
              ${bulletItems.map((item) => `<li>${esc(item)}</li>`).join('')}
            </ul>
          </div>
          <div class="msg-ai-bottom">${esc(bottomText)}</div>
        </div>
      </div>
    `;
  }

  if (background) {
    return `
      <div class="msg-item--user-bubble ${widthClass}" ${paddingStyle}>
        <div class="msg-bubble ${os === 'pc' ? 'msg-bubble--full' : ''}">User Message</div>
      </div>
    `;
  }

  return `
    <div class="msg-item ${widthClass}" ${paddingStyle}>
      <div class="msg-avatar msg-avatar--user">${avatarUser}</div>
      <div class="msg-text-body">
        <div class="msg-text">User Message</div>
      </div>
    </div>
  `;
}
