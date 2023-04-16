import React, {useState} from "react";
import {Button} from "@mui/material";

export const MyCounter = (props) => {
    const {initial, min, max} = props.counter;
    const [count, setCount] = useState(initial || 0);

    function increaseCount() {
        setCount(count + 1);
    }

    function reduceCount() {
        setCount(count - 1);
    }

    function resetCount() {
        setCount(initial || 0);
    }

    return (
        <div>
            <p>Поточний рахунок: {count}</p>
            <Button variant="outlined" onClick={increaseCount} disabled={count === max}>+</Button>
            <Button variant="outlined" onClick={reduceCount} disabled={count === min}>-</Button>
            <Button variant="outlined" onClick={resetCount} disabled={count === (initial || 0)}>Reset</Button>
        </div>
    );
};