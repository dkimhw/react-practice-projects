import { useState } from 'react';
import classes from './Accordion.module.css';

export const Accordion = ({ dataItem, itemNum }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${classes['item']} ${isOpen ? classes['open'] : ''}`}>
      <h3 className={classes['number']}>{itemNum}</h3>
      <div>
        <h3 className={classes['title']}>{dataItem.title}</h3>
        { isOpen ? <p className={classes['content-box']}>{dataItem.text}</p> : ''}
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>X</button>
    </div>
  )
}
