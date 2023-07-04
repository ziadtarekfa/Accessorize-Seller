import '../styles/componentsStyles/OrdersTable.css';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';


const OrdersTable = () => {

    const NO_OF_ORDERS_PER_PAGE = 10;

    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [currentOrders, setCurrentOrders] = useState([]);
    const indexOfLastOrder = currentPageNumber * NO_OF_ORDERS_PER_PAGE;
    const indexOfFirstOrder = indexOfLastOrder - NO_OF_ORDERS_PER_PAGE;
    useEffect(() => {

        fetch('http://localhost:8000/seller/getOrders', { 'credentials': 'include' }).then((res) => {
            return res.json();
        }).then((data) => {
            setOrders(data);
            setCurrentOrders(data.splice(indexOfFirstOrder, indexOfLastOrder));
            setLoading(false);
        })


    }, [indexOfLastOrder, indexOfFirstOrder]);


    return (
        <div className='orders-table'>

            {
                loading ? <Loading />
                    :
                    <>
                        {
                            currentOrders.length > 0 ?
                                <>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Order Id</th>
                                                <th>Customer's Email</th>
                                                <th>Order Date</th>
                                                <th>Shipping Address</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {
                                                currentOrders.map((order) => {
                                                    return (
                                                        <tr key={order._id}>
                                                            <td >{order._id}</td>
                                                            <td >{order.userEmail}</td>
                                                            <td >{`${order.shippingAddress.country},${order.shippingAddress.state}`}</td>
                                                            <td >{order.date}</td>
                                                            <td >
                                                                <Link className='view-cell' to={order._id}>
                                                                    View</Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination totalOrders={orders} currentPageNumber={currentPageNumber} setCurrentPageNumber={setCurrentPageNumber} />
                                </>
                                :
                                <div className='empty_products' style={{ 'height': 'calc(100vh - 74.4px)' }} >No orders are currently made</div>
                        }

                    </>

            }
        </div>
    );
}

export default OrdersTable;