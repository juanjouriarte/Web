import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Calculator.css'
import { useState } from 'react'

const SERVER_URL = "http://localhost:80"


function Calculator() {
    const [displayValue, setDisplayValue] = useState('');
    const [lastOperation, setLastOperation] = useState('');
    
    const handleButtonClick = (value) => {
        if (value === '+' || value === '*') {
        if (lastOperation !== '') {
            calculateResult();
        }
        setLastOperation(value);
        } else if (value === '-' || value === '/') {
        if (lastOperation === '-' || lastOperation === '/') {
            calculateResult();
        }
        setLastOperation(value);
        }
    
        setDisplayValue(displayValue + value);
    };
    
    const calculateResult = async () => {
        try {
          const [number1, operator, number2] = displayValue.split(/([\+\-\*\/])/).map(item => item.trim())
            const numbers = [number1, number2];
            let operation = '';
            if (operator === '+') {
                operation = 'suma';
            } else if (operator === '-') {
                operation = 'resta';
            } else if (operator === '*') {
                operation = 'multiplicacion';
            } else if (operator === '/') {
                operation = 'division';
            }
            console.log(operation)
            console.log(numbers);
          let url = '';
          let requestBody = {};
    
          if (operation === 'suma' || operation === 'multiplicacion') {
            url = `${SERVER_URL}/${operation}/${numbers.join('/')}`;
          } else if (operation === 'resta' || operation === 'division') {
            url = `${SERVER_URL}/${operation}`;
            requestBody = {
              numbers: numbers.map(Number),
            };
          }
    
          const response = await fetch(url, {
            method: operation === 'suma' || operation === 'multiplicacion' ? 'GET' : 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: operation === 'suma' || operation === 'multiplicacion' ? undefined : JSON.stringify(requestBody),
          });

          if (!response.ok) {
            setDisplayValue('');
            setLastOperation('');
            throw new Error('Error calculating result');
          }
    
          const result = await response.json();
            console.log("El resultado es:", result.result);
          setDisplayValue(result.result);
          setLastOperation('');
        } catch (error) {
          console.log(error);
        }
      };
    
    const clearDisplay = () => {
        setDisplayValue('');
        setLastOperation('');
    };
  
    return (
      <div>
        <input type="text" value={displayValue} readOnly />
        <div className='rows'>
            <div className='row'>
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button className='operation-button' onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div className='row'>
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button className='operation-button' onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div className='row'>
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button className='operation-button' onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div className='row'>
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button className='operation-button' onClick={() => handleButtonClick('+')}>+</button>
            <button className='operation-button-enter' onClick={calculateResult}>=</button>
            <button className='operation-button-clear' onClick={clearDisplay}>Clear</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Calculator;