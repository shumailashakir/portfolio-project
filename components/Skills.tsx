import React from 'react';
import { AiOutlineCheckSquare } from "react-icons/ai";

const Skills = () => {
  return (
    <div id='skills'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-purple-600 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-purple-600">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 mt-[5rem]">
            {/* Skill Items */}
            {[
              { name: "HTML", level: "100%" },
              { name: "CSS", level: "80%" },
              { name: "Next.js", level: "90%" },
              { name: "TypeScript", level: "80%" },
              { name: "JavaScript", level: "85%" },
              { name: "Tailwind CSS", level: "95%" }
            ].map((skill, index) => (
              <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                      <AiOutlineCheckSquare className='text-xl font-bold' />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">{skill.name}</h2>
                  </div>
                  <div className="flex-grow">
                    <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                      <div className='absolute bg-purple-600 h-1 rounded-xl' style={{ width: skill.level }}></div>
                    </div>
                    <p className='font-bold text-purple-600 text-right'>{skill.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
