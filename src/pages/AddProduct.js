import { toast } from 'react-toastify';
import SideBar from '../components/SideBar';
import '../styles/pagesStyles/AddProduct.css';

const AddProduct = () => {

    const addProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('http://localhost:8000/seller/addProduct', {
            credentials: 'include',
            method: "POST",
            body: formData,

        });
        const data = await response.json();

        if (response.ok) {
            toast.success("Product Added Successfully !", {
                position: 'top-right'
            })
        } else {
            toast.error(data.error, {
                position: 'top-right'
            })
        }
    }

    return (
        <main className='flex'>
            <SideBar />
            <form className='product_details_form' style={{'marginTop':32}} onSubmit={addProduct}>
                <div className='main_product_details'>

                    <h3>Main Product Details</h3>
                    <div className='flex_box_column'>
                        <label className='default_label'>Name</label>
                        <input required className="default_input" name='name' />
                    </div>
                    <div className='flex_box_column'>
                        <label className='default_label'>Category</label>
                        <select className='default_input' type="text" name='category'>
                            <option>Glasses</option>
                            <option>Masks</option>
                            <option>Ears</option>
                            <option>Makeup</option>
                            <option>Hats</option>
                        </select>
                    </div>
                    <div className='flex_box_column'>
                        <label className='default_label'>Images</label>
                        <input required className="default_input" type="file" name='images' multiple />
                    </div>

                    <div className='flex_box_column'>
                        <label className='default_label'>Origin</label>
                        <input required className="default_input" type="text" name='origin' />
                    </div>
                    <div className='flex_box_column'>
                        <label className='default_label'>Color</label>
                        <input required className="default_input" type="text" name='color' />
                    </div>

                    <div className='flex_box_column'>
                        <label className='default_label'>Stock</label>
                        <input required className="default_input" type="number" name='stock' />
                    </div>
                    <div className='flex_box_column'>
                        <label className='default_label'>Price</label>
                        <input required className="default_input" type="number" name='price' />
                    </div>
                    <div className='flex_box_column'>
                        <label className='default_label'>Brand</label>
                        <input required className="default_input" type="text" name='brand' />
                    </div>

                    <div className='flex_box_column'>
                        <label className='default_label'>Description</label>
                        <textarea required type="text" name='description' />
                    </div>

                    <div>
                        <button className='save_button' type='submit'>Add Product</button>
                    </div>

                </div>
                <div className='model_details' style={{height:'90%'}}>
                    <h3>Model Details</h3>
                    <label className='default_label' >Model</label>

                    <input className="default_input" type="file" name='model' />

                    <label className='default_label'>Model Position Coordinates</label>
                    <div className='flex'>
                        <div className='flex_box_column'>
                            <label className='default_label'>X</label>
                            <input required className="default_input" defaultValue={0} name='modelPosition[x]' />
                        </div>
                        <div className='flex_box_column'>
                            <label className='default_label'>Y</label>
                            <input required className="default_input" defaultValue={0} name='modelPosition[y]' />
                        </div>
                        <div className='flex_box_column'>
                            <label className='default_label'>Z</label>
                            <input required className="default_input" defaultValue={0} name='modelPosition[z]' />
                        </div>
                    </div>

                    <label className='default_label'>Model Size Coordinates</label>
                    <div className='flex'>
                        <div className='flex_box_column'>
                            <label className='default_label'>X</label>
                            <input required className="default_input" defaultValue={0} name='modelSize[x]' />
                        </div>
                        <div className='flex_box_column'>
                            <label className='default_label'>Y</label>
                            <input required className="default_input" defaultValue={0} name='modelSize[y]' />
                        </div>
                        <div className='flex_box_column'>
                            <label className='default_label' defaultValue={0} >Z</label>
                            <input required className="default_input" defaultValue={0} name='modelSize[z]' />
                        </div>
                    </div>

                </div>
            </form>



        </main >

    );
}

export default AddProduct;