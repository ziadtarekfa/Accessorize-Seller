import { useNavigate } from "react-router-dom";
import '../styles/componentsStyles/ProductCard.css';

const ProductCard = ({ product }) => {
    let navigate = useNavigate();

    return (
        <div className="product-card"
            onClick={() => {
                navigate(`/products/${product.id}`);
            }}>
            <img src={product.image} alt='product' />
            <div className="product-card-text">
                <div>
                    <h6>{product.brand}</h6>
                    <h4>{product.model}</h4>
                </div>
                <div className='price-container'>
                    <span style={{ 'fontWeight': 'bold', }}>{`$${product.price}`}</span>
                </div>
            </div>


        </div>
    );
}

export default ProductCard;