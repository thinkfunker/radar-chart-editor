/**
 * 03_blocks/carousel.js
 */
export default function carousel(props = {}) {
  const { items = [], className = '' } = props;
  
  const slides = items.map((item, idx) => `
    <div class="carousel__slide ${idx === 0 ? 'active' : ''}">
      ${item.img ? `<img src="${item.img}" alt="Slide ${idx + 1}">` : `<div style="width:100%;height:100%;background:var(--color-background-secondary);"></div>`}
      <div class="carousel__caption">${item.caption || ''}</div>
    </div>
  `).join('');

  return `
    <div class="carousel ${className}">
      <div class="carousel__inner">${slides}</div>
      <div class="carousel__ctrl">
        <button class="carousel__prev">&lt;</button>
        <button class="carousel__next">&gt;</button>
      </div>
      <div class="carousel__dots">
        ${items.map((_, i) => `<span class="carousel__dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
      </div>
    </div>`;
}