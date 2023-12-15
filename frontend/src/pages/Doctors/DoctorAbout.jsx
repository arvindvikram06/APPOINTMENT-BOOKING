import React from 'react'
import { formateDate } from '../../utils/formateDate'
const DoctorAbout = ({ details }) => {

    const { about, name, qualifications, experiences } = details
    console.log("this is name" + name)
    console.log("this is qua" + qualifications)

    return (
        <div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor 
            font-semibold flex items-center gap-2'>
                    About
                    <span className='text-irisBlueColor font-bold text-[24px]
                leading-9'>
                        {name}
                    </span>
                </h3>
                <p className='text__para'>
                    {about}
                </p>
            </div>
            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                    Education
                </h3>
                {qualifications && qualifications.length > 0 && (
                    <ul className='pt-4 md:p-5'>
                        {qualifications.map((qua,index) => (
                            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]' key={index}>
                                <div>
                                    <span className='text-irisBlueColor text-[15px] leading-5 font-semibold'>
                                        {formateDate("4-12-2010")} - {formateDate("8-11-2017")}
                                    </span>
                                    <p className=' text-[13px] leading-6 font-medium text-textColor'>
                                        {qua.degree}
                                    </p>
                                </div>
                                <p className='text-[13px] leading-6 font-medium text-textColor'>
                                    {qua.education}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}

            </div>

            <div className='mt-4'>
    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
        Experience
    </h3>
    {experiences && experiences.length > 0 && (
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            {experiences.map((exp, index) => (
                <li key={index} className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formateDate(exp.stardate)} - {formateDate(exp.enddate)}
                    </span>
                    <p className='text-[13px] leading-6 font-medium text-textColor'>
                        {exp.position}
                    </p>
                    <p className='text-[13px] leading-6 font-medium text-textColor'>
                        {exp.hospital}
                    </p>
                </li>
            ))}
        </ul>
    )}
</div>


        </div>
    )
}

export default DoctorAbout