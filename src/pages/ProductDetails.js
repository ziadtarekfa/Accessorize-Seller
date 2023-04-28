import '../styles/pagesStyles/ProductDetails.css'
import SideBar from '../components/SideBar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/seller/getProduct/${id}`).then((res) => {
            return res.json();
        }).then((data) => {
            setProduct(data);
        })
    }, [id]);

    const saveChanges = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        if (formData.get('model').name === '') {
            // update all except model
            formData.delete('model');
            const response = await fetch(`http://localhost:8000/seller/updateproduct/${product._id}`, {
                method: 'PATCH',
                body: formData
            });

            if (response.ok) {
                console.log("Updated Successfully");
            }

        }
        else {
            // update all

            // Upload model to firebase and getModelLink
            const updateModelResponse = await fetch(`http://localhost:8000/seller/updatemodel/${product._id}`, {
                method: 'PATCH',
                body: formData
            });
            const modelLink = await updateModelResponse.json();

            formData.set('model', modelLink);

            console.log(formData);
            console.log(formData.get('model'));
            // update product details
            const updateProductResponse = await fetch(`http://localhost:8000/seller/updateproduct/${product._id}`, {
                method: 'PATCH',
                body: formData
            });

            if (updateProductResponse.ok) {
                console.log("Updated Successfully");
            }
        }

    }

    return (

        <>
            {product &&
                <main className='home' >
                    <SideBar />
                    <form className='profile_form' onSubmit={saveChanges}>
                        <div className='profile_image_container' >
                            <h3>Edit Product Details</h3>
                            <img src={product.images[0]} alt='product_pic' />
                        </div>
                        <div className='flex_box_column'>
                            <label>Edit Model</label>
                            <input type="file" name='model' />
                        </div>
                        <div className='flex_box_row'>
                            <div className='flex_box_column'>
                                <label>Name</label>
                                <input defaultValue={product.name} name='name' />
                            </div>
                            <div className='flex_box_column'>
                                <label>Category</label>
                                <input defaultValue={product.category} type="text" name='category' />
                            </div>
                        </div>
                        <div className='flex_box_column'>
                            <label>Origin</label>
                            <input defaultValue={product.origin} type="text" name='origin' />
                        </div>
                        <div className='flex_box_column'>
                            <label>Color</label>
                            <input defaultValue={product.color} type="text" name='color' />
                        </div>
                        <div className='flex_box_column'>
                            <label>Stock</label>
                            <input defaultValue={product.stock} type="number" name='stock' />
                        </div>
                        <div className='flex_box_column'>
                            <label>Price</label>
                            <input defaultValue={product.price} type="number" name='price' />
                        </div>
                        <div className='flex_box_column'>
                            <label>Brand</label>
                            <input defaultValue={product.brand} type="text" name='brand' />
                        </div>

                        <div className='flex_box_column'>
                            <label>Description</label>
                            <textarea defaultValue={product.description} type="text" name='description' />
                        </div>

                        <div>
                            <button className='cancel_button' type='reset'>Cancel</button>
                            <button className='save_button' type='submit'>Save Changes</button>
                        </div>
                    </form>

                </main >}
        </>
    );
}

export default ProductDetails;