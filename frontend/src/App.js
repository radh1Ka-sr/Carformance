
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Home from './components/Home';
import ServiceCentreRegister from './components/serviceCentre/ServiceCentreRegister';
import ServiceCentreLogin from './components/serviceCentre/ServiceCentreLogin';
import ServiceCentreHome from './components/serviceCentre/ServiceCentreHome';
import History from './components/serviceCentre/History';
import UserRegister from './components/user/UserRegister';
import UserLogin from './components/user/UserLogin';
import UserHome from './components/user/UserHome';
import MyHistory from './components/user/MyHistory';
import AddAppointment from './components/user/AddAppointment';
import MyAppointment from './components/user/MyAppointment';
import MyProfile from './components/user/MyProfile';
import ServiceCentre from './components/user/ServiceCentre';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileServiceCentre from './components/serviceCentre/ProfileServiceCentre';


function App() {
  return (
    < >
      <BrowserRouter>
   <ButtonAppBar/>
   
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/serviceCentreRegister" element={<ServiceCentreRegister/>} />
    <Route exact path="/serviceCentreLogin" element={<ServiceCentreLogin/>}/>
    <Route exact path="/serviceCentreHome" element={<ServiceCentreHome/>}/>
    <Route exact path="/serviceCentreHistory" element={<History/>}/>
    
    <Route exact path="/userRegister" element={<UserRegister/>} />
    <Route exact path="/userLogin" element={<UserLogin/>}/>
    <Route exact path="/userHome" element={<UserHome/>}/>
    <Route exact path="/userHistory" element={<MyHistory/>}/>
    <Route exact path="/userAddAppointment/:serviceCentreId" element={<AddAppointment/>} />
    <Route exact path="/userMyAppointment" element={<MyAppointment/>}/>
    <Route exact path="/userMyProfile" element={<MyProfile/>}/>
    <Route exact path="/userServiceCentre" element={<ServiceCentre/>}/>
    <Route exact path="/serviceCentreProfile" element={<ProfileServiceCentre/>} />
    
    <Route/> 
   </Routes>
   
   </BrowserRouter>
    </>
  );
}

export default App;
