import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState, useRef } from 'react';
import Pagination from './Pagination';
import '../styles/componentsStyles/OrdersTable.css';
import { Link } from 'react-router-dom';


const OrdersTable = () => {

    const NO_OF_ORDERS_PER_PAGE = 10;

    const [orders, setOrders] = useState([
        {
            id: 'AW12SA',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S2',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S3',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S4',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S5',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S6',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S7',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S8',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S9',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S1',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'BW12S8',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'BW12S9',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        // cccccccccccccccccccccccccccccccc
        {
            id: 'AW12SA',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S2',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S3',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S4',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S5',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S6',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S7',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S8',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S9',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'AW12S1',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'BW12S8',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        },
        {
            id: 'BW12S9',
            email: "ziadtarekfa@gmail.com",
            productsId: 'TWA1, PWD2,LGE1',
            date: '2021-12-1',
            shippingAddress: "New Cairo,Narges 6",
            total: 201
        }

    ]);

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [currentOrders, setCurrentOrders] = useState([]);

    useEffect(() => {
        const indexOfLastOrder = currentPageNumber * NO_OF_ORDERS_PER_PAGE;
        const indexOfFirstOrder = indexOfLastOrder - NO_OF_ORDERS_PER_PAGE;
        setCurrentOrders(orders.slice(indexOfFirstOrder, indexOfLastOrder));

    }, [currentPageNumber, orders]);

    console.log(currentOrders);
    // const orderInputRef = useRef();

    // const searchOrder = () => {
    //     const orderId = emailInputRef.current.value;

    //     const orderFound = orders.filter((orderId) => {
    //         return orderFound.orderId === orderId;
    //     });
    //     setCurrentUsers(userFound);
    // }

    return (
        <div className='orders-table'>
            <div className='search-container'>
                <input placeholder='Search using order id'
                    // onChange={(e) => {
                    //     if (e.target.value === "") {
                    //         // setCurrentUsers(totalUsers);
                    //         const indexOfLastUser = currentPageNumber * NO_OF_USERS_PER_PAGE;
                    //         const indexOfFirstUser = indexOfLastUser - NO_OF_USERS_PER_PAGE;
                    //         setCurrentUsers(totalUsers.slice(indexOfFirstUser, indexOfLastUser));
                    //     }
                    // }} ref={emailInputRef} 
                    type='text'></input>
                <AiOutlineSearch fill='#757575' />
                <button
                // onClick={() => searchUser()}
                >Search</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Customer's Email</th>
                        <th>Product Ids</th>
                        <th>Order Date</th>
                        <th>Shipping Address</th>
                        <th>Total Price</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        currentOrders.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td >{order.id}</td>
                                    <td >{order.email}</td>
                                    <td >{order.productsId}</td>
                                    <td >{order.date}</td>
                                    <td >{order.shippingAddress}</td>
                                    <td >{order.total}</td>
                                    <Link to={order.id} style={{ 'textDecoration': 'none' }}>
                                        <td className='view-cell'>{'View'}</td>
                                    </Link>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <Pagination totalOrders={orders} currentPageNumber={currentPageNumber} setCurrentPageNumber={setCurrentPageNumber} />


        </div>
    );
}

export default OrdersTable;