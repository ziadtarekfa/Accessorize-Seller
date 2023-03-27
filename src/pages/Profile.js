import SideBar from '../components/SideBar';
import profilePic from '../assets/images/profile-picture.jpg';
import '../styles/pagesStyles/Profile.css';

const Profile = () => {
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

            <form className='profile_form' onSubmit={saveChanges}>
                <div className='profile_image_container' >
                    <h3>Edit Profile</h3>
                    <img src={seller.profilePic} alt='profile_pic' />
                </div>
                <h4>Personal info</h4>
                <div className='flex_box_row'>
                    <div className='flex_box_column'>
                        <label>First name</label>
                        <input defaultValue={seller.firstName} type="text" required onChange={(e) => {
                            seller.firstName = e.target.value;
                        }} />
                    </div>
                    <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                        <label>Last name</label>
                        <input defaultValue={seller.lastName} type="text" required onChange={(e) => {
                            seller.lastName = e.target.value;
                        }} />
                    </div>
                </div>

                <div className='flex_box_column'>
                    <label>Email </label>
                    <input defaultValue={seller.email} type="email" required onChange={(e) => {
                        seller.email = e.target.value;
                    }} />
                </div>
                <div className='flex_box_column'>
                    <label>Phone number</label>
                    <input defaultValue={seller.phoneNo} type="text" required onChange={(e) => {
                        seller.phoneNo = e.target.value;
                    }} />
                </div>

                <div className='flex_box_column'>
                    <label>Birth date</label>
                    <input defaultValue={seller.birthDate} type="date" required onChange={(e) => {
                        seller.birthDate = e.target.value;
                    }} />
                </div>
                <h4 style={{ "marginTop": 10 }}>Address info</h4>
                <div className='flex_box_column'>
                    <label>Country</label>
                    <input defaultValue={seller.country} type="text" required onChange={(e) => {
                        seller.country = e.target.value;
                    }} />
                </div>
                <div className='flex_box_row' >
                    <div className='flex_box_column'>
                        <label>City</label>
                        <input defaultValue={seller.city} type="text" required onChange={(e) => {
                            seller.city = e.target.value;
                        }} />
                    </div>
                    <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                        <label>Zip Code</label>
                        <input defaultValue={seller.zipCode} type="number" required onChange={(e) => {
                            seller.zipCode = e.target.value;
                        }} />
                    </div>
                </div>
                <div className='flex_box_row'>
                    <div className='flex_box_column'>
                        <label>Street name</label>
                        <input defaultValue={seller.streetName} type="text" required onChange={(e) => {
                            seller.streetName = e.target.value;
                        }} />
                    </div >
                    <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                        <label>Floor number</label>
                        <input defaultValue={seller.floorNo} type="number" min="1" required onChange={(e) => {
                            seller.floorNo = e.target.value;
                        }} />
                    </div>
                </div>

                <div className='flex_box_column'>
                    <label>Apartment number</label>
                    <input defaultValue={seller.apartmentNo} type="number" min="1" required onChange={(e) => {
                        seller.apartmentNo = e.target.value;
                    }} />
                </div>
                <div>

                    <button className='cancel_button' type='reset'>Cancel</button>
                    <button className='save_button'>Save Changes</button>
                </div>
            </form>


        </main>

    );
}

export default Profile;