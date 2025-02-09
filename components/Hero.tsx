"use client";
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
const Hero = () => {
  return (
    <div>
     <section className="text-gray-600 body-font bg-gray-200 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-700">
        I&apos;m
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Frontend Developer', 'Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed text-black">
      As a front-end developer, I specialize in creating visually appealing and user-friendly web interfaces. I have a strong command of HTML, CSS, JavaScript, TypeScript, and frameworks like Tailwind CSS and Next.js, enabling me to build responsive and dynamic applications
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
          contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image
  className="object-cover object-center rounded"
  alt="hero"
  src="/image/pic-1.png"
  width={500} 
  height={500} 
/>

    </div>
  </div>
</section>
 
    </div>
  )
}

export default Hero
