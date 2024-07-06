import classes from './Item.module.css';

export const Item = (props) => {
  return (
    <div className={classes['item']}>
      <input
        type="checkbox"
        id={`${props.item?.id}`}
        name={`${props.item?.id}`}
        checked={props.item?.isChecked }
        onChange={(evt) => props.handleCheckboxOnChange(evt, props.item)}
      />
      <label htmlFor={`${props.item?.id}`}>{`${props.item?.itemQty} ${props.item?.itemText}`}</label>
      <button
        onClick={() => props.handleDeleteItem(props.item?.id)}
        alt="Delete travel checklist item"
        className={classes['delete-btn']}
      >
        ❌
      </button>
    </div>
  );
}
