/**
 * Page Assembler Component
 * @param {string[]} sections - HTML strings to join
 */
export default function page(sections) {
  const { join } = window.DS_UTILS;
  return join(sections);
}