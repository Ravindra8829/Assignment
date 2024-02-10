// ... (import statements)

const CustomerLogin = () => {
    // ... (useState and other code)

    const handleLogin = async() => {
        try {
            const response = await api.post('/login/customer', { username, password });
            const token = response.data.token;
            // Store the token securely (e.g., in a cookie or localStorage)
            console.log('Customer login successful');
        } catch (error) {
            console.error('Customer login failed', error.response.data.error);
        }
    };

    // ... (return statement)
};

// ... (export statement)