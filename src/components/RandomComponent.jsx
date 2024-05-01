import React, { useState } from 'react';

export const RandomComp = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>CONTADOR ALEATORIO</h2>
            <p>Contador: {count}</p>
            <button onClick={incrementCount}>Incrementar</button>
            <button onClick={decrementCount}>Decrementar</button>
            <button onClick={resetCount}>Resetear</button>
        </div>
    );
};
