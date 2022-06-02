import React, { useState } from 'react';
import '../App.css';

// https://react.vlpt.us/basic/07-useState.html 참고

function Counter() {

    const [number, setNumber] = useState(3);
    const Plus = () => {
        setNumber(number + 1);
    }
    const Minus = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <h1 className='titleNamekim'>[ 1번 ] </h1>
            <h1>{number}</h1>
            <button className='numberBtn' onClick={Minus}>-1</button>
            <button className='numberBtn' onClick={Plus}>+1</button>
        </div>
    );
};

export default Counter;
