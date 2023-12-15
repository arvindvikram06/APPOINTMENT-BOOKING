import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const FeedbackForm = ({rev}) => {
   const {_id} = rev
    console.log(_id)
  const [rating,Setrating] = useState(0);
  const [hover,setHover] = useState(0)
  const [review,setReview] = useState('')
  const[loading,setLoading] = useState(false)

  const handleSubmit = async(e) =>{
          e.preventDefault();

          try{
            setLoading(true)
             const res = await fetch(`${BASE_URL}/doctors/${_id}/reviews`,{
                  method: 'post',
                  headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                  },
                  body: JSON.stringify({
                    rating: rating,
                    reviewText: review,
                  }),
                

            })

            const { message } = await res.json() //getting msg from json
            setLoading(false)

      if (!res.ok) {
        throw new Error(message)
        
      }
      setLoading(false)
      toast.success(message)
      

    }
    catch (err) {
      toast.error(err.message)
      setLoading(false)
    }



          ///////////////// backend

          //////////////////////////
  }
// ====================================testing
  useEffect(() => {
    // console.log(rating);
  }, [rating]);


  // useEffect(() => {
  //   console.log(hover);
  // }, [hover]);



  // useEffect(() => {
  //   console.log(review);
  // }, [review]);
  // testing===================================================================



  return (
    <div>
       <div className='mt-2'>
        <form action=''>
            <div className=''>
              <h2 className='text-textColor'>
                Rate your Experience
              </h2>
            
            <div className='flex gap-1 text-center mt-3'>
            {[...Array(5).keys()].map((_,index)=>{
                 index+=1
                 return (
                  <button 
                  key={index}
                  className={`${index <= ((rating && hover) || hover) ? "text-yellowColor" : "text-gray-400"}`}
                  onClick={()=>{
                    Setrating(index)
                    
                  }}
                  onMouseEnter={()=>setHover(index)}
                  onMouseLeave={()=>setHover(rating)}
                  onDoubleClick={()=>{
                    setHover(0);
                    Setrating(0);
                  }}
                  type='button'>
                    <span>
                    <AiFillStar />
                    </span>
                   
                  </button>
                  
                 )
            })}
          </div>
          </div>
          <div className='mt-[30px]'>
        <h2 className='text-textColor'>Share your feedback suggestion</h2>

        <textarea className='border border-solid border-primaryColor focus:outline outline-black
        w-full px-3 py-3 rounded-md'
         rows='5'
         placeholder='write your suggestion'
         onChange={(e)=>{
          setReview(e.target.value)
         }}>

        </textarea>
      </div>
      <button className='btn' type='submit'
      onClick={handleSubmit}
      >{loading ? <HashLoader size={30} color='#fffff'/> : "Submit Your Suggestion"}</button>
        </form>
       </div>
     


    </div>
  )
}

export default FeedbackForm