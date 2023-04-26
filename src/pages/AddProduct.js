import SideBar from '../components/SideBar';
import '../styles/pagesStyles/AddProduct.css';

const AddProduct = () => {

    const saveChanges = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('sellerEmail', "ziadtarekfa@gmail.com");

        fetch('http://localhost:8000/seller/addProduct', {
            method: "POST",
            body: formData,
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <main className='home'>
            <SideBar />

            <form className='add-product' onSubmit={saveChanges}>

                <h2>Add Product</h2>

                <div className='flex_box_column'>
                    <label>Name</label>
                    <input type="text" name='name' />
                </div>

                <div className='flex_box_column'>
                    <label>Brand </label>
                    <input type="text" name='brand' />
                </div>
                <div className='flex_box_column'>
                    <label>Category</label>
                    <select name='category'>
                        <option>Masks</option>
                        <option>Glasses</option>
                        <option>Hats</option>
                    </select>
                </div>

                <div className='flex_box_row'>
                    <div className='flex_box_column' style={{ 'marginRight': '10px' }}>
                        <label>Country of Origin</label>
                        <input type="text" name='origin' />
                    </div>
                    <div className='flex_box_column'>
                        <label>Color</label>
                        <input type="text" name='color' />
                    </div>
                </div>
                <div className='flex_box_row'>
                    <div className='flex_box_column' style={{ 'marginRight': '10px' }}>
                        <label>Price</label>
                        <input type="text" name='price' />
                    </div>
                    <div className='flex_box_column'>
                        <label>Stock</label>
                        <input type="text" name='stock' />
                    </div>
                </div>

                <div className='flex_box_column'>
                    <label>Description</label>
                    <textarea type="text" style={{ "height": 100, "marginTop": 5 }} name='description' />
                </div>

                <div className='flex_box_column file'>
                    <label>Add images</label>
                    <input type="file" name="images" multiple />

                </div>
                <div className='flex_box_column file'>
                    <label>Add Model</label>
                    <input type="file" name="model" />
                </div>
                <div>
                    <button className='default_button btn_add_product'>Add Product</button>
                </div>
            </form>


        </main>

    );
}

export default AddProduct;