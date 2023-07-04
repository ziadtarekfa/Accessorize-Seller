import "../styles/pagesStyles/SignIn.css";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import business_man_on_rocket from "../assets/images/businessman_on_rocket.png";
import { toast } from 'react-toastify';

const SignIn = () => {

    let navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const signIn = async (e) => {
        e.preventDefault();
        const seller = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        const response = await fetch('http://localhost:8000/seller/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(seller),
            credentials: "include"
        });

        const data = await response.json();
        if (!response.ok) {
            toast.error(data.error, {
                position: 'top-right'
            })
        }
        else {
            navigate('/');
        }

    }

    return (
        <main className="sign_in">
            <div className="intro_text">
                <h1>Sign In to <br /> Sell Your Accessories</h1>
                <p>If you don't have an <br />account you can <Link to='/sign-up'>Register here!</Link></p>
            </div>
            <img src={business_man_on_rocket} alt="business_man_on_rocket" />
            <form className="sign_in_container" onSubmit={signIn}>
                <input id="email_sign_in" type="email" placeholder="Enter Email" autoComplete="email" ref={emailRef} required></input>
                <input id="password_sign_in" type="password" placeholder="Password" autoComplete="password" ref={passwordRef} required></input>
                <button className="default_button">Sign In</button>
            </form>
        </main>

    );
}

export default SignIn;