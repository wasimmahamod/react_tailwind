import React from 'react'

const Navbar = () => {
    return (
            <nav className='bg-[#160C6D]'>
            <div className='w-[1170px]  mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='  '>
                        <img src="images/logo.png" alt="" />

                    </div>
                    <div className=' '>
                        <ul className='flex gap-10 font-poppins'>
                                <li><a className=' font-semibold text-lg text-[#EFF4FA] hover:text-red-500 duration-300 after:content-[""] after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 relative after:bg-red-500 ' href="#">Home</a></li>
                                <li><a className=' font-semibold text-lg text-[#EFF4FA] hover:text-red-500 duration-300 after:content-[""] after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 relative after:bg-red-500  ' href="#">About</a></li>
                                <li><a className=' font-semibold text-lg text-[#EFF4FA] hover:text-red-500 duration-300 after:content-[""] after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 relative after:bg-red-500 ' href="#">Service</a></li>
                                <li><a className=' font-semibold text-lg text-[#EFF4FA] hover:text-red-500 duration-300 after:content-[""] after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 relative after:bg-red-500  ' href="#">Portfolio</a></li>
                                <li><a className=' font-semibold text-lg text-[#EFF4FA] hover:text-red-500 duration-300 after:content-[""] after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 relative after:bg-red-500 ' href="#">Price</a></li>
                                <li><a className=' font-semibold text-lg text-[#EFF4FA] hover:text-red-500 duration-300 after:content-[""] after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 relative after:bg-red-500  ' href="#">Blog</a></li>

                        </ul> 

                    </div>
                    <div className=' '>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar