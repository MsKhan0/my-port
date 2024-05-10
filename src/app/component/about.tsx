import Image from "next/image";
import React from "react";

const About= () => {
    return(
        <div id="about">
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-
        [400px]"
        alt="hero"
        src={require("../../../public/assets/IMG_20240427_174924.jpg")}
        width={400}
        height={600}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-5 leading-relaxed">
      As a passionate *Web Developer* and IT specialist, 
      I bring a blend of innovative design and technical expertise to create dynamic and user-friendly digital experiences.
       With a keen eye for detail and a commitment to excellence, I strive to deliver cutting-edge solutions that empower
        businesses and individuals alike. My journey in the tech world is fueled by a love for learning and
         a desire to stay ahead of the curve in this ever-evolving industry.

      </p>
      <div className="flex justify-center">
        {/* <a href={"cv"}></a> */}
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default About;