import React from 'react';

function User({ user:{photoURL,displayName} }) {
    return (
        <div className='flex items-center shrink-0'>
            <span className='hidden md:block'>{displayName}</span>
        </div>
    );
}

export default User;