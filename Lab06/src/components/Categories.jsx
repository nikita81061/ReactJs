import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Grid} from "@mui/material";

export const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);

    return (

        <Grid container spacing={2} style={{padding: '10px'}}>
            {categories.map(elem =>
                <Grid item xs={2} key={elem}>
                    <Link to={`/category/${elem}/products`}>
                        <Button variant="contained" color="success">{elem}</Button>
                    </Link>
                </Grid>)}
        </Grid>
    );
};