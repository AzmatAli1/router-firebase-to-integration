import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin:'20px'}}>
            <button>Google Sign In</button>
            </div>
           
            <form>
                <input type="Email" placeholder='Your Email' />
                <br/>
                <input type="password" name="" id="" placeholder='Password'/><br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;