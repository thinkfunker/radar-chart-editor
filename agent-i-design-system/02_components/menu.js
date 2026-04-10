export default function menu(opts = {}) {
  const { esc } = window.DS_UTILS || {};
  const { menuItem } = window.DS || {};
  if (!menuItem) return '';

  const type = opts.type || 'default';
  const items = Array.isArray(opts.items) ? opts.items : null;
  const withIcon = type === 'icon';
  const labels = opts.labels || ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'];
  const dividerAfter = typeof opts.dividerAfter === 'number' ? opts.dividerAfter : 2;

  const defaultItems = labels.map((label, idx) => {
    const divider = idx === dividerAfter;
    return menuItem({ label, icon: withIcon, divider, state: 'enabled' });
  }).join('');

  const shareItems = [
    { label: '共有する', iconName: 'share-ios_solid', iconColor: 'var(--color-content-primary)', divider: false },
    { label: 'お気に入り', iconName: 'heart_outline', iconColor: 'var(--color-content-primary)', divider: false },
    { label: '削除する', iconName: 'trash_outline', iconColor: 'var(--color-content-alert)', labelTone: 'alert', divider: true },
    { label: '新しいチャット', iconName: 'plus_outline', iconColor: 'var(--color-content-primary)', divider: false }
  ].map((item) => menuItem({ icon: true, state: 'enabled', ...item })).join('');

  return `
    <div class="mn">
      ${items ? items.map((item) => menuItem(item)).join('') : (type === 'share' ? shareItems : defaultItems)}
    </div>
  `;
}
