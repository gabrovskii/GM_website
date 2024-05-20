"use client";
import { AiFillGithub} from "react-icons/ai";
import { useRef } from "react";
import { GrTwitter, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { FaTiktok } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { ImFlickr2 } from "react-icons/im";
import { SiVsco } from "react-icons/si";


const RedesSociais = () => {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="redesSociais">
    <div className="max-w-[1250px] mx-auto">
      <div className="inline-block">
        <p className="section-title">
          <span className="mb-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
            </svg>
          </span>
          Redes Sociais
        </p>
      </div>
      <div className="mt-7">
        <p className="mt-6 text-gray-900 text-[20px] leadiing-10">
          Eu estou por toda a internet! me encontrar é facil.
        </p>
        <p className="mt-6 text-gray-900 text-[20px] leadiing-10">
          <b>Onde me encontrar?</b>
        </p>
      </div>
    <div className=" p-16 rounded-3xl  flex flex-col items-center ">
      <div className="flex flex-wrap justify-center gap-8 text-dark-red">
        <a
          className="text-4xl text-red"
          href="http://twitter.com/gabrovskii"
          target="_blank"
          rel="noreferrer"
        >
          <GrTwitter />
        </a>

        <a
          className="text-4xl"
          href="http://instagram.com/gabbrovskii"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram />
        </a>

        <a
          className="text-4xl"
          href="http://www.tiktok.com/@gabrovskii"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok />
        </a>

        <a
          className="text-4xl"
          href="http://www.linkedin.com/in/gabrielcmenezes"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedin/>
        </a>

        <a
          className="text-4xl"
          href="https://www.flickr.com/photos/gabrielmenezes_/"
          target="_blank"
          rel="noreferrer"
        >
          <ImFlickr2/>
        </a>

        <a
          className="text-4xl"
          href="https://vsco.co/gabrovskii"
          target="_blank"
          rel="noreferrer"
        >
          <SiVsco />
        </a>

        <a
          className="text-4xl"
          href="https://www.twitch.tv/gabrovskii"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitch />
        </a>    
      </div>
    </div>
  </div>
  </section>

  );
};

export default RedesSociais;
