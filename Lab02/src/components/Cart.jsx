import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {CustomTableRow} from "./CustomTableRow";
import {useState} from "react";

export const Cart = (props) => {
    const {products} = props;

    function getInitQuantity(products) {
        let totalQuantity = 0;

        products.forEach((product) => {
            totalQuantity += product.min;
        });

        return totalQuantity;
    }

    function getInitTotalSum(products) {
        let totalSum = 0;

        products.forEach((product) => {
            totalSum += product.min * product.price;
        });

        return totalSum;
    }

    const [totals, setTotals] = useState({
        quantity: getInitQuantity(products),
        totalSum: getInitTotalSum(products)
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow style={{backgroundColor: "#c3e6cb"}}>
                        <TableCell sx={{border: "1px solid gray"}} align="center"><b>Name</b></TableCell>
                        <TableCell sx={{border: "1px solid gray"}} align="center"><b>Price</b></TableCell>
                        <TableCell sx={{border: "1px solid gray"}} align="center"><b>Quantity</b></TableCell>
                        <TableCell sx={{border: "1px solid gray"}} align="center"><b>Total</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <CustomTableRow key={product.id} product={product} totals={totals} setTotals={setTotals}/>))}
                    <TableRow style={{backgroundColor: "#b8daff"}}>
                        <TableCell sx={{border: "1px solid gray"}} align="center"
                                   colSpan={2}><b>Totals</b></TableCell>
                        <TableCell sx={{border: "1px solid gray"}}
                                   align="center"><b>{totals.quantity}</b></TableCell>
                        <TableCell sx={{border: "1px solid gray"}}
                                   align="center"><b>{totals.totalSum}</b></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}