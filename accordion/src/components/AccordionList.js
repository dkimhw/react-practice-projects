import { Accordion } from "./Accordion"
import classes from './AccordionList.module.css'

export const AccordionList = ({ data }) => {
  return (
    <div className={classes['accordion-list']}>
      { data ? data.map((item, idx) => {
        return <Accordion dataItem={item} itemNum={idx} key={idx} />
      }) : ""}
    </div>
  )
}
