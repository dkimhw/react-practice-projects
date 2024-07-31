import classes from './PackingList.module.css';
import { Item } from './Item';
import { Button } from './Button';
import { DropdownInput } from './DropdownInput';
import { useState } from 'react';
import { Modal } from './Modal';

const sortOptions = ['By Order of Entry', 'By Packed', 'By Item Name'];
const options = sortOptions.map((val, idx) => <option value={val} key={idx}>{val}</option>);

export const PackingList = ({
  items,
  handleCheckboxOnChange,
  handleDeleteItem,
  handleClearAllItems,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortedItems, setSortedItems] = useState(items);

  let mappedSortedItems = sortedItems ? sortedItems.map((item, idx) =>
    <Item
      item={item}
      key={idx}
      handleCheckboxOnChange={handleCheckboxOnChange}
      handleDeleteItem={handleDeleteItem}
    />)
  : "";

  const handlSortTypeChange = async (e) => {
    let evtVal = e.target.value;

    let newArr = [...items];

    if (evtVal === 'By Order of Entry') {
      newArr.sort((a, b) => {
        return a.id - b.id;
      });
    } else if (evtVal === 'By Packed') {
      console.log("hello")
      newArr.sort((a, b) => {
        return a.isChecked - b.isChecked;
      });
    } else if (evtVal === 'By Item Name') {
      newArr.sort((a, b) => {
        if (a.itemText < b.itemText) return -1;
        if (a.itemText > b.itemText) return 1;
        return 0;
      });
    }
    setSortedItems(newArr)
  }

  const handleClearListClick = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handlClearTravelList = () => {
    setIsModalOpen(!isModalOpen);
    handleClearAllItems();
  }

  return (
    <div className={classes['packing-container']}>
      { isModalOpen ?
        <Modal>
          <p>Do you really want to clear all of items in the travel list?</p>
          <div className={classes['user-input-container']}>
            <Button buttonText={"Continue to Remove All Items"} onClick={handlClearTravelList}/>
          </div>
        </Modal> : ""
      }
      <div className={classes['items-container']}>
        {mappedSortedItems}
      </div>
      <div className={classes['user-input-container']}>
        <DropdownInput name="quantity" options={options} onChange={handlSortTypeChange}/>
        <Button buttonText={"Clear List"} onClick={handleClearListClick}/>
      </div>
    </div>
  )
}
