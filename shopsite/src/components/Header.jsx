import React from 'react';
import '../App.scss';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
function Header(props) {
    const navigate = useNavigate();
    return (
        <header>
            <div className='header_content'>
                <div className='left_container'>
                    <img className='logo' src="./img/shop_logo.png" alt="mainLogo" />
                    <h1>비슈상점</h1>
                </div>
                <div className='empty'></div>
                <ul className='right_container'>
                    <Link to={'/products'}>Products</Link>
                    <Link to={'/carts'}>Carts</Link>
                    <Link to={'/login'}>Login</Link>
                    <li><FiLogIn /></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;