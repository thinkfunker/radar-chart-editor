/**
 * Color Card Renderer (DS Viewer)
 */
export default function renderColorCard(token, hex) {
  const { copyColor } = window; // Assumed to be global
  const isTrans = hex.length === 9 || hex.startsWith('rgba');
  let alphaInfo = '';
  if (hex.length === 9) {
    const alpha = parseInt(hex.slice(7), 16);
    alphaInfo = `<span class="alpha-badge">Alpha ${Math.round((alpha / 255) * 100)}%</span>`;
  }

  return `
    <div class="semantic-card" onclick="copyColor('${hex}')">
      <div class="semantic-swatch-checker" style="--swatch-color: ${hex}"></div>
      <div class="semantic-info">
        <div class="token-name">${token}</div>
        <div class="hex-row">
          <span class="hex-value">${hex.toUpperCase()}</span>
          ${alphaInfo}
        </div>
      </div>
    </div>
  `;
}