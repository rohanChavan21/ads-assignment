import React, {useState} from 'react'
import AdminComponent from '../components/Admin';
import FacultyComponent from '../components/Faculty';
import IntroComponent from '../components/IntroPage'
import Navbar from '../components/Navbar'
import StudentComponent from '../components/Student';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div to="/">
      <Navbar/>
      <IntroComponent isOpen={isOpen} toggle={toggle}/>
      <FacultyComponent isOpen={isOpen}/>
      <StudentComponent isOpen={isOpen}/>
      <AdminComponent isOpen={isOpen}/>

    </div>
  )
}

export default HomePage
