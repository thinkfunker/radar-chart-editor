/**
 * Chat UI (Figma 22855:22681)
 * @param {object} opts
 * @param {string} opts.aiAnswer - optional pre-rendered HTML for AI message block
 * @param {boolean} opts.showUser - show user message row
 * @param {boolean} opts.showAi - show AI message row
 */
export default function chatUi(opts = {}) {
  const aiAnswer = opts.aiAnswer || '';
  const showUser = opts.showUser !== false;
  const showAi = opts.showAi !== false;

  const userMessage = window.DS.message({
    role: 'user',
    os: 'mobile',
    background: false,
    type: 'text'
  });

  const aiMessage = window.DS.message({
    role: 'ai',
    os: 'mobile',
    background: false,
    type: 'text'
  });

  const rows = [];
  if (showUser) rows.push(`<div class="chat-ui__row">${userMessage}</div>`);
  if (showAi) rows.push(`<div class="chat-ui__row">${aiMessage}</div>`);

  const content = aiAnswer
    ? aiAnswer
    : `<div class="chat-ui__content">${rows.join('')}</div>`;

  return `
    <div class="chat-ui">
      <div class="chat-ui__section">
        ${content}
      </div>
    </div>
  `;
}
