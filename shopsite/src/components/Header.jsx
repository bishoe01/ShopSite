import React from 'react';
import '../App.scss';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import {AiOutlineShopping} from 'react-icons/ai';
import {HiOutlinePencilAlt} from 'react-icons/hi';
import { login } from '../api/firebase';
function Header(props) {
    const navigate = useNavigate();
    return (
        <header className='flex justify-between border-b border-gray-300 p-2'>
                    <Link to={'/'} className="flex items-center text-4xl text-brand">
                        <AiOutlineShopping/>
                        <h1>비슈상점</h1>
                        </Link>
                <nav className='flex items-center gap-4 font-semibold'>
                    <Link to={'/products'}>Products</Link>
                    <Link to={'/carts'}>Carts</Link>
                    <Link to={'products/new'}><HiOutlinePencilAlt /></Link>
                    <button onClick={() => login()}>Login</button>
                </nav>
        </header>
    );
}

export default Header;