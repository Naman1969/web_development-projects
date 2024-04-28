import React from 'react';

const Navbar = () => {
    return (
        <div className='max-w-screen-2xl mx-auto container px-6 md:px-40 py-2 shadow-lg h-16 fixed'>
            <div className='flex justify-between'>
                <h1 className='text-2xl cursor-pointer font-bold'>Word<span className='text-4xl text-green-500'>To</span>PDF</h1>
                <h1 className='mt-1.5 text-2xl cursor-pointer font-bold'>HOME</h1>
            </div>
        </div>
    );
}

export default Navbar;
