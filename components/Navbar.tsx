import Link from 'next/link'
import React from 'react'
import { AiOutlineCloudDownload} from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={""} className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
      <span className="ml-3 text-xl text-purple-600">Shumaila Shakir</span>
      
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-purple-600">
      Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-purple-600">
      About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-purple-600">
      Skills</Link>
      <Link href={"#project"} className="mr-5 hover:text-purple-600">
      Project</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-purple-600">
      Contact</Link>
    </nav>
    <Link href="https://hackathon-milestones1-2-pi.vercel.app/" target="_blank">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0">
      
      Download cv
      <AiOutlineCloudDownload className='text-xl ml-2' /> 

    </button>
    </Link>
  </div>
</header>

      
    </div>
  )
}

export default Navbar
