import glass from '../assets/images/glass.jpg';
import '../styles/componentsStyles/OrderItems.css';
const OrderItems = () => {
    return (

        <div className="order-items">
            <div className='order-item'>
                <img src={glass} alt='product_image' />
                <div className='name-container'>
                    <span className='name'>Glass Flex 4</span>
                    <span className='description'>Yellow | Stainless Steel</span>
                </div>
                <div className='price-container'>
                    <h4 className='price'>$20.00</h4>
                    <span className='quantity'>Qty: 1</span>
                </div>
            </div>
        </div>

    );
}

export default OrderItems;