import React, { useEffect, useState } from 'react';
import '../App.scss';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import {AiOutlineShopping} from 'react-icons/ai';
import {HiOutlinePencilAlt} from 'react-icons/hi';
import { login, logout, onUserStateChanged } from '../api/firebase';
import User from './User';
import Button from './ui/Button';
function Header(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    useEffect(() => {
        onUserStateChanged((user) => {
            setUser(user);
        })
        
    }, []);
    return (
        <header className='flex justify-between border-b border-gray-300 p-2'>
                    <Link to={'/'} className="flex items-center text-4xl text-brand">
                        <AiOutlineShopping/>
                        <h1>비슈상점</h1>
                        </Link>
                <nav className='flex items-center gap-4 font-semibold'>
                    <Link to={'/products'}>Products</Link>
                    <Link to={'/carts'}>Carts</Link>
                    {user && user.isAdmin && <Link to={'products/new'}><HiOutlinePencilAlt className='text-3xl' /></Link>}
                    {user && 
                    <div className='flex gap-4'>
                    <User user={user} />
                    <Button text={'Logout'} onClick={logout}/>
                    </div>}
                    {!user && <Button text={'Login'} onClick={login}/>}
                </nav>
        </header>
    );
}

export default Header;