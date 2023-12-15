import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate.js'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm.jsx'
const Feedback = ({details}) => {
  const[feedbackform,setFeedbackform] = useState(false)

   const {reviews} = details
    



  return (
    <div>
      <div className='mb-[50px]'>
       

        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All Reviews ({reviews.length})
        </h4>
        { reviews.map((rev,index)=>(
        <div className='flex justify-between gap-10 mb-[30px]'>
         
               <div className='flex gap-3' key={index}>
               <figure className='w-190 h-10 rounded-full'>
                 <img className='w-[50px] rounded-full' src={rev.user.photo} alt='' />
               </figure>
               <div>
                 <h5 className='text-[16px] leading-5 text-primaryColor'>{rev.user.name}</h5>
                 <p className='text-[14px] text-textColor'>{formateDate('02-11-2023')}</p>
                 <p className='text-[16px] md:text-[14px] sm:text-[14px] text-textColor leading-5'>{rev.reviewText}</p>
               </div>
   
             </div>
          
         
          <div className='flex gap-1'>
            {[...Array(rev.rating).keys()].map((_ , index) => <AiFillStar key={index} color='#FFB000' />)}
          </div>
        </div>
))}
      </div>
      {!feedbackform && <div className='mt-5 text-center'>
      
      <button className='btn' onClick={()=> setFeedbackform(true)}>
        Give Feedback
      </button>
     </div>}
     {feedbackform && <FeedbackForm rev={details}/>}
       
    </div>
  )
}

export default Feedback