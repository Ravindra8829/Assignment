import { useState } from 'react';
import api from '../../utils/api';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = async() => {
        try {
            // Validation checks can be added here

            // Send a request to the server to add the product
            await api.post('/products', { name, category, price });
            console.log('Product added successfully');

            // Clear the form after adding the product
            setName('');
            setCategory('');
            setPrice('');
        } catch (error) {
            console.error('Error adding product', error.response.data.error);
        }
    };

    return ( < div >
        <
        h1 > Add Product < /h1> <
        div >
        <
        label > Name: < /label> <
        input type = "text"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        /> < /
        div > <
        div >
        <
        label > Category: < /label> <
        input type = "text"
        value = { category }
        onChange = {
            (e) => setCategory(e.target.value)
        }
        /> < /
        div > <
        div >
        <
        label > Price: < /label> <
        input type = "text"
        value = { price }
        onChange = {
            (e) => setPrice(e.target.value)
        }
        /> < /
        div > <
        button onClick = { handleAddProduct } > Add Product < /button> < /
        div >
    );
};

export default AddProduct;