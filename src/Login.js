import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return(
            <div className="login-container">
                <div className="login-item-a">
                    <h1>Explore Comics You won't see anywhere else</h1>
                    <p>Enter your personal details to start your journey with us.</p>
                </div>
                <div className="login-item-b">                   
                    <form>
                        <h1>Log In</h1>
                        <label htmlfor="email">Email</label>
                        <input type="text" name="email" required/><br></br>

                        <label htmlfor="password">Password</label>
                        <input type="password" name="password" required/>
                    </form>
                    <div>
                        <p>Don’t have an account? Sign Up</p>
                        <button>Log In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;