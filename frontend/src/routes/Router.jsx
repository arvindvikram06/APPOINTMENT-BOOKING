import React from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import ProtectedRoute from './ProtectedRoute'
const Router = () => {
  return (
    <>
     <Routes>
        <Route path='/' element = {<Navigate to='/home'/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/doctors' element = {<Doctors/>}/>
        <Route path='/doctors/:id' element = {<DoctorDetails/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/Services' element = {<Services/>}/>
        <Route path='/Register' element = {<Signup/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/users/profile/me' element = {<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>}/>
        <Route path='/doctors/profile/me' element = {<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>}/>
     </Routes>
    </>
)
  
 
}

export default Router