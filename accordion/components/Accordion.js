import { useState } from 'react';

export const Accordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
