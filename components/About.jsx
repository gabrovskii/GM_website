"use client";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
<section className="w-full h-fit px-[40px] py-10 relative bg-white" id="about">
  <div>
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
    <div>
      <p className="mt-6 text-gray-900 text-[20px] leadiing-10">
        <b className="ml-5 flex">Mas e fora do trabalho?</b>
      </p>
        <ul class=" justify-center items-center mt-1 list-disc list-inside text-[20px] ">
          <li>Piloto de drone</li>
          <li>Simuleiro de aviação</li>
          <li>Streamer</li>
          <li>Aventureiro/adoro fazer trilhas</li>
          <li>Jogador de vôlei</li>
          </ul>
          <p className="mt-6 text-gray-900 text-[20px] leadiing-10">
            Ah! e não posso deixar de citar que participo das melhores comunidades desse planeta:
          </p>
          <ul class=" justify-center items-center mt-1 list-disc list-inside text-[20px] ">
          <li>Python Norte &#128013;</li>
          <li>Python Brasil &#x1F1E7;&#x1F1F7;</li>
          <li>Pokémon</li>
          </ul>
    </div>

    <div>

      <div className="m-4  grid grid-cols-2">
        <Image src="/assets/home.jpg" width={200} height={150} alt="Gabriel Menezes" className="z-10 rounded-full mt-4" />
        <p className="text-[20px] flex justify-center items-center">legenda 1</p>
      </div>

      <div className="m-4  grid grid-cols-2">
      <p className="text-[20px] flex justify-center items-center">legenda 2</p>
        <Image src="/assets/home.jpg" width={200} height={150} alt="Gabriel Menezes" className="z-10 rounded-full mt-4" />
      </div>

      <div className="m-4  grid grid-cols-2">
        <Image src="/assets/home.jpg" width={200} height={150} alt="Gabriel Menezes" className="z-10 rounded-full mt-4" />
        <p className="text-[20px] flex justify-center items-center">legenda 1</p>
      </div>

      <div className="m-4  grid grid-cols-2">
      <p className="text-[20px] flex justify-center items-center">legenda 1</p>
        <Image src="/assets/home.jpg" width={200} height={150} alt="Gabriel Menezes" className="z-10 rounded-full mt-4" />
      </div>

    </div>
  </div>
    </section>
  );
};

export default About;
