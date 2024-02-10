import { useState, useEffect } from 'react';
import api from '../../utils/api';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        // Fetch products based on the selected category
        const fetchProducts = async() => {
            try {
                const response = await api.get(`/products?category=${selectedCategory}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return ( <
        div >
        <
        h1 > Products < /h1> <
        div >
        <
        label > Select Category: < /label> <
        select value = { selectedCategory }
        onChange = {
            (e) => handleCategoryChange(e.target.value) } >
        <
        option value = "all" > All < /option> <
        option value = "electronics" > Electronics < /option> <
        option value = "clothing" > Clothing < /option> { /* Add more categories as needed */ } <
        /select> <
        /div> <
        ul > {
            products.map((product) => ( <
                li key = { product._id } >
                <
                h3 > { product.name } < /h3> <
                p > Category: { product.category } < /p> <
                p > Price: $ { product.price } < /p> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default Products;