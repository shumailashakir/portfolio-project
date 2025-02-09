import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-600">
              My Project
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 mt-[5rem]">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/image/project1-pic.jpeg"
                  width={500} 
                  height={300} 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                    Bags Collection Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Website
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created for those who own an online bag selling business.
                  </p>
                  <Link target='_blank' href="https://my-website-2-eight.vercel.app/">
                    <p className='leading relaxed text-purple-500 hover:underline'>view project...</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/image/project2-pic.jpeg"
                  width={500} 
                  height={300} 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                    Portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    My first Portfolio
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    My portfolio website highlights my skills and projects, reflecting my professional journey and potential for new opportunities.
                  </p>
                  <Link target='_blank' href="https://portfolio-project-beta-swart.vercel.app/">
                    <p className='leading relaxed text-purple-500 hover:underline'>view project...</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/image/project2-pic.jpeg"
                  width={500} 
                  height={300} 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                    Portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    My first Portfolio
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    My first E-commerce website highlights my skills and projects, reflecting my professional journey and potential for new opportunities.
                  </p>
                  <Link target='_blank' href="https://portfolio-project-beta-swart.vercel.app/">
                    <p className='leading relaxed text-purple-500 hover:underline'>view project...</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
