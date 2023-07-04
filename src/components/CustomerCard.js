import '../styles/componentsStyles/CustomerCard.css';
import avatar from '../assets/images/profile-picture.jpg';
import Loading from '../components/Loading';
import { CiMail } from 'react-icons/ci';
import { HiOutlinePhone } from 'react-icons/hi';
import { useEffect, useState } from 'react';
const CustomerCard = ({ order }) => {

    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8000/seller/getUserByEmail/${order.userEmail}`).then((res) => {
            return res.json();
        }).then((data) => {
            setCustomer(data);
            setLoading(false);
        });
    }, [order.userEmail])
    return (
        <div className="customer-info">
            {
                loading ? <Loading /> :
                    <>
                        <span>Customer</span>
                        <div className='cx-name'>
                            <img src={avatar} alt='profile-pic' />
                            <h5 style={{ 'marginLeft': 10, 'fontSize': 20 }}>{customer.firstName}</h5>
                        </div>
                        <hr style={{ marginTop: 10 }} />
                        <div className='cx-contact-info'>
                            <h4>Contact info</h4>
                            <div className='email-container'>
                                <CiMail />
                                <span>{customer.email}</span>
                            </div>
                            <div className='phone-container'>
                                <HiOutlinePhone />
                                <span>{customer.phoneNumber}</span>
                            </div>

                        </div>
                        <hr />
                        <div className='cx-shipping-address'>
                            <h4>Shipping Address</h4>
                            <p>
                                {order.shippingAddress.country}<br />  {order.shippingAddress.state}<br />  {order.shippingAddress.city}<br />  {order.shippingAddress.street}<br />
                            </p>
                        </div>
                    </>
            }
        </div>
    );
}

export default CustomerCard;