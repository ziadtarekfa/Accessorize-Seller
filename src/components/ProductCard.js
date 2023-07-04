import '../styles/componentsStyles/ProductCard.css';
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product }) => {
    let navigate = useNavigate();

    return (
        <div className="product-card"
            onClick={() => {
                navigate(`/products/${product._id}`);
            }}>
            <img src={product.images[0]} alt='product_image' />
            <div className="product-card-text">
                <div>
                    <h6>{product.brand}</h6>
                    <h4>{product.name}</h4>
                </div>
                <div className='price-container'>
                    <span style={{ 'fontWeight': 'bold' }}>{`$${product.price}`}</span>
                </div>
            </div>


        </div>
    );
}

export default ProductCard;