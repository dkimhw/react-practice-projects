import { useState } from 'react';
import classes from './Accordion.module.css';

export const Accordion = ({ dataItem, itemNum }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes['item']}>
      <h3 className={classes['number']}>{itemNum}</h3>
      <div className={classes['content-box']}>
        <h3 className={classes['title']}>{dataItem.title}</h3>
        <p>{dataItem.text}</p>
      </div>
      <div>Close</div>
    </div>
  )
}
