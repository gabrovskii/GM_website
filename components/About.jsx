"use client";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (

<section className="w-full h-fit px-[40px] py-10 relative bg-white " id="about">
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

    <div className="md:grid md:grid-cols-2 md:items-center md:text-left">
      <div className="mb-5">
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

    <div className="grid justify-center items-center">
      <div className="md:grid grid-cols-2 ">
        <div className="md:mr-3">
          <Image src="/assets/PB.jpg" width={300} height={300} alt="Gabriel Menezes" className="rounded-lg" />
          <p className="text-center">Python Brasil 2022</p>
        </div>
        <div className="md:ml-3">
          <Image src="/assets/PythonNorte.JPG" width={300} height={300} alt="Gabriel Menezes" className="rounded-lg" />
          <p className="text-center">Python Norte 2023</p>
        </div>
      </div>

      <div className="md:grid grid-cols-2 md:hidden">
        <div className="md:mr-3">
          <Image src="/assets/drone2.jpg" width={300} height={300} alt="Gabriel Menezes" className="rounded-lg" />
          <p className="text-center">Drone/Praia de bombinhas, SC</p>
        </div>
      </div>
    </div>
  </div>
</section>


/*

  );
};

export default About;
