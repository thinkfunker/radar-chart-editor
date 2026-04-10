/**
 * Product Grid Component
 * @param {string[]} cards - array of productCard() HTML strings
 */
export default function productGrid(cards) {
  const { join } = window.DS_UTILS;
  return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-300);padding:0 var(--spacing-400);">${join(cards)}</div>`;
}