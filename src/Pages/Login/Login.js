import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setError, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.meassage)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    return (
        <div>
            <h1>Please LogIn</h1>
            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google SignIn</button>
        </div>
    );
};

export default Login;