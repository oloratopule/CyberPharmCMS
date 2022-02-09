import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogIn } from './Components/LogIn';
import { SignUp } from './Components/SignUp';
import { Dashboard } from './Components/Dashboard';
import { Appointment } from './Components/Appointment';
import { Doctors } from './Components/Doctors';
import { DoctorsForm } from './Components/DoctorsForm';
import { Patients } from './Components/Patients';
import { MedicalFascilities } from './Components/MedicalFascilities'
import { getBookings } from './databaseServices/services'
import UploadImage from './Components/UploadImage';

function App() {

  useEffect(() => {
    getBookings()

  }, [])
  return (
    <BrowserRouter>
    <Routes>    
      <Route path='/' element={<Dashboard/>}/>
      <Route path='Appointment' element={<Appointment/>}/>
      <Route path='Doctors' element={<Doctors/>}/>
      <Route path='DoctorsForm' element={<DoctorsForm/>}/>
      <Route path='MedicalFascilities' element={<MedicalFascilities/>}/>
      <Route path='Patients' element={<Patients/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='UploadImage' element={<UploadImage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;



