import React, { useState,useEffect } from 'react'
import doctoImg from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'
import getDoctor from '../../hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../config'
const DoctorDetails = () => {
     const {id} = useParams();
     const [tabs,setTabs] = useState('About')
     const {data , loading , error} = getDoctor(`${BASE_URL}/doctors/${id}`)
    
     console.log("this is seperate doctor",data)
     
    
  return (
   <section>
    <div className=' max-w-[1170px] px-5 mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-[50px]'>
        <div className='md:cols-span-2'>
          <div className='flex items-center gap-5'>
            <figure>
              <img src={data?.photo} alt='' className='w-full'/>
            </figure>
            <div>
              <span className='bg-[#CCF0F3] text-irisBlueColor
              py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4
              lg:text-[16px] lg:leading-7 font-semibold rounded'>{data?.specialization}</span>
              <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>{data?.name}</h3>
              <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                  lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon}/>
                  </span>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                  lg:leading-7 font-semibold text-headingColor'>
                    ({data?.averageRating
})
                  </span>
              </div>
              <p className='text__para text-[14px] leading-5 md:text-[14px] lg:max-w-[390px] '>
                  {data?.about}
                 </p>
            </div>
          </div>

          
          <div className='mt-[50px] border-b border-solid border-[#0006ff34] flex gap-4 text-textColor'>
            <button className={`${tabs==='About'&& 'border-b border-solid border-primaryColor text-primaryColor' }`} onClick={()=>{
              setTabs('About')
            }}>About</button>
            <button className={`${tabs==='Feedback'&& 'border-b border-solid border-primaryColor text-primaryColor' }`} onClick={()=>{
              setTabs('Feedback')
            }}>Feedback</button>
          </div>

         <div className='mt-5'>
               {tabs==='About' && <DoctorAbout details={data}/>}
               {tabs==='Feedback' && <Feedback details={data}/>}
         </div>

        </div>
        <SidePanel />
      </div>
    </div>
   </section>
  )
}

export default DoctorDetails