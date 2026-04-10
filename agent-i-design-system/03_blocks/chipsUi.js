/**
 * Chips UI helper for controls
 * @param {string} groupId
 * @param {string[]} options
 * @param {string} selected
 */
export default function chipsUi(groupId, options = [], selected = '') {
  return `
    <div class="chip-group" data-chip-group="${groupId}">
      ${options.map(option => `
        <button class="chip${option === selected ? ' is-selected' : ''}" data-chip="${groupId}" data-value="${option}" type="button">${option}</button>
      `).join('')}
    </div>
  `;
}