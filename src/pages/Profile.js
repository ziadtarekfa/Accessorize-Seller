import '../styles/pagesStyles/Profile.css';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const Profile = () => {

    const [loading, setLoading] = useState(true);
    const [seller, setSellerProfile] = useState(null);
    const today = new Date().toISOString().split('T')[0];
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/seller/getProfile', { credentials: 'include' }).then((res) => {
            return res.json();
        }).then((data) => {
            setSellerProfile(data);
            setLoading(false);
        });
    }, []);

    const saveChanges = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/seller/updateProfile', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(seller)
        });
        const data = await response.json();

        if (response.ok) {
            toast.success("Changes Saved Successfully !", {
                position: 'top-right'
            });
        }
        else {
            toast.error(data.error, {
                position: 'top-right'
            });
        }

    }

    return (
        <main className='flex'>
            <SideBar />
            {
                loading ? <Loading />
                    :
                    <form className='profile_form' onSubmit={saveChanges}>

                        <h2>Edit Profile</h2>
                        <h4>Personal info</h4>

                        <div className='flex'>
                            <div className='flex_box_column'>
                                <label className='default_label'>First name</label>
                                <input className='default_input' defaultValue={seller.firstName} type="text" required onChange={(e) => {
                                    seller.firstName = e.target.value;
                                }} />
                            </div>
                            <div className='flex_box_column'>
                                <label className='default_label'>Last name</label>
                                <input className='default_input' defaultValue={seller.lastName} type="text" required onChange={(e) => {
                                    seller.lastName = e.target.value;
                                }} />
                            </div>
                        </div>

                        <div className='flex_box_column'>
                            <label className='default_label'>Email </label>
                            <input className='default_input' defaultValue={seller.email} type="email" required onChange={(e) => {
                                seller.email = e.target.value;
                            }} />
                        </div>

                        <div className='flex_box_column'>
                            <label className='default_label'>Phone number</label>
                            <input className='default_input' defaultValue={seller.phoneNumber} type="text" required onChange={(e) => {
                                seller.phoneNumber = e.target.value;
                            }} />
                        </div>

                        <div className='flex_box_column'>
                            <label className='default_label'>Birth date</label>
                            <input className='default_input' defaultValue={seller.birthDate} max={today} type="date" required onChange={(e) => {
                                seller.birthDate = e.target.value;
                            }} />
                        </div>
                        <h4>Address info</h4>
                        <div className='flex_box_column'>
                            <label className='default_label'>Country</label>
                            <input className='default_input' defaultValue={seller.address.country} type="text" required onChange={(e) => {
                                seller.address.country = e.target.value;
                            }} />
                        </div>
                        <div className='flex' >
                            <div className='flex_box_column'>
                                <label className='default_label'>City</label>
                                <input className='default_input' defaultValue={seller.address.city} type="text" required onChange={(e) => {
                                    seller.address.city = e.target.value;
                                }} />
                            </div>
                            <div className='flex_box_column'>
                                <label className='default_label'>Zip Code</label>
                                <input className='default_input' defaultValue={seller.address.zipCode} type="number" required onChange={(e) => {
                                    seller.address.zipCode = e.target.value;
                                }} />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex_box_column'>
                                <label className='default_label'>Street name</label>
                                <input className='default_input' defaultValue={seller.address.street} type="text" required onChange={(e) => {
                                    seller.address.street = e.target.value;
                                }} />
                            </div >
                            <div className='flex_box_column'>
                                <label className='default_label'>Floor number</label>
                                <input className='default_input' defaultValue={seller.address.floorNum} type="number" min="1" required onChange={(e) => {
                                    seller.address.floorNum = e.target.value;
                                }} />
                            </div>
                        </div>

                        <div className='flex_box_column'>
                            <label className='default_label'>Apartment number</label>
                            <input className='default_input' defaultValue={seller.address.aptNum} type="number" min="1" required onChange={(e) => {
                                seller.address.aptNum = e.target.value;
                            }} />
                        </div>
                        <div>

                            <button className='cancel_button' type='reset' onClick={() => {
                                navigate(-1);
                            }}>Cancel</button>
                            <button className='save_button' type='submit'>Save Changes</button>
                        </div>
                    </form>

            }

        </main>

    );
}

export default Profile;