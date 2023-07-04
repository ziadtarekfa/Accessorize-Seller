import '../styles/pagesStyles/ProductDetails.css'
import SideBar from '../components/SideBar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8000/seller/getProductById/${id}`, { 'credentials': 'include' }).then((res) => {
            if (!res.ok) {
                setNotFound(true);
                return;
            }
            else {
                return res.json();
            }
        }).then((data) => {

            console.log(data);
            setProduct(data);
            setLoading(false);
        });
    }, [id]);

    const updateProductDetails = async (formData) => {
        formData.delete('model');

        const response = await fetch(`http://localhost:8000/seller/updateproduct/${product._id}`, {
            method: 'PATCH',
            body: formData
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            toast.success("Changes Saved Successfully !", {
                position: 'top-right'
            })
        }
        else {
            toast.error(data.error, {
                position: 'top-right'
            })
        }
    }

    const updateModelLink = async (formData) => {
        const updateModelResponse = await fetch(`http://localhost:8000/seller/updatemodel/${product._id}`, {
            method: 'PATCH',
            body: formData
        });
        const modelLink = await updateModelResponse.json();

        formData.set('modelLink', modelLink);
    }


    const saveChanges = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        if (formData.get('model').name === '') {
            await updateProductDetails(formData);
        }
        else {
            await updateModelLink(formData);
            await updateProductDetails(formData);
        }

    }

    return (

        <main className='flex'>
            <SideBar />
            {loading ? <Loading /> :

                notFound ? <div className='empty_products'>No product found !</div> :
                    <form className='product_details_form' onSubmit={saveChanges}>
                        <div className='main_product_details'>
                            <div className='image_container' >
                                <h3>Main Product Details</h3>
                                <img src={product.images[0]} alt='product_pic' />
                            </div>

                            <div className='flex_box_column'>
                                <label className='default_label'>Name</label>
                                <input required className="default_input" defaultValue={product.name} name='name' />
                            </div>
                            <div className='flex_box_column'>
                                <label className='default_label'>Category</label>
                                <select className='default_input' defaultValue={product.category} type="text" name='category'>
                                    <option>Glasses</option>
                                    <option>Masks</option>
                                    <option>Earrings</option>
                                    <option>Makeup</option>
                                    <option>Hats</option>
                                </select>
                            </div>


                            <div className='flex_box_column'>
                                <label className='default_label'>Origin</label>
                                <input required className="default_input" defaultValue={product.origin} type="text" name='origin' />
                            </div>
                            <div className='flex_box_column'>
                                <label className='default_label'>Color</label>
                                <input required className="default_input" defaultValue={product.color} type="text" name='color' />
                            </div>

                            <div className='flex_box_column'>
                                <label className='default_label'>Stock</label>
                                <input required className="default_input" defaultValue={product.stock} type="number" name='stock' />
                            </div>
                            <div className='flex_box_column'>
                                <label className='default_label'>Price</label>
                                <input required className="default_input" defaultValue={product.price} type="number" name='price' />
                            </div>
                            <div className='flex_box_column'>
                                <label className='default_label'>Brand</label>
                                <input required className="default_input" defaultValue={product.brand} type="text" name='brand' />
                            </div>

                            <div className='flex_box_column'>
                                <label className='default_label'>Description</label>
                                <textarea required defaultValue={product.description} type="text" name='description' />
                            </div>

                            <div>
                                <button className='cancel_button' type='reset'>Cancel</button>
                                <button className='save_button' type='submit'>Save Changes</button>
                            </div>

                        </div>
                        <div className='model_details'>
                            <h3>Model Details</h3>
                            <label className='default_label' >Model</label>

                            <input className="default_input" type="file" name='model' />

                            <label className='default_label'>Model Position Coordinates</label>
                            <div className='flex'>
                                <div className='flex_box_column'>
                                    <label className='default_label'>X</label>
                                    <input required className="default_input" defaultValue={product.modelPosition.x} name='modelPosition[x]' />
                                </div>
                                <div className='flex_box_column'>
                                    <label className='default_label'>Y</label>
                                    <input required className="default_input" defaultValue={product.modelPosition.y} name='modelPosition[y]' />
                                </div>
                                <div className='flex_box_column'>
                                    <label className='default_label'>Z</label>
                                    <input required className="default_input" defaultValue={product.modelPosition.z} name='modelPosition[z]' />
                                </div>
                            </div>

                            <label className='default_label'>Model Size Coordinates</label>
                            <div className='flex'>
                                <div className='flex_box_column'>
                                    <label className='default_label'>X</label>
                                    <input required className="default_input" defaultValue={product.modelSize.x} name='modelSize[x]' />
                                </div>
                                <div className='flex_box_column'>
                                    <label className='default_label'>Y</label>
                                    <input required className="default_input" defaultValue={product.modelSize.y} name='modelSize[y]' />
                                </div>
                                <div className='flex_box_column'>
                                    <label className='default_label'>Z</label>
                                    <input required className="default_input" defaultValue={product.modelSize.z} name='modelSize[z]' />
                                </div>
                            </div>

                        </div>
                    </form>
            }

        </main>
    );
}

export default ProductDetails;