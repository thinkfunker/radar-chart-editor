/**
 * 04_templates/page-shell.js — Layout Templates
 */

if (typeof window !== 'undefined' && !window.DS) window.DS = {};

(function(DS) {
  /**
   * Standard Full Page Shell with Top/Bottom nav.
   */
  DS.FullPageShell = function(content) {
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
  };
})(window.DS);