// ... (import statements)

const OwnerLogin = () => {
    // ... (useState and other code)

    const handleLogin = async() => {
        try {
            const response = await api.post('/login/owner', { username, password });
            const token = response.data.token;
            // Store the token securely (e.g., in a cookie or localStorage)
            console.log('Owner login successful');
        } catch (error) {
            console.error('Owner login failed', error.response.data.error);
        }
    };

    // ... (return statement)
};

// ... (export statement)