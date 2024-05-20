"use client";
import Image from "next/image";
import Link from "next/link";
import "@/app/animations.css";

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="max-md:order-2 flex flex-col gap-5 z-40">
          <div className="text-4xl lg:text-6xl">
            <h1 className="">Olá, eu sou <b className=" text-dark-red">Gabriel</b></h1>
            <p className="mt-5 text-xl">
            Bacharel em ciência da computação, cursando especialização em qualidade e teste de software,
            com mais de 5 anos de experiência com automação, testes acústicos e teste de software Android.
            </p>
          </div>

          <div className="flex gap-4 max-md:justify-center">
            <Link href="#about">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Sobre mim
              </button>
            </Link>
            <Link href="#redesSociais">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Redes Sociais
              </button>
            </Link>
          </div>
      </div>

      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Hero;
