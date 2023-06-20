import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(budget);

  const handleInputChange = (event) => {
    if(inputValue > 20000) {
        alert("The value cannot exceed maximun budget £20000");
        setInputValue("");
        return;}
    else {
        setInputValue(event.target.value);}
  };

  return (
    <div className='alert alert-secondary'>
          <input
            type='number'
            value={inputValue}
            style={{size: 10}}
            onChange={handleInputChange}
          />
          <span>Budget: £{budget}</span>
    </div>
  );
};

export default Budget;

