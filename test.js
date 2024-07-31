const defaultVals = [
  { id: 1, itemQty: 1, itemText: 'toothbrush', isChecked: true },
  { id: 5, itemQty: 5, itemText: 'pairs of socks', isChecked: false },
  { id: 2, itemQty: 1, itemText: 'passport', isChecked: true },
  { id: 3, itemQty: 1, itemText: 'brush', isChecked: false },
  { id: 7, itemQty: 1, itemText: 'laptop', isChecked: false },
  { id: 4, itemQty: 3, itemText: 'underwears', isChecked: false },
  { id: 6, itemQty: 2, itemText: 'contact lenses', isChecked: true },
]


defaultVals.sort((a, b) => {
  return a.id - b.id;
});

defaultVals.sort((a, b) => {
  return a.isChecked - b.isChecked;
});

defaultVals.sort((a, b) => {
  if (a.itemText < b.itemText) return -1;
  if (a.itemText > b.itemText) return 1;
  return 0;
});

console.log(defaultVals);
