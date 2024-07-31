import classes from './Footer.module.css';

export const Footer = (props) => {
  const packedItems = props.items?.filter(item => item.isChecked).length;
  const numOfItems = props.items?.length;
  const percPacked = Math.round((packedItems / numOfItems) * 100);

  return (
    <div className={classes['footer']}>
      {`You have ${numOfItems} on your list and you already packed ${packedItems} (${percPacked ? percPacked : 0}%)`}
    </div>
  )
}
