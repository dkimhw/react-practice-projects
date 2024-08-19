import { Accordion } from "./Accordion"
import classes from './AccordionList.module.css'
import { useState } from 'react'

export const AccordionList = ({ data }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleOpenAccordion = (evt) => {
    let openAccordionIdx = Number(evt.target.value);
    setOpenItem(openAccordionIdx);
  }

  return (
    <div className={classes['accordion-list']}>
      { data ? data.map((item, idx) => {
        return <Accordion
                  dataItem={item}
                  itemNum={idx}
                  key={idx}
                  isOpenIdx={openItem}
                  handleOpenAccordion={handleOpenAccordion}/>
      }) : ""}
    </div>
  )
}
