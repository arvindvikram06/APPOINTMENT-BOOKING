import React from 'react'
import {doctors} from './../../assets/data/doctors';
import DoctorCard from './DoctorCard';
import { BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import useGetDoctor from '../../hooks/useFetchData'

const DoctorList = () => {
  const {data , loading, error} = useGetDoctor(`${BASE_URL}/doctors`) 
  console.log(data)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {data.map((doctor)=><DoctorCard  doctor={doctor} key={doctor._id}/>)}
    </div>
  )
}


export default DoctorList