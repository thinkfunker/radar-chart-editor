/**
 * Agent-i Design System — Component Registry (Standalone)
 * =======================================================
 * Loads DS component functions for assembly-style pages.
 * Expected usage: load `agent-i-ds.css` first, then this script.
 */

(() => {
  const BASE_URL = new URL('.', import.meta.url);
  const COMP_BASE = new URL('./02_components/', BASE_URL);
  const BLOCK_BASE = new URL('./03_blocks/', BASE_URL);
  const FOUNDATION_BASE = new URL('./01_foundation/', BASE_URL);
  const cacheBust = `?v=${Date.now()}`;

  const ensureUtils = () => new Promise((resolve, reject) => {
    if (window.DS_UTILS) return resolve();
    const script = document.createElement('script');
    script.src = new URL(`./01_foundation/utils.js${cacheBust}`, BASE_URL).href;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const ensureIcons = async () => {
    if (window.DS_ICON_REGISTRY) return;
    try {
      const res = await fetch(new URL(`./01_foundation/icons.json${cacheBust}`, BASE_URL).href);
      window.DS_ICON_REGISTRY = await res.json();
    } catch (err) {
      console.warn('[agent-i-components] Icon registry load failed:', err);
    }
  };

  async function loadComponents() {
    await ensureUtils();
    await ensureIcons();

    const [
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
      { default: onboardingCard },
      { default: sectionHeader },
      { default: divider },
      { default: productCard },
      { default: productGrid },
      { default: mediaCard },
      { default: badge },
      { default: tag },
      { default: score },
      { default: toast },
      { default: button },
      { default: ghostButton },
      { default: avatar },
      { default: thumb },
      { default: progress },
      { default: infocard },
      { default: qcard },
      { default: rpattern },
      { default: selectionChip },
      { default: cardbtn },
      { default: selectionChipGroup },
      { default: selectionCard },
      { default: moreButton },
      { default: carousel },
      { default: message },
      { default: keyValueList },
      { default: menuItem },
      { default: menu },
      { default: modal },
      { default: bottomSheet },
      { default: cardExpand },
      { default: bottomButton },
      { default: textinput },
      { default: reviewcard }
    ] = await Promise.all([
      import(new URL(`./03_blocks/phoneFrame.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/scrollArea.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/stickyHeader.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/page.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/topnav.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/bottomNav.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/searchBar.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/aiSuggestionChips.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/templateAiTextInput.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/chatUi.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/aiBackground.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/chipsUi.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/listCard.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/onboardingCard.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/sectionHeader.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/divider.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/productCard.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/productGrid.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./03_blocks/mediaCard.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/badge.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/tag.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/score.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/toast.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/button.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/ghostButton.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/avatar.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/thumb.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/progress.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/infocard.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/qcard.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/rpattern.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/selectionChip.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/cardbtn.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/selectionChipGroup.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/selectionCard.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/moreButton.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/carousel.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/message.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/keyValueList.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/menuItem.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/menu.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/modal.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/bottomSheet.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/cardExpand.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/bottomButton.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/textinput.js${cacheBust}`, BASE_URL).href),
      import(new URL(`./02_components/reviewCard.js${cacheBust}`, BASE_URL).href)
    ]);

    const DS = window.DS || {};
    Object.assign(DS, {
      phoneFrame,
      scrollArea,
      stickyHeader,
      page,
      topnav,
      bottomNav,
      searchBar,
      aiSuggestionChips,
      templateAiTextInput,
      chatUi,
      aiBackground,
      chipsUi,
      listCard,
      onboardingCard,
      sectionHeader,
      divider,
      productCard,
      productGrid,
      mediaCard,
      badge,
      tag,
      score,
      toast,
      button,
      ghostButton,
      avatar,
      thumb,
      progress,
      infocard,
      qcard,
      rpattern,
      selectionChip,
      cardbtn,
      selectionChipGroup,
      selectionCard,
      moreButton,
      carousel,
      message,
      keyValueList,
      menuItem,
      menu,
      modal,
      bottomSheet,
      cardExpand,
      bottomButton,
      textinput,
      reviewcard,
      init: initAiTextInputs // 초기화 함수 노출
    });

    window.DS = DS;
    function initAiTextInputs(root = document) {
      const inputs = root.querySelectorAll('.aitmpl[data-aitmpl="true"]');
      inputs.forEach((wrap) => {
        if (wrap.dataset.aitmplInited === 'true') return;
        wrap.dataset.aitmplInited = 'true';

        const textarea = wrap.querySelector('.aitmpl__textarea');
        const inputShell = wrap.querySelector('.aitmpl__input');
        const chatInput = wrap.closest('.chat-input') || wrap;
        const redoBtn = wrap.querySelector('button[aria-label="redo"]');
        const chipBar = chatInput ? chatInput.querySelector('.aisc') : null;

        const autoResize = wrap.dataset.aitmplAutoResize === 'true';
        const maxHeight = wrap.dataset.aitmplMaxHeight || '';
        const redoAnim = wrap.dataset.aitmplRedoAnim === 'true';
        const toggleChips = wrap.dataset.aitmplToggleChips === 'true';
        const floating = wrap.dataset.aitmplFloating === 'true';
        const width = wrap.dataset.aitmplWidth || '';

        if (floating && chatInput) {
          chatInput.style.position = 'fixed';
          chatInput.style.bottom = '0';
          chatInput.style.left = '50%';
          chatInput.style.transform = 'translateX(-50%)';
          chatInput.style.width = '100%';
          chatInput.style.maxWidth = 'var(--size-phone-width, 390px)';
          chatInput.style.zIndex = '3000';
          chatInput.style.background = 'var(--color-background-white, #ffffff)';
          chatInput.style.boxShadow = '0 -1px 12px rgba(0,0,0,0.08)';
        }

        const updateChipsVisibility = () => {
          if (!chipBar || !textarea) return;
          const hasText = textarea.value.trim().length > 0;
          chipBar.style.display = hasText ? 'none' : '';
        };

        const resizeTextarea = () => {
          if (!textarea) return;
          textarea.style.height = 'auto';
          let max = 0;
          if (maxHeight) {
            const parsed = parseFloat(maxHeight);
            if (!Number.isNaN(parsed)) max = parsed;
          }
          if (!max && inputShell) {
            max = parseFloat(window.getComputedStyle(inputShell).maxHeight || '0');
          }
          const nextHeight = textarea.scrollHeight;
          if (max && nextHeight > max) {
            textarea.style.height = `${max}px`;
            textarea.style.overflowY = 'auto';
          } else {
            textarea.style.height = `${nextHeight}px`;
            textarea.style.overflowY = 'hidden';
          }
        };

        if (textarea && autoResize) {
          resizeTextarea();
          textarea.addEventListener('input', resizeTextarea);
        }

        if (textarea && toggleChips) {
          updateChipsVisibility();
          textarea.addEventListener('input', updateChipsVisibility);
        }

        if (redoBtn && redoAnim) {
          redoBtn.addEventListener('click', () => {
            redoBtn.classList.remove('redo-rotating');
            void redoBtn.offsetWidth;
            redoBtn.classList.add('redo-rotating');
          });
          redoBtn.addEventListener('animationend', (event) => {
            if (event.target === redoBtn || redoBtn.contains(event.target)) {
              redoBtn.classList.remove('redo-rotating');
            }
          });
        }

        if (redoBtn && textarea) {
          redoBtn.addEventListener('click', () => {
            textarea.value = '';
            if (autoResize) resizeTextarea();
            if (toggleChips) updateChipsVisibility();
          });
        }
      });
    }

    document.dispatchEvent(new CustomEvent('ds:components-ready', { detail: DS }));
    if (window.DS_UTILS?.hydrateIcons) {
      window.DS_UTILS.hydrateIcons(document);
    }
    initAiTextInputs();
    console.log('[agent-i-components] Component registry ready.');
  }

  loadComponents().catch((err) => {
    console.error('[agent-i-components] Failed to load components:', err);
  });
})();
