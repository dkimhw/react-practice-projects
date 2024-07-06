import classes from './PackingList.module.css';
import { Item } from './Item';
import { Button } from './Button';

export const PackingList = (props) => {
  return (
    <div className={classes['packing-container']}>
      <div className={classes['items-container']}>
        { props?.items ? props.items.map((item, idx) =>
            <Item
              item={item}
              key={idx}
              handleCheckboxOnChange={props.handleCheckboxOnChange}
              handleDeleteItem={props.handleDeleteItem}
            />)
          : ""
        }
      </div>
      <div className={classes['btn-container']}>
        <Button buttonText={"Sort Travel List"} />
        <Button buttonText={"Clear List"} onClick={props.handleClearAllItems}/>
      </div>
    </div>
  )
}
