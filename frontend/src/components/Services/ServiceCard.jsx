import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;


  return (
    <div className='py-[30px] px-3 lg:px-5'>
      <h2 className='text-[26px] leading-7 font-[700] text-headingColor text-center'>{name}</h2>
      <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>{desc}</p>
      <div className='flex items-center justify-between mt-[30px]'>
        <Link to='/doctors' className=' order-2 w-[44px] h-[44px] rounded-full border border-solid border-[#181A1]  flex items-center justify-center group hover:bg-primaryColor hover:border-none' style={{ ":hover": { backgroundColor: "blue" } }}>
          <BsArrowRight className='group-hover:text-white w-5 h-6'></BsArrowRight>
        </Link>
        <span className='flex items-center justify-center w-[43px] h-[43px] leading-[30px] text-[16px] font-[600] order-1'
        style={{
          backgroundColor:`${bgColor}`,
          color:`${textColor}`,
          borderRadius:"0 6px 6px 0"
        }}
        
        >
            {index+1}
        </span>
      </div>
    </div>
  )
}

export default ServiceCard