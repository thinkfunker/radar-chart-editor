/**
 * Agent-i Design System Loader
 * ============================
 * Handles dynamic module loading, dependency injection, 
 * and cache busting for the DS Viewer.
 */

const BASE = '/agent-i-design-system/';

// Cache buster for development
const cacheBust = `?v=${Date.now()}`;

async function loadDesignSystem() {
  try {
    console.log('[ds-loader] Initializing Agent-i Design System...');

    // 1. Load Core Utilities first (Plain Script)
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `${BASE}01_foundation/utils.js${cacheBust}`;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

    // 2. Load Icon Registry
    const iconRes = await fetch(`${BASE}01_foundation/icons.json${cacheBust}`);
    window.DS_ICON_REGISTRY = await iconRes.json();

    // 3. Dynamic Import the modular index
    const m = await import(`./index.js${cacheBust}`);
    if (m?.default?.ready) {
      await m.default.ready;
    }

    // 4. Dispatch ready event for viewer
    document.dispatchEvent(new CustomEvent('ds:ready', { detail: window.DS }));
    if (window.DS_UTILS?.hydrateIcons) {
      window.DS_UTILS.hydrateIcons(document);
    }
    
    console.log('[ds-loader] Design System Ready.');
  } catch (err) {
    console.error('[ds-loader] Initialization failed:', err);
  }
}

// Start loading
loadDesignSystem();
