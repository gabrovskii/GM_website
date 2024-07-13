"use client";
import Image from "next/image";
import Link from "next/link";
import { TbDrone } from "react-icons/tb";
import { GiAirplane } from "react-icons/gi";
import { MdGames } from "react-icons/md";



const Sobre = () => {
  return (

<section className="w-full h-fit px-[40px] py-10 relative bg-white" id="about">
  <div className="inline-block">
      <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            Sobre mim
          </p>
    </div>

  <article class="text-pretty mt-5 text-justify leadiing-20 text-black ">
    <h3 className="text-[20px] leadiing-30 pb-5">Olá, bem vindo!</h3>
    <p className="mb-4 text-[18px]">Meu nome é Gabriel Menezes e sou de Manaus, no Amazonas.</p>
    <p className="text-[18px]">Criei esse espaço com o propósito de compartilhar um pouco da minha vida profissinal, meus hobbies e colocar em 
      prática meus conhecimentos em desenvolvimento web.</p>
  </article>

  <div className="grid grid-cols-3 mt-10">
      <div className="h-20 w-20 bg-gray-200 flex items-center justify-center rounded-lg text-[50px]"> <h1 className="text-dark-blue">6</h1></div>
      <div className="h-20 col-span-2 ">Anos de Experiência com teste e automação de software.</div>
  </div>

  <div className="grid grid-cols-3 mt-10">
      <div className="h-20 w-20 bg-gray-200 flex items-center justify-center rounded-lg text-[40px]"> <h1 className="text-dark-blue">+7</h1></div>
      <div className="h-20 col-span-2 flex justify-center items-center text-[15px] ">Estados brasileiros visitados e por volta de 30 cidades conhecidas.</div>
  </div>

  <div className="grid grid-cols-3 mt-10">
      <div className="h-20 w-20 bg-gray-200 flex items-center justify-center rounded-lg text-[38px]"> <h1 className="text-dark-blue">230</h1></div>
      <div className="h-20 col-span-2 ">Horas de <a
        href="https://www.twitch.tv/videos/1230557934"
        className="font-bold text-black underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        voo
      </a> em simulador: Airbus a320 neo & TBM930.</div>
  </div>

  <div className="grid grid-cols-3 mt-10">
      <div className="h-20 w-20 bg-gray-200 flex items-center justify-center rounded-lg text-[40px]"> <h1 className="text-dark-blue">36</h1></div>
      <div className="h-20 col-span-2 flex justify-center items-center text-[15px]">Horas de voo com drone, mais de 240 KM explorados e 222 voo efetuados.</div>
  </div>

  <div className="bg-gray-200 w-full h-32 rounded-lg mt-10 flex justify-center items-center">
    <p className="m-2 text-justify text-[18px] text-blue-950/100 italic">"Sou apaixonado por aviação, um dia ainda me tornarei piloto de avião só para 
    passear no final de semana"</p>
  </div>

  <article class="text-pretty mt-5 text-justify leadiing-20 text-black ">
    <p className="text-[18px]">Como a vida não é feita apenas trabalho, eu tento levar meu dia a dia com tranquilidade, gastando meu tempo com os hobbies
      que gosto e convivendo com as pessoas que amo.</p>
    
    <p className="text-[18px] mt-5">Eu adoro viajar e explorar novos lugares, fazer trilhas, acampar, conhecer novas pessoas e registrar
      os momentos através da fotografia.</p>
      
    <p className="text-[18px] mt-5">Acho que, no final das contas, todos desejam ter experiências para compartilhar e sentir orgulho do que viveram.</p>
    </article>

    <div className="md:block mt-10">
      <div className="w-full h-fit grid grid-cols-2 m-2 gap-2 ">
      <Image src="/assets/PythonNorte.JPG" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
      <Image src="/assets/drone2.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
      </div>

      <div className="w-full h-fit grid grid-cols-2 m-2 gap-2">
      <Image src="/assets/praia.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
      <Image src="/assets/PB.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
      </div>
    </div>
    

    





</section>
  );
};
export default Sobre;