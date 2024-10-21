import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      {isOpen && <div className="dropdown-answer">{answer}</div>}
    </div>
  );
};

export default Dropdown;