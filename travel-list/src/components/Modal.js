import classes from './Modal.module.css';

export const Modal = ({ children }) => {
  return (
    <div className={classes['modal']}>
      <div className={classes['modal-content']}>
        {children}
      </div>
    </div>
  )
}
