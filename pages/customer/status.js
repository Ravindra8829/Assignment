import { useState } from 'react';
import api from '../../utils/api';

const ProductStatus = () => {
    const [orderId, setOrderId] = useState('');

    const handleCheckStatus = async() => {
        try {
            // Validation checks can be added here

            // Send a request to the server to check the status of the order
            const response = await api.get(`/order-status/${orderId}`);

            // Display the order status
            console.log('Order Status:', response.data.status);
        } catch (error) {
            console.error('Error checking order status', error.response.data.error);
        }
    };

    return ( <
        div >
        <
        h1 > Check Order Status < /h1> <
        div >
        <
        label > Order ID: < /label> <
        input type = "text"
        value = { orderId }
        onChange = {
            (e) => setOrderId(e.target.value) }
        /> <
        /div> <
        button onClick = { handleCheckStatus } > Check Status < /button> <
        /div>
    );
};

export default ProductStatus;