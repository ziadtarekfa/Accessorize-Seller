import OrdersTable from "../components/OrdersTable";
import SideBar from '../components/SideBar';
import '../styles/pagesStyles/Orders.css';
const Orders = () => {
    return (
        <div style={{ "display": "flex" }}>
            <SideBar />
            <div className="orders">
                <h2>Orders</h2>
                <OrdersTable />
            </div>
        </div>

    );
}

export default Orders;