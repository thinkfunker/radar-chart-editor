export default function aiInput(opts = {}) {
  const { esc } = window.DS_UTILS;
  const state = opts.state || 'default';
  const size = opts.size || 'simple';
  
  const stateClass = state !== 'default' ? ' ' + state : '';
  const sizeClass  = size === 'multiple' ? ' multiple' : '';
  const cls = 'ai-input' + sizeClass + stateClass;
  
  const isDisabled = state === 'disabled';
  const isActive = state === 'typed';
  const inputVal = isActive ? 'Entered text' : '';
  const ph = isDisabled ? 'Disabled' : 'Type a message...';

  const chev = window.DS_UTILS.icon('arrow-up_solid', { size: 14, color: 'var(--color-content-inverted)' });
  const plus = window.DS_UTILS.icon('plus_solid', { size: 13, color: 'var(--color-content-tertiary)' });

  // Re-use logic from renderLegacyPlayground
  return `<div class="ai-input-wrap"><div class="${cls}">`
       + `<button class="ai-input-left-btn" style="pointer-events:none">${plus}</button>`
       + `<div class="ai-input-field-wrap" style="flex:1"><input type="text" class="ai-input-field" value="${inputVal}" placeholder="${ph}" readonly style="pointer-events:none;"/></div>`
       + `<button class="ai-input-send-btn${isActive ? ' active' : ''}" style="pointer-events:none"><span class="send-icon-wrap">${chev}</span></button>`
       + `</div></div>`;
}
