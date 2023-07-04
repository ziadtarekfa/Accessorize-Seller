import "../styles/pagesStyles/SignUp.css";
import cart from '../assets/images/cart.jpg';
import bags from '../assets/icons/bags.svg';

import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { toast } from 'react-toastify';
const SignUp = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const birthDateRef = useRef();
    const genderRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const countryRef = useRef();
    const stateRef = useRef();
    const cityRef = useRef();
    const streetRef = useRef();
    const floorNumRef = useRef();
    const aptNumRef = useRef();
    const zipCodeRef = useRef();

    const today = new Date().toISOString().split('T')[0];
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            toast.error("Passwords don't match !", {
                position: 'top-right'
            });
        }
        else {
            const newSeller = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                phoneNumber: phoneNumberRef.current.value,
                birthDate: birthDateRef.current.value,
                gender: genderRef.current.value,
                password: passwordRef.current.value,
                address: {
                    country: countryRef.current.value,
                    state: stateRef.current.value,
                    city: cityRef.current.value,
                    street: streetRef.current.value,
                    floorNum: floorNumRef.current.value,
                    aptNum: aptNumRef.current.value,
                    zipCode: zipCodeRef.current.value
                }
            };


            const response = await fetch('http://localhost:8000/seller/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSeller),
                credentials: "include"
            });
            const data = await response.json();
            if (!response.ok) {
                toast.error(data.error, {
                    position: 'top-right'
                });
            }
            else {
                toast.success("Account Created Successfully ! Kindly Sign In ", {
                    position: 'top-right'
                });
                navigate('/sign-in');
            }
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
                    <h3>Personal Information</h3>
                    <div className="grid">
                        <label>First Name
                            <input required ref={firstNameRef} />
                        </label>
                        <label>Last name
                            <input required ref={lastNameRef} />
                        </label>
                        <label>Email
                            <input required type="email" autoComplete="email" ref={emailRef} />
                        </label>
                        <label>Phone number
                            <input required ref={phoneNumberRef} />
                        </label>
                        <label>Date of birth
                            <input required type="date" max={today} ref={birthDateRef} />
                        </label>
                        <label>Gender
                            <select className='gender' ref={genderRef} >
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </label>
                        <label>Password
                            <input required type="password" autoComplete='new-password' ref={passwordRef} minLength={8} />
                        </label>
                        <label>Confirm Password
                            <input required type="password" autoComplete='new-password' ref={confirmPasswordRef} minLength={8} />
                        </label>
                    </div>
                    <h3>Address</h3>
                    <div className="grid">
                        <label>Country
                            <input required ref={countryRef} />
                        </label>
                        <label>State
                            <input required ref={stateRef} />
                        </label>
                        <label>City
                            <input required ref={cityRef} />
                        </label>
                        <label>Street
                            <input required ref={streetRef} />
                        </label>
                        <label>Floor Number
                            <input required type="number" min={1} ref={floorNumRef} />
                        </label>
                        <label>Apartment Number
                            <input required type="number" min={1} ref={aptNumRef} />
                        </label>
                        <label>Zip Code
                            <input required type="number" ref={zipCodeRef} />
                        </label>
                    </div>
                    <button className='default_button'>Create account</button>
                </form>
                <p className='already_have_an_account'>
                    Already have an account?
                    <Link to='/sign-in'> Sign in</Link>
                </p>
            </div>
        </main>
    );
}

export default SignUp;