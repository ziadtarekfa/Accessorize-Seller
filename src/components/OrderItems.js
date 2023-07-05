import '../styles/componentsStyles/OrderItems.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';
const OrderItems = ({ order }) => {

    const [productItems, setProductItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const productData = [];
        const items = order.items;
        for (const item of items) {
            const response = await fetch(`http://localhost:8000/seller/getProductById/${item.productID}`,{'credentials':'include'});
            const data = await response.json();
            data.quantity = item.quantity;
            productData.push(data);
        }
        setProductItems(productData);
        setLoading(false);

    }
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className="order-items">
            {
                loading ? <Loading /> :
                    productItems.map((item) => {
                        return (
                            <div key={item._id} className='order-item'>
                                <img src={item.images[0]} alt='product_image' />
                                <div className='name-container'>
                                    <span className='name'>{item.name}</span>
                                    <span className='description'>{item.description}</span>
                                </div>
                                <div className='price-container'>
                                    <h4 className='price'>{`$${item.price}`}</h4>
                                    <span className='quantity'>{`Qty: ${item.quantity}`}</span>
                                </div>
                            </div>
                        );
                    })
            }
        </div>

    );
}

export default OrderItems;