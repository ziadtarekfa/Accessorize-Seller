import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import '../styles/pagesStyles/Profile.css';
import { useEffect, useState } from 'react';

const Profile = () => {

    const id = "642b46520b1e29e3d19b8cdd";
    const [seller, setSellerProfile] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:8000/seller/getSellerProfile/${id}`).then((res) => {
            return res.json();
        }).then((data) => {
            setSellerProfile(data);
        })
    }, []);

    const saveChanges = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/seller/updateProfile', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(seller)
        }).then((res) => {
            if (res.ok) {
                console.log("Changes made successfully");
            }
        });
    }

    return (
        <main className='home'>
            <SideBar />
            {
                seller &&
                <form className='profile_form' onSubmit={saveChanges}>
                    <div className='profile_image_container' >
                        <h2>Edit Profile</h2>
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
                        <input defaultValue={seller.phoneNumber} type="text" required onChange={(e) => {
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
                        <input defaultValue={seller.address.country} type="text" required onChange={(e) => {
                            seller.address.country = e.target.value;
                        }} />
                    </div>
                    <div className='flex_box_row' >
                        <div className='flex_box_column'>
                            <label>City</label>
                            <input defaultValue={seller.address.city} type="text" required onChange={(e) => {
                                seller.address.city = e.target.value;
                            }} />
                        </div>
                        <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                            <label>Zip Code</label>
                            <input defaultValue={seller.address.zipCode} type="number" required onChange={(e) => {
                                seller.address.zipCode = e.target.value;
                            }} />
                        </div>
                    </div>
                    <div className='flex_box_row'>
                        <div className='flex_box_column'>
                            <label>Street name</label>
                            <input defaultValue={seller.address.street} type="text" required onChange={(e) => {
                                seller.address.streetName = e.target.value;
                            }} />
                        </div >
                        <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                            <label>Floor number</label>
                            <input defaultValue={seller.address.floorNum} type="number" min="1" required onChange={(e) => {
                                seller.address.floorNo = e.target.value;
                            }} />
                        </div>
                    </div>

                    <div className='flex_box_column'>
                        <label>Apartment number</label>
                        <input defaultValue={seller.address.aptNum} type="number" min="1" required onChange={(e) => {
                            seller.apartmentNo = e.target.value;
                        }} />
                    </div>
                    <div>

                        <button className='cancel_button' type='reset' onClick={() => {
                            navigate(-1);
                        }}>Cancel</button>
                        <button className='save_button' onClick={saveChanges}>Save Changes</button>
                    </div>
                </form>

            }

        </main>

    );
}

export default Profile;