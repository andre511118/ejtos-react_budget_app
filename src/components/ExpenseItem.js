import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const greenCircleButtonStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'green',
        color: 'white',
        fontSize: '1.2em',
        border: 'none',
        cursor: 'pointer',
      };

      const redCircleButtonStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '1.2em',
        border: 'none',
        cursor: 'pointer',
      };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button 
        style={greenCircleButtonStyle} 
        onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button 
        style={redCircleButtonStyle} 
        onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
