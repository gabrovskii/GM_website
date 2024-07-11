"use client";
import Image from "next/image";
import Link from "next/link";
import {GrLinkedin } from 'react-icons/gr'

const Cv = () => {
  return (

<section className="w-full h-fit px-[40px] py-10 relative bg-white " id="cv">
  <div className="inline-block">
      <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            Currículo
          </p>
    </div>
    <div className="">
      <p className="text-center font-bold p-5">Educação</p>
      <ul class="list-disc list-inside ">
        <li>Ensino médio</li>
        <li>Graduação</li>
        <li>Pós Graduação</li>
      </ul>
    </div>
    <div className="">
      <p className="text-center font-bold p-5">Experiência</p>
      <ul class="list-disc list-inside">
        <p className="text-center pb-2">Instituto de Desenvolvimento Tecnológico - INDT (2019 - atual)</p>
        <li className="">Develop automated mobile tests (Android);</li>
        <li className="">Develop automated mobile tests (Android);</li>
        <li className="">Develop automated mobile tests (Android);</li>
        <li className="">Develop automated mobile tests (Android);</li>
      </ul>
    </div>

    <div className="">
      <p className="text-center font-bold p-5">Habilidades Técnicas</p>
      <ul class="list-disc list-inside">
        <li className="">Develop automated mobile tests (Android);</li>
        <li className="">Develop automated mobile tests (Android);</li>
        <li className="">Develop automated mobile tests (Android);</li>
        <li className="">Develop automated mobile tests (Android);</li>
      </ul>
    </div>

    <div>
    <p className="text-center font-bold p-5">Idiomas</p>
      <div className="grid grid-cols-2">
        <div className="grid grid-row-2 justify-center">
          <p className="p-2 font-semibold text-center">Ingles</p>
          <p className="p-2">Avançado</p>
          </div>
          <div className="grid grid-row-2 justify-center">
          <p className="p-2 font-semibold">Português</p>
          <p className="p-2">Fluente</p>
          </div>
        
      </div>
    </div>

    <div className="">
      <p className="text-center font-bold p-5">Voluntáriado</p>
      <ul class="list-disc list-inside">
      <li className="">Python Brasil 2022</li>
        <li className="">Python Norte 2023</li>
        <li className="">Python Norte 2024</li>
      </ul>
    </div>

    <div className="">
      <p className="text-center font-bold p-5">Tecnologias de interesse</p>
      <ul class="list-disc list-inside">
      <li className="">Inteligência Artificial</li>
        <li className="">Big data</li>
        <li className="">Internet das coisas IOT</li>
        <li className="">Segurança cibernética</li>
      </ul>
    </div>

    <div>
    <p className="text-center font-bold p-5">Hobbies e interesses</p>
      <div className="grid grid-cols-3 items-center p-2 gap-4">
        <div className="bg-gray-400 rounded-lg text-center ">Aviação</div>
        <div className="bg-gray-400 rounded-lg text-center">Stream</div>
        <div className="bg-gray-400 rounded-lg text-inherit text-center">Edição de vídeo</div>
      </div>
    </div>

    <div className="flex flex-col items-center ">
     <p className="text-center font-bold p-5">Download curriculo completo</p>
       <div className="flex grid-cols-2 gap-4 items-center rounded-lg">
        <div>
          <button className="rounded-full p-2 bg-red-400 text-white"><a href="http://www.linkedin.com/in/gabrielcmenezes">Download C.V</a></button>
        </div>

        <div>
        <a className="text-4xl" href="http://www.linkedin.com/in/gabrielcmenezes" target="_blank" rel="noreferrer"><GrLinkedin/></a>
        </div>
        </div>
    </div>
   
</section>
  );
};

export default Cv;
