import React  from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import {AiOutlineShopping} from 'react-icons/ai';
import {HiOutlinePencilAlt} from 'react-icons/hi';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';
import CartBadge from './CartBadge';
function Header(props) {
    const {user,login,logout} = useAuthContext();
    return (
        <header className='flex justify-between border-b border-gray-300 p-2'>
                    <Link to={'/'} className="flex items-center text-4xl text-brand">
                        <AiOutlineShopping/>
                        <h1>비슈상점</h1>
                        </Link>
                <nav className='flex items-center gap-4 font-semibold'>
                    <Link to={'/products'}>Products</Link>
                    {user && <Link to={'/carts'} className='flex relative'><CartBadge /></Link>}
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