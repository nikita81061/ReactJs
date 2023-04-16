import {Button, TableCell, TableRow} from "@mui/material";
import {useState} from "react";

export const CustomTableRow = (props) => {
    const {name, min, max, price} = props.product;
    const [count, setCount] = useState(min);

    function increaseCount() {
        setCount(count + 1);
        props.setTotals(
            {
                quantity: props.totals.quantity + 1,
                totalSum: props.totals.totalSum + price
            }
        );
    }

    function reduceCount() {
        setCount(count - 1);
        props.setTotals(
            {
                quantity: props.totals.quantity - 1,
                totalSum: props.totals.totalSum - price
            }
        );
    }

    return <TableRow>
        <TableCell sx={{border: "1px solid gray"}} component="th" scope="row" align="center">{name}</TableCell>
        <TableCell sx={{border: "1px solid gray"}} align="center">{price}</TableCell>
        <TableCell sx={{border: "1px solid gray"}} align="center">
            <Button variant="outlined" onClick={reduceCount} disabled={count === min}>-</Button>
            {count}
            <Button variant="outlined" onClick={increaseCount} disabled={count === max}>+</Button></TableCell>
        <TableCell sx={{border: "1px solid gray"}} align="center">{count * price}</TableCell>
    </TableRow>
}