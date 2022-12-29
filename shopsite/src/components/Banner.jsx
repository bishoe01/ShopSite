import React from 'react';

function Banner(props) {
    return (
        <section className='h-96 bg-yellow-900 relative'>
            <div className='w-full h-full bg-cover bg-banner bg-no-repeat opacity-80 xl:bg-center lg:bg-bottom' ></div>
            <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
                <h2 className='text-6xl'>Shop With Us</h2>
                <p className='text-2xl'>Best Products, High Quality</p>
            </div>
        </section>
    );
}

export default Banner;