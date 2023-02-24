import '../styles/componentsStyles/CustomerCard.css';
import avatar from '../assets/images/profile-picture.jpg';
import { CiMail } from 'react-icons/ci';
import { HiOutlinePhone } from 'react-icons/hi';
const CustomerCard = () => {
    return (
        <div className="customer-info">
            <span>Customer</span>
            <div className='cx-name'>
                <img src={avatar} alt='profile-pic' />
                <h5 style={{ 'marginLeft': 10, 'fontSize': 20 }}>Anita Cruz</h5>
            </div>
            <hr style={{ marginTop: 10 }} />
            <div className='cx-contact-info'>
                <h4>Contact info</h4>
                <div className='email-container'>
                    <CiMail />
                    <span>anitacruz123@gmail.com</span>
                </div>
                <div className='phone-container'>
                    <HiOutlinePhone />
                    <span>+20 106 632 4579</span>
                </div>

            </div>
            <hr />
            <div className='cx-shipping-address'>
                <h4>Shipping Address</h4>
                <p>
                    Cairo<br />New Cairo<br />First Settlement<br />AboHoul 2<br />Naguib Mahfooz St<br />villa 121
                </p>
            </div>
        </div>
    );
}

export default CustomerCard;