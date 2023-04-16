import React, {useEffect, useState} from 'react';
import styles from './index.module.css';
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {TextField} from "@mui/material";

export const ProductsGrid = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    let query = searchParams.get('query');
    const navigate = useNavigate();
    const [stateCategory, setStateCategory] = useState();

    useEffect(() => {
        if (query) {
            fetch(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => response.json())
                .then((data) => setProducts(data.products));
        } else {
            setStateCategory(category)
            fetch(`https://dummyjson.com/products/category/${category}`)
                .then((response) => response.json())
                .then((data) => setProducts(data.products));
        }
    }, [query]);

    const handleChange = event => {
        setSearchParams({query: event.target.value});
        if (event.target.value.length === 0)
            navigate(`/category/${stateCategory}/products`)
    };

    return (
        <div>
            <TextField
                b
                variant="filled"
                fullWidth
                label="Search"
                onFocus={() => navigate('/products/search')}
                onChange={handleChange}
            />
            <div className={styles.row}>
                {products.map(product =>
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div className={styles.column}>
                            <div className={styles.card}>
                                <img src={product.thumbnail} className={styles.images} alt=""/>
                                <p>{product.price} грн</p>
                                <p>{product.title}</p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};