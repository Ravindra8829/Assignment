import { useState } from 'react';
import api from '../../utils/api';

const BuyProduct = () => {
    const [productId, setProductId] = useState('');

    const handleBuyProduct = async() => {
        try {
            // Validation checks can be added here

            // Send a request to the server to buy the product
            await api.post('/buy-product', { productId });
            console.log('Product purchased successfully');

            // Clear the form after buying the product
            setProductId('');
        } catch (error) {
            console.error('Error purchasing product', error.response.data.error);
        }
    };

    return ( < div >
        <
        h1 > Buy Product < /h1>  <
        div >
        <
        label > Product ID: < /label>  <
        input type = "text"
        value = { productId }
        onChange = {
            (e) => setProductId(e.target.value)
        }
        /> < /
        div > <
        button onClick = { handleBuyProduct } > Buy Product < /button>  < /
        div >
    );
};

export default BuyProduct;