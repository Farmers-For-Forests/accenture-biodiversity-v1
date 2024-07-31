import React from 'react'
import Signup_Login_Header from '../../components/Common_Components/Signup_Login_Header'
import Form from './Form'

const Container = () => {
    return (
      <div className='w-[319px] max-h-[429px] pt-[111px]'>
          <Signup_Login_Header heading="Sign up" paragraph="Just a few quick things to get started"/>
          <Form/>
      </div>
    )
  }
  
  export default Container