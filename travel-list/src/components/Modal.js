import classes from './Modal.module.css';

export const Modal = ({ children }) => {
  return (
    <div className={classes['modal']}>
      { children }
    </div>
  )
}
