"use client";
import Image from "next/image";
import Link from "next/link";
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

    <div className="grid justify-center items-center">
      <p className="mt-6 text-gray-900 text-[20px] leadiing-10">Aliqua veniam sint quis fugiat irure. Sunt ea sit cillum elit dolore irure ad deserunt dolore sit cillum 
        ullamco enim aliqua. Velit eu fugiat adipisicing ea consequat reprehenderit aliquip ex tempor cupidatat eiusmod voluptate offi
      </p>
  </div>
  <div className="grid grid-row-2">
    <div className="bg-green-400 w-full h-20"></div>
    <div className="bg-red-400 w-full h-20"></div>


  </div>
</section>
  );
};

export default Cv;
