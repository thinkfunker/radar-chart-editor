/**
 * Agent-i Design System — Central Index (Dynamic Integrated)
 * =========================================================
 * Uses dynamic imports with cache-busting to ensure all blocks are latest.
 */

const BASE = './03_blocks/';
const COMP_BASE = './02_components/';
const cacheBust = `?v=${Date.now()}`;

// Registry (Shared with Viewer)
const NAV_REGISTRY = {
  'colors': { id: 'colors', label: 'Colors', jsonPath: 'agent-i-design-system/01_foundation/colors.json' },
  'typography': { id: 'typography', label: 'Typography', jsonPath: 'agent-i-design-system/01_foundation/typography.json' },
  'icons': { id: 'icons', label: 'Icons', jsonPath: 'agent-i-design-system/01_foundation/icons.json' },
  'comp-button': { id: 'comp-button', label: 'Button', jsonPath: 'agent-i-design-system/02_components/button.json' },
  'comp-badge': { id: 'comp-badge', label: 'Badge', jsonPath: 'agent-i-design-system/02_components/badge.json' },
  'comp-toggle': { id: 'comp-toggle', label: 'Toggle', jsonPath: 'agent-i-design-system/02_components/toggle.json' },
  'comp-message': { id: 'comp-message', label: 'Message', jsonPath: 'agent-i-design-system/02_components/message.json' },
  'comp-ai-status-indicator': { id: 'comp-ai-status-indicator', label: 'AI Status Indicator', jsonPath: 'agent-i-design-system/02_components/aiStatusIndicator.json' },
  'comp-thumb': { id: 'comp-thumb', label: 'Thumbnail', jsonPath: 'agent-i-design-system/02_components/thumb.json' },
  'comp-slider': { id: 'comp-slider', label: 'Slider', jsonPath: 'agent-i-design-system/02_components/slider.json' },
  'blk-accordion': { id: 'blk-accordion', label: 'Accordion', jsonPath: 'agent-i-design-system/02_components/accordion.json' }
};

