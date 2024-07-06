import './App.css';
import { Logo } from './components/Logo';
import { Form } from './components/Form';
import { PackingList } from './components/PackingList';
import { useState } from 'react';
import { Footer } from './components/Footer';

const defaultVals = [
  { id: 1, itemQty: 1, itemText: 'toothbrush', isChecked: true },
  { id: 2, itemQty: 1, itemText: 'passport', isChecked: true },
  { id: 3, itemQty: 1, itemText: 'brush', isChecked: false },
  { id: 4, itemQty: 3, itemText: 'underwears', isChecked: false },
  { id: 5, itemQty: 5, itemText: 'pairs of socks', isChecked: false },
  { id: 6, itemQty: 2, itemText: 'contact lenses', isChecked: true },
  { id: 7, itemQty: 1, itemText: 'laptop', isChecked: false },
]

function App() {
  const [items, setItems] = useState(defaultVals);

  const addTravelItem = (item) => {
    setItems([
      ...items,
      item
    ]);
  };

  const handleCheckboxOnChange = (evt, item) => {
    if (item) {
      const newVal = evt.target.checked;
      setItems(items.map(currItem => currItem.id === item.id ? {...currItem, isChecked: newVal } : currItem));
    }
  };

  const handleDeleteItem = (itemId) => {
    if (itemId) {
      setItems(items.filter(currItem => currItem.id !== itemId));
    }
  }

  const handleClearAllItems = () => {
    console.log('blah')
    setItems([])
  }

  return (
    <div className="app">
      <Logo text="Far Away" />
      <Form addTravelItem={addTravelItem} />
      <PackingList
        items={items}
        handleCheckboxOnChange={handleCheckboxOnChange}
        handleDeleteItem={handleDeleteItem}
        onClickClearList={handleClearAllItems}
      />
      <Footer items={items}/>
    </div>
  );
}

export default App;
