
// TODO 1. User can control the # of characters shown initially
// TODO 2. User can control whether by default to hide or not hide the text
// TODO 3. User can click a button to hide / show text

import { useState } from 'react'

export const TextExpander = ({ text, charsShown = 100, defaultShow = false}) => {
  const [show, setShow] = useState(defaultShow);
  const shownLessText = text.slice(0, charsShown).concat('...')

  const handleShowMoreLess = () => {
    setShow(!show);
  }

  return (
    <div>
      <p>{show ? text : shownLessText}</p>
      <button onClick={handleShowMoreLess}>{show ? "Show less" : "Show more"}</button>
    </div>
  )
}
