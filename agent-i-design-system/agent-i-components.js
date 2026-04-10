/**
 * Agent-i Design System — Component Registry (Standalone)
 * =======================================================
 * Loads DS component functions for assembly-style pages.
 * Expected usage: load `agent-i-ds.css` first, then this script.
 */

(() => {
  const COMP_BASE = './02_components/';
  const BLOCK_BASE = './03_blocks/';
  const FOUNDATION_BASE = './01_foundation/';
  const cacheBust = `?v=${Date.now()}`;

  const ensureUtils = () => new Promise((resolve, reject) => {
    if (window.DS_UTILS) return resolve();
    const script = document.createElement('script');
    script.src = `${FOUNDATION_BASE}utils.js${cacheBust}`;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const ensureIcons = async () => {
    if (window.DS_ICON_REGISTRY) return;
    try {
      const res = await fetch(`${FOUNDATION_BASE}icons.json${cacheBust}`);
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
      import(`${BLOCK_BASE}phoneFrame.js${cacheBust}`),
      import(`${BLOCK_BASE}scrollArea.js${cacheBust}`),
      import(`${BLOCK_BASE}stickyHeader.js${cacheBust}`),
      import(`${BLOCK_BASE}page.js${cacheBust}`),
      import(`${BLOCK_BASE}topnav.js${cacheBust}`),
      import(`${BLOCK_BASE}bottomNav.js${cacheBust}`),
      import(`${BLOCK_BASE}searchBar.js${cacheBust}`),
      import(`${BLOCK_BASE}aiSuggestionChips.js${cacheBust}`),
      import(`${BLOCK_BASE}templateAiTextInput.js${cacheBust}`),
      import(`${BLOCK_BASE}chatUi.js${cacheBust}`),
      import(`${BLOCK_BASE}aiBackground.js${cacheBust}`),
      import(`${BLOCK_BASE}chipsUi.js${cacheBust}`),
      import(`${BLOCK_BASE}listCard.js${cacheBust}`),
      import(`${BLOCK_BASE}onboardingCard.js${cacheBust}`),
      import(`${BLOCK_BASE}sectionHeader.js${cacheBust}`),
      import(`${BLOCK_BASE}divider.js${cacheBust}`),
      import(`${BLOCK_BASE}productCard.js${cacheBust}`),
      import(`${BLOCK_BASE}productGrid.js${cacheBust}`),
      import(`${BLOCK_BASE}mediaCard.js${cacheBust}`),
      import(`${COMP_BASE}badge.js${cacheBust}`),
      import(`${COMP_BASE}tag.js${cacheBust}`),
      import(`${COMP_BASE}score.js${cacheBust}`),
      import(`${COMP_BASE}toast.js${cacheBust}`),
      import(`${COMP_BASE}button.js${cacheBust}`),
      import(`${COMP_BASE}ghostButton.js${cacheBust}`),
      import(`${COMP_BASE}avatar.js${cacheBust}`),
      import(`${COMP_BASE}thumb.js${cacheBust}`),
      import(`${COMP_BASE}progress.js${cacheBust}`),
      import(`${COMP_BASE}infocard.js${cacheBust}`),
      import(`${COMP_BASE}qcard.js${cacheBust}`),
      import(`${COMP_BASE}rpattern.js${cacheBust}`),
      import(`${COMP_BASE}selectionChip.js${cacheBust}`),
      import(`${COMP_BASE}cardbtn.js${cacheBust}`),
      import(`${COMP_BASE}selectionChipGroup.js${cacheBust}`),
      import(`${COMP_BASE}selectionCard.js${cacheBust}`),
      import(`${COMP_BASE}moreButton.js${cacheBust}`),
      import(`${COMP_BASE}carousel.js${cacheBust}`),
      import(`${COMP_BASE}message.js${cacheBust}`),
      import(`${COMP_BASE}keyValueList.js${cacheBust}`),
      import(`${COMP_BASE}menuItem.js${cacheBust}`),
      import(`${COMP_BASE}menu.js${cacheBust}`),
      import(`${COMP_BASE}modal.js${cacheBust}`),
      import(`${COMP_BASE}bottomSheet.js${cacheBust}`),
      import(`${COMP_BASE}cardExpand.js${cacheBust}`),
      import(`${COMP_BASE}bottomButton.js${cacheBust}`),
      import(`${COMP_BASE}textinput.js${cacheBust}`),
      import(`${COMP_BASE}reviewCard.js${cacheBust}`)
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
