/**
 * Section Header Component
 * @param {object} opts
 * @param {string} opts.title   - section title
 * @param {string} opts.link    - "see all" link text
 * @param {string} opts.linkHref - href for link
 */
export default function sectionHeader(opts = {}) {
  const { esc } = window.DS_UTILS;
  const link = opts.link ? `<a href="${opts.linkHref || '#'}" style="font-size:var(--text-size-xs);color:var(--color-content-key);font-weight:500;text-decoration:none;">${esc(opts.link)}</a>` : '';
  return `<div style="display:flex;align-items:center;justify-content:space-between;padding:var(--spacing-500) var(--spacing-400) var(--spacing-300);"><span style="font-size:var(--sizing-400);font-weight:700;color: var(--color-content-primary);">${esc(opts.title || '')}</span>${link}</div>`;
}