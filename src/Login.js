import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //fancy Firebase things
    }

    const register = e => {
        e.preventDefault();

        //fancy Firebase things
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon account</button>

            </div>

        </div>
    )
}

export default Login