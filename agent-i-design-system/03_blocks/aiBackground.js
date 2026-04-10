/**
 * AI Background (Figma 22428:30021)
 * @param {object} opts
 * @param {boolean} opts.darkMode
 */
export default function aiBackground(opts = {}) {
  const darkMode = !!opts.darkMode;
  return `
    <div class="ai-bg ${darkMode ? 'ai-bg--dark' : 'ai-bg--light'}">
    </div>
  `;
}
