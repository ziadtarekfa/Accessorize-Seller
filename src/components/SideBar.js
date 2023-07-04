import '../styles/componentsStyles/sidebar.css';
import bags from '../assets/icons/bags.svg';
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogout } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SideBar = () => {

    const navigate = useNavigate();
    const activeStyle = {
        color: "#4461F2"
    }
    const notActiveStyle = {
        color: "#bdbdbd"
    }

    const logout = async () => {
        const response = await fetch('http://localhost:8000/seller/logout', { credentials: "include" });

        if (!response.ok) {
            const data = await response.json();
            toast.error(data.error, {
                position: 'top-right'
            });
        }
        navigate('/sign-in');
    }
    return (
        <aside className='sidebar' >
            <img className='bags_icon' src={bags} alt="bags_icon" />
            <div className='icons_container'>

                <NavLink
                    to='/'
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }>
                    <AiFillHome size="22px" title='Home' />
                </NavLink>
                <NavLink
                    to='/add-product'
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }>
                    <AiOutlinePlus size="22px" title='Add Product' />
                </NavLink>
                <NavLink
                    to='/orders'
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }>
                    <BsFillCartCheckFill size="22px" title='View Orders' />

                </NavLink>
                <NavLink
                    to='/profile'
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }>
                    <CgProfile size="22px" title='Profile' />
                </NavLink>

            </div>
            <MdOutlineLogout className='logout_icon' size="22px" title="Log out" onClick={logout} />
        </aside >
    );
}

export default SideBar;