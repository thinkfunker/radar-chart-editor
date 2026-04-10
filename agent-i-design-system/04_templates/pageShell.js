/**
 * FullPageShell Template
 */
export default function FullPageShell(content) {
  const DS = window.DS;
  return DS.phoneFrame([
    DS.topnav({ title: 'Agent-i' }),
    DS.scrollArea(content),
    DS.bottomNav([
      { label: 'Home', icon: '🏠', active: true },
      { label: 'Search', icon: '🔍' },
      { label: 'Chat', icon: '💬' },
      { label: 'Profile', icon: '👤' }
    ])
  ]);
}