import Link from 'next/link';
import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-purple-400'>
      <footer className="text-black body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href={""}  className="flex title-font font-medium items-center md:justify-start justify-center text-black">
      
      <span className="ml-3 text-xl text-purple-600">Shumaila Shakir</span>
    </Link>
    <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Shumaila Shakir All Rights Reserved.
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target='_blank'
      href= {"https://github.com/shumailashakir"}
       className="text-black">
      <AiFillGithub  className='text-3xl' />
      </Link>
      <Link 
      target='_blank'
      href={""} 
      className="ml-3 text-black">
        <AiFillMail  className= "text-3xl"/>
        
      </Link>
      <Link 
      target='_blank'
      href= {"https://www.linkedin.com/in/shumaila-shakir/"} 
      className="ml-3 text-black">
        <AiFillLinkedin  className= "text-3xl"/>
        
      </Link>
      <Link 
      target='_blank'
      href={""}
      className="ml-3 text-black">
        <AiFillPhone  className= "text-3xl"/>
        
      </Link>
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
