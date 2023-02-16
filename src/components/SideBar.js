import bags from '../assets/icons/bags.svg';
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogout } from 'react-icons/md';
import '../styles/componentsStyles/sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {

    return (
        <aside className='sidebar'>
            <img className='bags_icon' src={bags} alt="bags_icon" />
            <div className='icons_container'>

                <Link to='/'>
                    <AiFillHome className={window.location.pathname === '/' ? "active" : ''} size="22px" title='Home' />
                </Link>
                <Link to='/add-product'>
                    <AiOutlinePlus className={window.location.pathname === '/add-product' ? "active" : ''} size="22px" title='Add Product' />
                </Link>
                <Link to='/view-orders'>
                    <BsFillCartCheckFill className={window.location.pathname === '/view-orders' ? "active" : ''} size="22px" title='View Orders' />
                </Link>
                <Link to='/profile'>
                    <CgProfile className={window.location.pathname === '/profile' ? "active" : ''} size="22px" title='Profile' />
                </Link>
            </div>
            <MdOutlineLogout className='logout_icon' size="22px" title="Log out" />
        </aside>
    );
}

export default SideBar;