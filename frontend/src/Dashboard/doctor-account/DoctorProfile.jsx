import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js'
import { BASE_URL,token } from "../../config.js"
import { toast } from "react-toastify"
import HashLoader from 'react-spinners/HashLoader.js'


const DoctorProfile = ({doctor}) => {

  console.log(doctor);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    photo: null,
    about:'',
    gender: 'male',
    role: 'patient',
    qualifications: [],
    experiences: [],
    timeSlots: [],
    specialization: '',
  });

  useEffect(() => {
    setFormData({
      name: doctor.name,
      email: doctor.email,
      photo: doctor.photo,
      gender: doctor.gender,
      about:doctor.about,
      qualifications: doctor.qualifications || [],
      experiences: doctor.experiences || [], // Ensure qualifications is initialized as an array,
      specialization:doctor.specialization
    });
  }, [doctor]);

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  ////////////////////image cloud/////////////////////////
  const fileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };



///////////////////handlers/////////////////////////////
  const SubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctor._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/doctors/profile/me');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handleQualificationChange = (index, fieldName, e) => {
    const newQualifications = [...formData.qualifications];
    newQualifications[index][fieldName] = e.target.value;
    console.log(newQualifications)
    setFormData({ ...formData, qualifications: newQualifications });
  };

  const addQualification = () => {
    setFormData({
      ...formData,
      qualifications: [
        ...formData.qualifications,
        { education: '', degree: '' ,startdate:'', enddate:''}, // Initialize qualification as an object
      ],
    });
  };

  const removeQualification = (index) => {
    const newQualifications = [...formData.qualifications];
    newQualifications.splice(index, 1);
    setFormData({ ...formData, qualifications: newQualifications });
  };

  const handleExperienceChange = (index, fieldName, e) => {
    const newExperiences = [...formData.experiences];
    newExperiences[index][fieldName] = e.target.value;
    console.log(newExperiences)
    setFormData({ ...formData, experiences: newExperiences });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { hospital: '', position: '' }, // Initialize qualification as an object
      ],
    });
  };

  const removeExperience = (index) => {
    const newExperiences = [...formData.experiences];
    newExperiences.splice(index, 1);
    setFormData({ ...formData, experiences: newExperiences });
  };


  return (
    <div className='container mt-5'>
      <form onSubmit={SubmitHandler}>
              <div className='mb-5 mx-5'>
                <input type="text"
                  className='w-full border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2
              placeholder-textColor text-textColor cursor-pointer'
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleFormChange}
                  required />
              </div>

              <div className='mb-5 mx-5'>
                <input type="email"
                  className='w-full border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2
            placeholder-textColor text-textColor cursor-pointer'
                  placeholder='enter your Email'
                  name='email'
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  aria-readOnly
                  readOnly
                />
              </div>

              <div className='mb-5 mx-5'>
                <input type="text"
                  className='w-full border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2
              placeholder-textColor text-textColor cursor-pointer'
                  placeholder='Bio'
                  name='about'
                  value={formData.about}
                  onChange={handleFormChange}
                  required />

              </div>
              <div className='mb-5 mx-5'>
                <input type="text"
                  className='w-full border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2
              placeholder-textColor text-textColor cursor-pointer'
                  placeholder='specialization'
                  name='specialization'
                  value={formData.specialization}
                  onChange={handleFormChange}
                  required />

              </div>


              {formData.qualifications.map((qualification, index) => (
          <div key={index} className='mb-5 mx-5 flex gap-[10px]'>
            <input
              type='text'
              name='education'
              className='w-100px border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2 placeholder-textColor text-textColor cursor-pointer'
              placeholder='enter your qualification'
              value={qualification.education}
              onChange={(e) => handleQualificationChange(index, 'education', e)}
              required
            />
            <input
              type='text'
              name='degree'
              className='w-100px border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2 placeholder-textColor text-textColor cursor-pointer'
              placeholder='enter your qualification'
              value={qualification.degree}
              onChange={(e) => handleQualificationChange(index, 'degree', e)}
              required
            />

            
            <button type='button' onClick={() => removeQualification(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type='button' onClick={addQualification}>
          Add Qualification
        </button>

        
        <div>
        {formData.experiences.map((experience, index) => (
          <div>
          <div key={index} className='mb-5 gap-2 flex  '>
            <input
              type='text'
              name='hospital'
              className='w-100px border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2 placeholder-textColor text-textColor cursor-pointer'
              placeholder='Work Place'
              value={experience.hospital}
              onChange={(e) => handleExperienceChange(index, 'hospital', e)}
              required
            />
            <input
              type='text'
              name='position'
              className='w-100px border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2 placeholder-textColor text-textColor cursor-pointer'
              placeholder='enter your Position'
              value={experience.position}
              onChange={(e) => handleExperienceChange(index, 'position', e)}
              required
            />
            
            
          </div>
          <div className='mb-5 gap-2 flex'>
               <input
              type='date'
              name='startdate'
              className='w-100px border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2 placeholder-textColor text-textColor cursor-pointer'
              placeholder='startdate'
              value={experience.startdate}
              onChange={(e) => handleExperienceChange(index, 'stardate', e)}
              required
            />
            <input
              type='date'
              name='enddate'
              className='w-100px border border-solid [#A3F3EB] focus:outline-none focus:border-2 focus:border-primaryColor rounded-md leading-9 px-4 py-2 placeholder-textColor text-textColor cursor-pointer'
              placeholder='end date'
              value={experience.enddate}
              onChange={(e) => handleExperienceChange(index, 'enddate', e)}
              required
            />
            <button type='button' onClick={() => removeExperience(index)}>
              Remove
            </button>
            </div>
            
            </div>
        ))}
        <button type='button' onClick={addExperience}>
          Add Experience
        </button>
        </div>
           

              <div className='mb-5 flex items-center justify-between'>
              
                <label htmlFor='' className='text-headingColor font-bold text-[16px]
                leading-7'>
                  Gender:
                  <select name='gender'
                    value={formData.gender}
                    onChange={handleFormChange}
                    className='text-textColor font-semibold text-[15px] leading-7
                  px-4 py-3  focus:outline-none' required>
                    <option value="male">male</option>
                    <option value='female'>female</option>

                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2
                border-solid border-primaryColor flex items-center justify-center'>
                  <img src={formData.photo} alt='' className='w-full rounded-full' />
                </figure>}
                <input
                  type='file'
                  onChange={fileInputChange}
                  name='photo'
                  id='customFile'
                  accept='.jpg,.png'
                />
              </div>
              

              <div className='mx-5 mt-5'>
                <button disabled = {loading && true} 
                className='btn w-full rounded-md text-[20px]' type='submit'>
                  {loading ? <HashLoader size={30} color='#fffff'/> : "Update"}
                </button>
              </div>
              <div className='text-center'>
                
              </div>
            </form>
    </div>
  )
}

export default DoctorProfile