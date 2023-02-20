import cart from '../assets/images/cart.jpg';
import bags from '../assets/icons/bags.svg';
import "../styles/pagesStyles/SignUp.css";
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const SignUp = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneNoRef = useRef();
    const dateOfBirthRef = useRef();
    const genderRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const today = new Date().toISOString().split('T')[0];


    const signUp = (e) => {
        e.preventDefault();
        const user = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phoneNo: phoneNoRef.current.value,
            dateOfBirth: dateOfBirthRef.current.value,
            gender: genderRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        }
        console.log(user);

        if (user.password !== user.confirmPassword) {
            confirmPasswordRef.current.setCustomValidity("Passwords don't match");
            return;
        }


    }
    return (
        <main className='sign_up'>
            <img className='cart_image' src={cart} alt="cart_image" />
            <div className='sign_up_container'>
                <div className='icon_container'>
                    <img className="bags_icon" src={bags} alt="bags_icon" />
                    <h3>Accessorize</h3>
                </div>
                <h2 className='create_account'>Create account</h2>
                <p>Start selling your accessories</p>

                <form className='sign_up_form' onSubmit={signUp}>
                    <label>First Name
                        <input required ref={firstNameRef} />
                    </label>
                    <label>Last name
                        <input required ref={lastNameRef} />
                    </label>
                    <label>Email
                        <input required type="email" ref={emailRef} />
                    </label>
                    <label>Phone number
                        <input required ref={phoneNoRef} />
                    </label>
                    <label>Date of birth
                        <input required type="date" max={today} ref={dateOfBirthRef} />
                    </label>
                    <label>Gender
                        <select className='gender' ref={genderRef} >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </label>
                    <label>Password
                        <input required type="password" ref={passwordRef} />
                    </label>
                    <label>Confirm Password
                        <input required type="password" ref={confirmPasswordRef} />
                    </label>
                    <button className='default_button'>Create account</button>
                </form>
                <p className='already_have_an_account'>
                    Already have an account?
                    <Link to='/sign-in'> Log in</Link>
                </p>
            </div>
        </main>
    );
}

export default SignUp;