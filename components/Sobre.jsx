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
    <div className="h-fit w-full md:grid md:grid-cols-2 mt-5">
      <article class="text-pretty text-justify leadiing-20 text-black space-y-4 text-[18px]">
        <h3 className="text-[20px]">Olá, bem vindo!</h3>
        <p>Meu nome é Gabriel Menezes e sou de Manaus, no Amazonas.</p>
        <p>Criei esse espaço com o propósito de compartilhar um pouco da minha vida profissinal, meus hobbies e colocar em 
        prática meus conhecimentos em desenvolvimento web.</p>
        <div className="hidden md:block">
          <article class="text-pretty text-justify leadiing-20 text-black space-y-4 text-[18px]">
            <p>Como a vida não é feita apenas de trabalho, eu tento levar meu dia a dia com 
                      tranquilidade, gastando meu tempo com os hobbies que gosto e convivendo com as pessoas que amo.</p>
              <p>Eu adoro viajar e explorar novos lugares, fazer trilhas, acampar, conhecer novas 
                      pessoas e registrar os momentos através da fotografia.</p>
              <p>No final das contas, todos desejam ter do que se orgulhar e histórias para contar.</p>
       </article>
        </div>
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
      <article class="text-pretty text-justify leadiing-20 text-black space-y-4 text-[18px] mt-5 md:hidden">
      <p>Como a vida não é feita apenas de trabalho, eu tento levar meu dia a dia com 
                tranquilidade, gastando meu tempo com os hobbies que gosto e convivendo com as pessoas que amo.</p>
        <p>Eu adoro viajar e explorar novos lugares, fazer trilhas, acampar, conhecer novas 
                pessoas e registrar os momentos através da fotografia.</p>
        <p>No final das contas, todos desejam ter do que se orgulhar e histórias para contar.</p>
      </article>
    </div>
    <div className="hidden  justify-center items-center">
      <div className="bg-gray-200 w-fit h-32 rounded-lg mt-10 flex justify-center items-center lg:w-fit">
        <p className="m-2 text-justify text-[18px] text-blue-950/100 italic">"Sou apaixonado por aviação, um dia ainda me tornarei piloto de avião só para 
        passear no final de semana"</p>
      </div>
    </div>

    {/* fotos */}
    <div className="lg:hidden">
      <div className="grid grid-cols-2 m-2 mt-10 gap-3 justify-center items-center w-full h-fit ">
        <div className="flex justify-center items-center">
          <Image src="/assets/PB.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/assets/PythonNorte.JPG" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
        </div>
      </div>
          {/* legendas */}
      <div className="grid grid-cols-2 justify-center items-center text-center ">
        <div>Python Brasil 2022</div>
        <div>Python Norte 2023</div>
      </div>
    </div>
</section>
  );
};
export default Sobre;