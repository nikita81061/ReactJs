import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const Product = () => {
    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, []);

    return (
        <div >
            <img src={product.thumbnail} style={{maxWidth: 200}} alt=""/>
            <p> {product.title}</p>
            <p>Опис: {product.description}</p>
            <p>Ціна: {product.price} грн</p>
            <p>Бренд: {product.brand}</p>
            <p>Категорія: <Link to={`/category/${product.category}/products`}>{product.category}</Link></p>
            {product.images?.map(image => <img key={image} src={image} style={{maxWidth: 200}} alt=""/>)}
        </div>
    );
};