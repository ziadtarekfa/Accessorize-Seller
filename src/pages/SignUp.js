import cart from '../assets/images/cart.jpg';
import bags from '../assets/icons/bags.svg';
import "../styles/pagesStyles/SignUp.css";
const SignUp = () => {
    const signUp = (e) => {
        e.preventDefault();
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
                        <input required />
                    </label>
                    <label>Last name
                        <input required />
                    </label>
                    <label>Email
                        <input required type="email" />
                    </label>
                    <label>Phone number
                        <input required />
                    </label>
                    <label>Date of birth
                        <input required type="date" />
                    </label>
                    <label>Gender
                        <select className='gender'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </label>
                    <label>Password
                        <input required type="password" />
                    </label>
                    <label>Confirm Password
                        <input required type="password" />
                    </label>
                    <button className='default_button'>Create account</button>
                </form>
                <p className='already_have_an_account'>Already have an account? <a href='f'>Log in </a></p>
            </div>
        </main>
    );
}

export default SignUp;