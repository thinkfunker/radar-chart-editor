/**
 * protocol-warning.js — Show warning when opened via file://
 */

if (window.location.protocol === 'file:') {
  const el = document.querySelector('.protocol-warning');
  if (el) el.style.display = 'flex';
}