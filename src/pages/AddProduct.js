import SideBar from '../components/SideBar';
import profilePic from '../assets/images/profile-picture.jpg';
import '../styles/pagesStyles/AddProduct.css';

const AddProduct = () => {
    const seller = {
        profilePic: profilePic,
        firstName: "Anita",
        lastName: "Cruz",
        email: "anitacruz123@gmail.com",
        phoneNo: "01066324579",
        birthDate: "2001-12-19",
        country: "Egypt",
        city: "New Cairo",
        zipCode: 3421,
        streetName: "Thawra St",
        floorNo: 2,
        apartmentNo: 14
    }
    const saveChanges = (e) => {
        e.preventDefault();
        console.log(seller);
    }

    return (
        <main className='home'>
            <SideBar />

            <form className='add-product' onSubmit={saveChanges}>

                <h2>Add Product</h2>

                <div className='flex_box_column'>
                    <label>Name</label>
                    <input type="text" />
                </div>

                <div className='flex_box_column'>
                    <label>Brand </label>
                    <input type="text" />
                </div>
                <div className='flex_box_column'>
                    <label>Category</label>
                    <select>
                        <option>Masks</option>
                        <option>Glasses</option>
                        <option>Hats</option>
                    </select>
                </div>
                <div className='flex_box_column'>
                    <label>Country of Origin</label>
                    <input type="text" />
                </div>

                <div className='flex_box_column'>
                    <label>Description</label>
                    <textarea type="text" style={{ "height": 150, "marginTop": 5 }} />
                </div>

                <div className='flex_box_column file' onChange={(e) => {
                    console.log(e.target.value);
                }}>
                    <label>Add image</label>
                    <input type="file" name="image" />

                </div>
                <div className='flex_box_column file' onChange={(e) => {
                    console.log(e.target.value);
                }}>
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