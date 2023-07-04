import '../styles/pagesStyles/OrderDetails.css';
import CustomerCard from '../components/CustomerCard';
import OrderItems from '../components/OrderItems';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

const OrderDetails = () => {

    const orderId = window.location.pathname.substring(8);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/seller/getOrderById/${orderId}`, {
            'credentials': 'include',
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setOrder(data);
            setLoading(false);
        })
    }, [orderId]);
    return (
        <main className='order-details'>
            {
                loading ? <Loading /> :
                    <>
                        <h3>Order ID: <span>{orderId}</span></h3>
                        <p>Order Date:
                            <span>{order.date}</span>
                        </p>
                        <div style={{ 'display': 'flex' }}>
                            <OrderItems order={order} />
                            <CustomerCard order={order} />
                        </div>
                    </>
            }
        </main>

    );
}
export default OrderDetails;