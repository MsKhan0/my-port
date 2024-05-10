import Image from "next/image";
import Link from "next/link";
import React from "react";
import{BsYoutube} from 'react-icons/bs';
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return(
        <div className="bg-blue-50">
          
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/assets/9496034.png")}  alt="webport"width={80}height={100} />
      <span className="ml-3 text-xl">IT Skills pk</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 IT Skills pk: Code & Create
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
         <Link
        target="blank"
       href={"https://www.youtube.com/@itskills09"}
       className="text-gray-500 ">
        <BsYoutube className="text-3xl hover:text-[#ff0000]"/>
      </Link>
      
      <Link
        target="blank"
       href={"https://www.linkedin.com/in/shoaib-khan-246b0b2a6/"}
       className="text-gray-500 ml-3">
        < BsLinkedin className="text-2xl hover:text-[blue]"/>
      </Link>
      
    </span>
  </div>
</footer>

        </div>
    )
}

export default Footer