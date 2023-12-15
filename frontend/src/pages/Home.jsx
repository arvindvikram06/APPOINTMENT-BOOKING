import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import featureImg from '../assets/images/feature-img.png';
import videoIcon from '../assets/images/video-icon.png'
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
const Home = () => {
  return (
    <>
      {/* intro section ------------------------------------------ */}
      <>
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
          <div className='container'>
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
              {/* -----------------------hero content----------------- */}
              <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
              md:leading-[70px]'>
                  We help patients live a healthy,Longer life
                </h1>
                <p className='text__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum iusto architecto necessitatibus accusamus ratione voluptatum deleniti a, officia quisquam! Rem ipsa dignissimos possimus debitis expedita,
                  blanditiis odit hic! Facilis?
                </p>
                <button className='btn ml-5'>
                  Request an appointment
                </button>

              </div>
              {/* ===================hero counter=============== */}
            <div className='mt-[30px] lg:mt-[70px] flex flex-xol lg:flex-row  lg:items-center
            gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-heading-color'>
                  30+
                </h2>
                <span className='w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]'></span>
                <p className='text__para'>years of experience</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-heading-color'>
                  15+
                </h2>
                <span className='w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]'></span>
                <p className='text__para'>Clinic location</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-heading-color'>
                  100%
                </h2>
                <span className='w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]'></span>
                <p className='text__para'>patient Satisfaction</p>
              </div>
            </div>
          </div>
              {/* ----------------------------hero content------------------ */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg01} alt=''/>
              </div>
              <div className='mt-[15px]'>
                <img src={heroImg02} className='w-full mb-[30px]'/>
                <img src={heroImg03} className='w-full mb-[30px]'/>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* //=======================hero section ends========================// */}
        <section>
          <div className='container'>
            <div className='lg:w-[470px] mx-auto'>
              <h2 className='heading text-center'>Providing the best medical services</h2>
              <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur,  pariatur,
               officiis quibusdam aperiam vero harum sed.</p>
            </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Doctor
                </h2>
                <p className='text-[16px] leading-9 text-headingColor font-[700] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos reiciendis, hic atque molestiae accusamus. Mollitia, deserunt assumenda corporis officia .
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1] mt-[30px] 
                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' style={{ ":hover": { backgroundColor: "blue" } }}> 
                  <BsArrowRight className='group-hover:text-white w-5 h-6'></BsArrowRight>
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Location
                </h2>
                <p className='text-[16px] leading-9 text-headingColor font-[700] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos reiciendis, hic atque molestiae accusamus. Mollitia, deserunt assumenda corporis officia .
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1] mt-[30px] 
                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' style={{ ":hover": { backgroundColor: "blue" } }}> 
                  <BsArrowRight className='group-hover:text-white w-5 h-6'></BsArrowRight>
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book an Appointment
                </h2>
                <p className='text-[16px] leading-9 text-headingColor font-[700] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos reiciendis, hic atque molestiae accusamus. Mollitia, deserunt assumenda corporis officia .
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1] mt-[30px] 
                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' style={{ ":hover": { backgroundColor: "blue" } }}> 
                  <BsArrowRight className='group-hover:text-white w-5 h-6'></BsArrowRight>
                </Link>
              </div>
            </div>

          </div>
          </div>
        </section>
        <About />
        {/* ======================================service section starts============================= */}
        <section>
          <div className='xl-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/> eveniet esse reiciendis, numquam explicabo quod.</p>
          </div>
          <ServiceList />
        </section>
       {/* ======================================service section ends====================================== */}
      {/* =====================================feature section starts==================================================== */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            {/* =============================feature content========================== */}
              <div className='xl:w-[670px]'>
                <h2 className='heading'>
                  Get a virtual treatment <br/> anytime
                </h2>
                <ul className='pl-4'>
                  <li className='text__para'>
                    1. Schedule the appointment directly.
                  </li>
                  <li className='text__para'>
                    2.Search for your physician and contact their office
                  </li>
                  <li className='text__para'>
                    3.use online schedule tool to book your appointment
                  </li>
                </ul>
                <Link to="/">
                  <button className='btn'>
                    Learn More
                  </button></Link>
              </div>
            {/* ========================feature img========================== */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] 
            lg:mt-0'>
                    <img src={featureImg} className='w-3/4' alt=''/>
              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0
              md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className='flex items-center gap-[6px] lg:gap-3'>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5
                  text-headingColor font-[600]'>
                    Tue, 24
                  </p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
                  font-[400]'>
                    10:00 AM
                  </p>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
                bg-yellowColor rounded py-1 px-[6px] lg:px-[9px]'>
                  <img src={videoIcon} />
                  </span> 
                </div>
               <div className='w-[100px] h-[30px] bg-primaryColor text-white font-[10px] pd-2 text-center rounded'>
                    <p className=''>Consultation</p>
               </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* =====================================Doctors section====================================== */}
      <div className='container'>
      <div className='xl-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Greatest Doctors</h2>
            <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/> eveniet esse reiciendis, numquam explicabo quod.</p>
          </div>
          <DoctorList/>
      </div>
        
      </>
    </>
  )
}

export default Home