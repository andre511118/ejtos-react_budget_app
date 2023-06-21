import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-secondary' style={{ background: '#CCFFCC',display: 'flex', flexDirection: 'column' }}> 
            Currency (£ Pound)
            <select 
                name="Currency" 
                id="Currency" 
                onChange={event=>changeCurrency(event.target.value)}
                style={{ background: '#CCFFCC' }}>   
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>	
        </div>
    );
};
export default Currency;