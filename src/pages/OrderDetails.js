import '../styles/pagesStyles/OrderDetails.css';
import CustomerCard from '../components/CustomerCard';
import OrderItems from '../components/OrderItems';

const OrderDetails = () => {
    return (
        <main className='order-details'>
            <h3>Order ID: <span>AZW12SA</span></h3>
            <p>Order Date:
                <span> Feb 16,2022</span>
            </p>
            <div style={{ 'display': 'flex' }}>
                <OrderItems />
                <CustomerCard />
            </div>
            <button className='default_button'>Mark order completed</button>
        </main>

    );
}
export default OrderDetails;