"use client";
import Image from "next/image";
import Link from "next/link";
const Sobre = () => {
  return (

<section className="grid grid-cols-2 w-full h-fit bg-blue-100" id="about">
    <div className="bg-red-800">
      <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
      </ul>
    </div>

    <div className="bg-pink-300 flex justify-center items-center">
      <div className="grid grid-cols-4 gap-2 mt-2 mb-2">
        <div className="col-span-2 h-48 bg-gray-200">1</div>
        <div className="w-48 h-48 bg-gray-200">2</div>
        <div className="w-48 h-48 bg-gray-200">3</div>
        
        <div className="col-span-2 row-span-2  bg-gray-200">4</div>
        <div className="w-48 h-48 bg-gray-200">6</div>
        <div className="w-48 row-span-2 bg-blue-200">7</div>

        <div className="w-48 h-48 bg-gray-200">10</div>
      </div>
</div>
</section>
  );
};

export default Sobre;
