import '../styles/pagesStyles/ProductDetails.css'
import SideBar from '../components/SideBar';
import img from '../assets/images/glass.jpg';
const ProductDetails = () => {
    return (
        <main className='home'>
            <SideBar />
            <div className="product-details">
                <div>
                    <img src={img} alt='productImage' />
                </div>
                <div className='product-details-content'>

                    <h2>Rayban</h2>
                    <h1>Rayban212G</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div>
                        <span>Price: </span>
                        <p>212 LE</p>
                    </div>
                    <div>
                        <span>Category: </span>
                        <p> Glasses</p>
                    </div>
                    <div>
                        <span>Country of Origin: </span>
                        <p> Egypt</p>
                    </div>
                    <button className='delete-product'>Delete Product</button>


                </div>
            </div >
        </main>
    );
}

export default ProductDetails;