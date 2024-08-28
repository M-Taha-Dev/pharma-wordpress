import React from 'react'
import { FaHandHoldingMedical } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-8 bg-'>

        {/* Icon and title */}
        <div className='flex flex-row gap-2'>
        <FaHandHoldingMedical size={36} color='white' />
        <div className='text-white font-bold text-3xl'> MediCare</div>

        </div>



        {/* Content */}
        <div className='flex flex-row gap-10 text-white text-lg font-semibold '>
            <div> Home </div>
            <div> About Us </div>
            <div> Services </div>
            <div> Contact </div>

        </div>
    </div>
  )
}

export default Navbar