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
    <div className="h-fit w-full bg-red-600 md:bg-blue-600 md:grid md:grid-cols-2 lg:bg-green-400">
      <article class="text-pretty text-justify leadiing-20 text-black space-y-4 text-[18px]">
        <h3 className="text-[20px]">Olá, bem vindo!</h3>
        <p>Meu nome é Gabriel Menezes e sou de Manaus, no Amazonas.</p>
        <p>Criei esse espaço com o propósito de compartilhar um pouco da minha vida profissinal, meus hobbies e colocar em 
        prática meus conhecimentos em desenvolvimento web.</p>
        <p>Como a vida não é feita apenas de trabalho, eu tento levar meu dia a dia com 
                tranquilidade, gastando meu tempo com os hobbies que gosto e convivendo com as pessoas que amo.</p>
        <p>Eu adoro viajar e explorar novos lugares, fazer trilhas, acampar, conhecer novas 
                pessoas e registrar os momentos através da fotografia.</p>
        <p>No final das contas, todos desejam ter do que se orgulhar e histórias para contar.</p>
      </article>
      <div className="mt-5 space-y-10  md:pl-1 md:mt-0 md:ml-5 md:grid md:justify-center md:items-center ">

        <div className="grid grid-cols-5 h-20 justify-center items-center">
          <div className="w-20 bg-gray-200 flex items-center justify-center rounded-lg text-[50px]"> <h1 className="text-dark-blue">6</h1></div>
          <div className="col-span-4 ml-5 md:ml-10">Anos de Experiência com teste e automação de software.</div>
        </div>

        <div className="grid grid-cols-5 h-20 justify-center items-center">
          <div className="w-20 bg-gray-200 flex items-center justify-center rounded-lg text-[50px]"> <h1 className="text-dark-blue">+7</h1></div>
          <div className="col-span-4 ml-5 md:ml-10">Estados brasileiros visitados e por volta de 30 cidades conhecidas.</div>
        </div>

        <div className="grid grid-cols-5 h-20 justify-center items-center">
          <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-lg text-[38px]"> <h1 className="text-dark-blue">230</h1></div>
          <div className="col-span-4 ml-5 md:ml-10">Horas de <a href="https://www.twitch.tv/videos/1230557934"className="font-bold text-black underline"
          target="_blank" rel="noopener noreferrer">voo</a> em simulador: Airbus a320 neo & TBM930.</div>
        </div>

        <div className="grid grid-cols-5 h-20 justify-center items-center">
          <div className="w-20 bg-gray-200 flex items-center justify-center rounded-lg text-[50px]"> <h1 className="text-dark-blue">36</h1></div>
          <div className="col-span-4 ml-5 md:ml-10">Horas de voo com drone, mais de 240 KM explorados e 222 voo efetuados.</div>
        </div>

      </div>
    </div>
</section>
  );
};
export default Sobre;