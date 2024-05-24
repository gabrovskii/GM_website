"use client";
import Image from "next/image";
import Link from "next/link";
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
  <div>
    <div className="md:grid md:grid-cols-2 ">
      <div className="flex justify-center items-center">
          <div className="mb-5">
                <p className="mt-6 text-gray-900 text-[20px] leadiing-10">
                  <b className="ml-5 flex">Mas e fora do trabalho?</b>
                </p>
                  <ul class="justify-center items-center mt-1 list-disc list-inside text-[20px] ">
                    <li>Piloto de drone</li>
                    <li>Simuleiro de aviação</li>
                    <li>Streamer</li>
                    <li>Aventureiro/adoro fazer trilhas</li>
                    <li>Jogador de vôlei</li>
                    </ul> 
                    <p className="mt-6 text-gray-900 text-[20px] leadiing-10">
                      Ah! e não posso deixar de citar minha 
                    </p>
                    <p className=" text-gray-900 text-[20px] leadiing-10">
                    participação nas melhores comunidades de programação
                    </p>
                    <ul class=" justify-center items-center mt-1 list-disc list-inside text-[20px] ">
                    <li>Python Norte &#128013;</li>
                    <li>Python Brasil &#x1F1E7;&#x1F1F7;</li>
                    </ul>
          </div>
      </div>
      <div className="flex justify-center items-center w-full h-fit">
        <div className="lg:grid md:grid-cols-4 gap-2 m-1 ">
          <div className="mb-1 lg-mb-0 col-span-2 row-span-2">
            <Image src="/assets/PB.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
          </div>
          <div className="hidden lg:block">
          <Image src="/assets/PB.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
          </div>
          <div className="hidden lg:block">
          <Image src="/assets/PB.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
          </div>
          <div className="col-span-2 row-span-2">
            <Image src="/assets/PythonNorte.JPG" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
          </div>
          <div className="hidden lg:block">
            <Image src="/assets/PB.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
          </div>
          <div className="hidden lg:block">
          <Image src="/assets/PB.jpg" width={400} height={400} alt="Gabriel Menezes" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};
export default Sobre;