import React from 'react'
import { Link } from 'react-router-dom'
import { ChoiceBtn } from './IntroComponents'

const IntroComponent = ({toggle}) => {
  return (
    <>
     <Link to='/ADMIN'><ChoiceBtn to='/ADMIN' onClick={toggle}>ADMIN</ChoiceBtn></Link> 
     <Link to='/STUDENT'><ChoiceBtn to='/STUDENT' onClick={toggle}>STUDENT</ChoiceBtn></Link> 
     <Link to='/FACULTY'><ChoiceBtn to='/FACULTY' onClick={toggle}>FACULTY</ChoiceBtn></Link> 
    </>
  )
}

export default IntroComponent
