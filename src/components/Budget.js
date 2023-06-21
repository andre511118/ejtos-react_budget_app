import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
}, 0);

  const handleInputChange = (event) => {
    if(inputValue > 20000) {
        alert("The value cannot exceed maximun budget £20000");
        setInputValue("");
        return;}
    else if(inputValue < totalExpenses) {
            alert("The value cannot reduce the budget lower than spending");
            setInputValue("");
            return;}
    else {
        setInputValue(event.target.value);}
  };

  return (
    <div className='alert alert-secondary'>
          <span>Budget: {currency}</span>
          <input
            type='number'
            value={inputValue}
            style={{size: 10}}
            onChange={handleInputChange}
          />
          
    </div>
  );
};

export default Budget;

