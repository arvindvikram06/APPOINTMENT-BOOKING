import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from "../../components/Doctors/DoctorCard"
import Loading from "../../components/Loading/Loading"
import Error from "../../Error.jsx/Error"

const MyBooking = () => {
  const {data:appoinments,loading,error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error}/>}

      {!loading && !error && <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                 {appoinments.map(doctor=>{
                  <DoctorCard doctor={doctor} key={doctor._id}/>
                 })}

                 {!loading && !error && appoinments.length===0 && <h2>You did not book any doctor yet</h2>
                 }
             </div>
        
        }


    </div>
  )
}

export default MyBooking