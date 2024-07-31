import classes from './PackingList.module.css';
import { Item } from './Item';
import { Button } from './Button';
import { DropdownInput } from './DropdownInput';
import { useState, useEffect } from 'react';
import { Modal } from './Modal';

const sortOptions = ['By Order of Entry', 'By Packed', 'By Item Name']
const options = sortOptions.map((val, idx) => <option value={val} key={idx}>{val}</option>);

export const PackingList = ({
  items,
  handleCheckboxOnChange,
  handleDeleteItem,
  handleClearAllItems,
}) => {
  const [sortType, setSortType] = useState(sortOptions[0]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  let sortedItems = items;

  useEffect(() => {
    if (sortType === 'By Order of Entry') {
      sortedItems.sort((a, b) => {
        return a.id - b.id;
      });
    } else if (sortType === 'By Packed') {
      sortedItems.sort((a, b) => {
        return a.isChecked - b.isChecked;
      });
    } else if (sortType === 'By Item Name') {
      sortedItems.sort((a, b) => {
        if (a.itemText < b.itemText) return -1;
        if (a.itemText > b.itemText) return 1;
        return 0;
      });
    }

  }, [sortType, sortedItems]);

  return (
    <div className={classes['packing-container']}>
      <div className={classes['items-container']}>
        { items ? items.map((item, idx) =>
            <Item
              item={item}
              key={idx}
              handleCheckboxOnChange={handleCheckboxOnChange}
              handleDeleteItem={handleDeleteItem}
            />)
          : ""
        }
      </div>
      <div className={classes['user-input-container']}>
        <DropdownInput name="quantity" options={options} onChange={(e) => setSortType(e.target.value)}/>
        <Button buttonText={"Clear List"} onClick={handleClearAllItems}/>
      </div>
    </div>
  )
}
