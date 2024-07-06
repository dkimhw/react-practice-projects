
import classes from './Logo.module.css';

export const Logo = (props) => {
  return (
    <div className={classes['logo']}>
      {props.text}
    </div>
  )
}
