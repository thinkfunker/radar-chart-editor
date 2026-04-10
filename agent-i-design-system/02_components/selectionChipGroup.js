export default function selectionChipGroup(opts = {}) {
  const { selectionChip } = window.DS || {};
  const columns = opts.columns || opts.cols || '2 Columns';
  const isFour = String(columns).toLowerCase().includes('4');
  const colCount = isFour ? 4 : 2;

  const renderChip = () => {
    if (selectionChip) {
      return selectionChip({ size: 'large', state: 'enabled', selected: false, label: 'Label' });
    }
    return '<button class="sch sch--lg" type="button"><span class="sch__label">Label</span></button>';
  };

  const row = () => `<div class="cg__row">${Array.from({ length: colCount }).map(renderChip).join('')}</div>`;

  return `<div class="cg">${row()}${row()}</div>`;
}