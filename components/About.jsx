const About = () => {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="about">
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            Quem sou eu ?
          </p>
        </div>
        <div className="mt-7">
          <p className="mt-6 text-gray-900 text-[20px] leadiing-10">
            <b>Mas e fora do trabalho?</b>
          </p>
          <ul class="mt-2 list-disc list-inside text-[20px] leadiing-10">
                <li>Piloto de drone</li>
                <li>Simuleiro de aviação</li>
                <li>Streamer</li>
                <li>Membro da melhor comunidade de programação ~ &#x1F40D; Python Norte &#x1F40D;~</li>
                <li>Participante da comunidade de Pokemon Manaus.</li>
          </ul>
          <p className="mt-6 text-gray-900 text-[20px] leadiing-10">
             &#x1F604;
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