async function init() {
  try {
    // 1. Force load all core blocks with cache busting
    const [
      { default: topbar },
      { default: sidebar },
      { default: renderPlaygroundControls },
      { default: renderGuidelines },
      { initViewer },
      { default: button },
      { default: badge },
      { default: mappin },
      { default: paginationNav },
      { default: scrim },
      { default: floatingButton },
      { default: progressIndicator },
      { default: filterInput },
      { default: toggle },
      { default: sw },
      { default: message },
      { default: aiStatusIndicator },
      { default: progress },
      { default: accordion },
      { default: avatar },
      { default: chip },
      { default: msgactionbar },
      { default: ghostButton },
      { default: tag },
      { default: score },
      { default: toast },
      { default: reviewcard },
      { default: infocard },
      { default: qcard },
      { default: rpattern },
      { default: selectionChip },
      { default: cardbtn },
      { default: selectionChipGroup },
      { default: selectionCard },
      { default: moreButton },
      { default: carousel },
      { default: keyValueList },
      { default: thumb },
      { default: menuItem },
      { default: menu },
      { default: modal },
      { default: bottomSheet },
      { default: cardExpand },
      { default: bottomButton },
      { default: list },
      { default: listsel },
      { default: slider },
      { default: aitinput },
      { default: tab },
      { default: textinput },
      { default: phoneFrame },
      { default: scrollArea },
      { default: stickyHeader },
      { default: page },
      { default: topnav },
      { default: bottomNav },
      { default: searchBar },
      { default: aiSuggestionChips },
      { default: templateAiTextInput },
      { default: chatUi },
      { default: aiBackground },
      { default: chipsUi },
      { default: listCard },
      { default: sectionHeader },
      { default: divider },
      { default: productCard },
      { default: productGrid },
      { default: mediaCard },
      { default: onboardingCard },
      { default: categoryCard },
      { default: chatModal }
    ] = await Promise.all([
      import(`${BASE}topbar.js${cacheBust}`),
      import(`${BASE}sidebar.js${cacheBust}`),
      import(`${BASE}renderPlaygroundControls.js${cacheBust}`),
      import(`${BASE}renderGuidelines.js${cacheBust}`),
      import(`${BASE}viewerEngine.js${cacheBust}`),
      import(`${COMP_BASE}button.js${cacheBust}`),
      import(`${COMP_BASE}badge.js${cacheBust}`),
      import(`${COMP_BASE}mappin.js${cacheBust}`),
      import(`${COMP_BASE}pgnav.js${cacheBust}`),
      import(`${COMP_BASE}scrim.js${cacheBust}`),
      import(`${COMP_BASE}floatingButton.js${cacheBust}`),
      import(`${COMP_BASE}progressIndicator.js${cacheBust}`),
      import(`${COMP_BASE}filterinput.js${cacheBust}`),
      import(`${COMP_BASE}toggle.js${cacheBust}`),
      import(`${COMP_BASE}switch.js${cacheBust}`),
      import(`${COMP_BASE}message.js${cacheBust}`),
      import(`${COMP_BASE}aiStatusIndicator.js${cacheBust}`),
      import(`${COMP_BASE}progress.js${cacheBust}`),
      import(`${COMP_BASE}accordion.js${cacheBust}`),
      import(`${COMP_BASE}avatar.js${cacheBust}`),
      import(`${COMP_BASE}chip.js${cacheBust}`),
      import(`${COMP_BASE}msgactionbar.js${cacheBust}`),
      import(`${COMP_BASE}ghostButton.js${cacheBust}`),
      import(`${COMP_BASE}tag.js${cacheBust}`),
      import(`${COMP_BASE}score.js${cacheBust}`),
      import(`${COMP_BASE}toast.js${cacheBust}`),
      import(`${COMP_BASE}reviewCard.js${cacheBust}`),
      import(`${COMP_BASE}infocard.js${cacheBust}`),
      import(`${COMP_BASE}qcard.js${cacheBust}`),
      import(`${COMP_BASE}rpattern.js${cacheBust}`),
      import(`${COMP_BASE}selectionChip.js${cacheBust}`),
      import(`${COMP_BASE}cardbtn.js${cacheBust}`),
      import(`${COMP_BASE}selectionChipGroup.js${cacheBust}`),
      import(`${COMP_BASE}selectionCard.js${cacheBust}`),
      import(`${COMP_BASE}moreButton.js${cacheBust}`),
      import(`${COMP_BASE}carousel.js${cacheBust}`),
      import(`${COMP_BASE}keyValueList.js${cacheBust}`),
      import(`${COMP_BASE}thumb.js${cacheBust}`),
      import(`${COMP_BASE}menuItem.js${cacheBust}`),
      import(`${COMP_BASE}menu.js${cacheBust}`),
      import(`${COMP_BASE}modal.js${cacheBust}`),
      import(`${COMP_BASE}bottomSheet.js${cacheBust}`),
      import(`${COMP_BASE}cardExpand.js${cacheBust}`),
      import(`${COMP_BASE}bottomButton.js${cacheBust}`),
      import(`${COMP_BASE}list.js${cacheBust}`),
      import(`${COMP_BASE}listsel.js${cacheBust}`),
      import(`${COMP_BASE}slider.js${cacheBust}`),
      import(`${COMP_BASE}aitinput.js${cacheBust}`),
      import(`${COMP_BASE}tab.js${cacheBust}`),
      import(`${COMP_BASE}textinput.js${cacheBust}`),
      import(`${BASE}phoneFrame.js${cacheBust}`),
      import(`${BASE}scrollArea.js${cacheBust}`),
      import(`${BASE}stickyHeader.js${cacheBust}`),
      import(`${BASE}page.js${cacheBust}`),
      import(`${BASE}topnav.js${cacheBust}`),
      import(`${BASE}bottomNav.js${cacheBust}`),
      import(`${BASE}searchBar.js${cacheBust}`),
      import(`${BASE}aiSuggestionChips.js${cacheBust}`),
      import(`${BASE}templateAiTextInput.js${cacheBust}`),
      import(`${BASE}chatUi.js${cacheBust}`),
      import(`${BASE}aiBackground.js${cacheBust}`),
      import(`${BASE}chipsUi.js${cacheBust}`),
      import(`${BASE}listCard.js${cacheBust}`),
      import(`${BASE}sectionHeader.js${cacheBust}`),
      import(`${BASE}divider.js${cacheBust}`),
      import(`${BASE}productCard.js${cacheBust}`),
      import(`${BASE}productGrid.js${cacheBust}`),
      import(`${BASE}mediaCard.js${cacheBust}`),
      import(`${BASE}onboardingCard.js${cacheBust}`),
      import(`${BASE}categoryCard.js${cacheBust}`),
      import(`${BASE}chatModal.js${cacheBust}`)
    ]);

    const DS = {
      topbar, sidebar, renderPlaygroundControls, renderGuidelines, initViewer,
      button, badge, mappin, paginationNav, scrim, floatingButton, progressIndicator, filterInput, toggle, switch: sw, message, aiStatusIndicator, progress, accordion, avatar, chip, msgactionbar,
      ghostButton, tag, score, toast, infocard, list, listsel, slider, aitinput,
      reviewcard, qcard, rpattern, selectionChip, cardbtn, selectionChipGroup, selectionCard, moreButton, carousel, keyValueList, thumb, menuItem, menu, modal, tab,
      bottomSheet,
      cardExpand,
      bottomButton,
      textinput,
      phoneFrame, scrollArea, stickyHeader, page, topnav, bottomNav,
      searchBar, aiSuggestionChips, templateAiTextInput, chatUi, aiBackground, chipsUi, listCard, sectionHeader, divider,
      productCard, productGrid, mediaCard, onboardingCard, categoryCard, chatModal
    };

    window.DS = DS;
    initViewer(NAV_REGISTRY);
    
    console.log('[DS-Index] Dynamic Loading Complete.');
  } catch (e) {
    console.error('[DS-Index] Dynamic Loading Failed:', e);
  }
}

// Expose a global readiness promise so loaders can await full init.
window.DS_READY = init();

export default { ready: window.DS_READY };
