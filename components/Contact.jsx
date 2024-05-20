"use client";

import { AiFillGithub} from "react-icons/ai";
import { useRef } from "react";
import { GrTwitter, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { FaTiktok } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { ImFlickr2 } from "react-icons/im";
import { SiVsco } from "react-icons/si";

const Contact = () => {
  const ref = useRef(null);
  const form = useRef();

  return (
    <div className="w-full h-fit px-[40px]  py-10 md:py-20 max-xs:px-[20px] relative bg-light-bg" id="contact">
      <div className="max-w-[550px] mx-auto">
        <div className=" lg:grid-cols-2 grid-cols-2 gap-6">
          <div>
            <div className="inline-block">
              <p className="section-title mb-10">
                <span className="mb-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
                  </svg>
                </span>
                Contatos
              </p>
            </div>
            <p className="text-dark-blue">
              Caso haja a necessidade de entrar em contato, sinta-se a vontade para me chamar em quaisquer redes sociais.
            </p>
            <p className="text-dark-blue mt-12">Email</p>
            <h4>
              <a href="#" className="text-lg font-semibold text-dark-blue">
                gabrielmenezes_@hotmail.com
              </a>
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5 className="text-dark-blue">Redes Sociais</h5>
                <div className="flex gap-5">
                  <a href="https://github.com/gabrovskii" className="text-3xl text-dark-blue">
                    <AiFillGithub />
                  </a>
                  <a href="http://www.linkedin.com/in/gabrielcmenezes" className="text-3xl text-dark-blue">
                  <GrLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
