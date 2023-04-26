import '../styles/pagesStyles/ProductDetails.css'
import SideBar from '../components/SideBar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:8000/seller/getProduct/${id}`).then((res) => {
            return res.json();
        }).then((data) => {
            setProduct(data);
        })
    }, [id]);

    const saveChanges = () => {

    }

    return (

        <>
            {product &&
                <main className='home' >
                    <SideBar />
                    <form className='profile_form'>
                        <div className='profile_image_container' >
                            <h3>Edit Product Details</h3>
                            <img src={product.images[0]} alt='product_pic' />
                        </div>
                        <div className='flex_box_column'>
                            <label>Edit Model</label>
                            <input type="file" />
                        </div>
                        <div className='flex_box_row'>
                            <div className='flex_box_column'>
                                <label>Name</label>
                                <input defaultValue={product.name} type="text" required onChange={(e) => {
                                    product.name = e.target.value;
                                }} />
                            </div>
                            <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                                <label>Category</label>
                                <input defaultValue={product.category} type="text" required onChange={(e) => {
                                    product.category = e.target.value;
                                }} />
                            </div>
                        </div>
                        <div className='flex_box_column'>
                            <label>Origin</label>
                            <input defaultValue={product.origin} type="text" required onChange={(e) => {
                                product.origin = e.target.value;
                            }} />
                        </div>
                        <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                            <label>Color</label>
                            <input defaultValue={product.color} type="text" required onChange={(e) => {
                                product.color = e.target.value;
                            }} />
                        </div>
                        <div className='flex_box_column'>
                            <label>Stock</label>
                            <input defaultValue={product.stock} type="text" required onChange={(e) => {
                                product.stock = e.target.value;
                            }} />
                        </div>
                        <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                            <label>Price</label>
                            <input defaultValue={product.price} type="text" required onChange={(e) => {
                                product.price = e.target.value;
                            }} />
                        </div>
                        <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                            <label>Brand</label>
                            <input defaultValue={product.brand} type="text" required onChange={(e) => {
                                product.brand = e.target.value;
                            }} />
                        </div>

                        <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                            <label>Description</label>
                            <textarea defaultValue={product.description} type="text" required onChange={(e) => {
                                product.description = e.target.value;
                            }} />
                        </div>

                        <div>
                            <button className='cancel_button' type='reset'>Cancel</button>
                            <button className='save_button' onClick={saveChanges}>Save Changes</button>
                        </div>
                    </form>

                </main >}
        </>
    );
}

export default ProductDetails;