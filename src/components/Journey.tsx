"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Journey = () => {
  const { t } = useLanguage();

  const events = [
    {
      name: "Python Brasil 2022",
      year: "2022",
      location: { pt: "Manaus — Voluntário", en: "Manaus — Volunteer" },
      link: "https://2022.pythonbrasil.org.br/",
      icon: "volunteer_activism",
    },
    {
      name: "Python Norte 2023",
      year: "2023",
      location: { pt: "Manaus — Big Kahuna", en: "Manaus — Big Kahuna" },
      link: "https://2023.pythonnorte.org/",
      icon: "stars",
    },
    {
      name: "PyData Manaus 2023",
      year: "2023",
      location: { pt: "Manaus — Palestrante", en: "Manaus — Speaker" },
      icon: "mic",
    },
    {
      name: "Python Norte 2024",
      year: "2024",
      location: { pt: "Itacoatiara — Voluntário", en: "Itacoatiara — Volunteer" },
      link: "https://2024.pythonnorte.org/",
      icon: "volunteer_activism",
    },
    {
      name: "Python Brasil 2024",
      year: "2024",
      location: { pt: "Rio de Janeiro — Participação / Palestra", en: "Rio de Janeiro — Participation / Talk" },
      link: "https://2024.pythonbrasil.org.br/",
      icon: "mic",
    },
    {
      name: "Python Users Group Manaus",
      year: "2024",
      location: { pt: "Palestrante", en: "Speaker" },
      icon: "mic",
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-low dark:bg-[#0c0e11]/50" id="journey">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-black text-on-surface dark:text-white mb-4 uppercase tracking-tighter">
            {t("Comunidade & Conhecimento", "Community & Insights")}
          </h2>
          <div className="w-16 h-1 bg-primary dark:bg-brand-accent mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6">
          <p className="font-medium text-lg text-secondary dark:text-slate-300 leading-relaxed">
            {t(
              "Há 5 anos, encontrei na comunidade ",
              "Five years ago, I found within the "
            )}
            <span className="text-primary dark:text-brand-accent font-bold">Python Brasil</span>
            {t(
              " um espaço para transformar a tecnologia através do compartilhamento. Minha jornada começou como voluntário na Python Brasil Manaus (2022) e atingiu um marco em 2023, quando ",
              " community a space for transformation through sharing. My journey began as a volunteer at Python Brasil Manaus (2022) and reached a milestone in 2023, when "
            )}
            <span className="font-bold">
              {t("liderei a organização do maior evento Python da Região Norte", "I led the organization of the largest Python event in Northern Brazil")}
            </span>.
          </p>
          <p className="font-medium text-lg text-secondary dark:text-slate-300 leading-relaxed">
            {t(
              "Desde então, sigo impulsionando o ecossistema como voluntário em edições como a Python Norte 2024 e levando a voz da nossa região para palcos nacionais, como na Python Brasil (Rio de Janeiro) e como ",
              "Since then, I have continued to drive the ecosystem as a volunteer for editions like Python Norte 2024 and representing our region on national stages, such as Python Brasil (Rio de Janeiro) and as a "
            )}
            <span className="font-bold">
              {t("palestrante na Python Sul 2025", "speaker at Python Sul 2025")}
            </span>.
            {t(
              " Para mim, estar na comunidade é sobre o ciclo contínuo de ensinar, aprender e fortalecer conexões.",
              " To me, community is a continuous cycle of teaching, learning, and building connections."
            )}
          </p>
        </div>

        <div className="mb-10 p-8 bg-primary-container dark:bg-[#1b2027] rounded-xl mt-6 border dark:border-white/5">
          <p className="text-lg font-black italic text-primary dark:text-brand-accent">
            {t(
              "\"Compartilhar o que aprendo é uma das minhas grandes motivações. Seja como palestrante ou voluntário, marcar presença em eventos da comunidade é a forma que encontrei de retribuir e ajudar a expandir o conhecimento de Python no Brasil.\"",
              "\"Sharing what I learn is one of my core drivers. Whether as a speaker or volunteer, being active in community events is how I give back and help expand Python expertise in Brazil.\""
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  onClick={() => event.link && window.open(event.link, "_blank")}
                  className={`bg-white dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col gap-4 hover:shadow-md transition-shadow group ${event.link ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#B5C7EB]">{event.icon}</span>
                    <span className="font-label text-[10px] text-slate-400 uppercase tracking-widest">{event.year}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface dark:text-white">{event.name}</h4>
                    <p className="text-xs text-secondary dark:text-slate-400">
                      <span>{t(event.location.pt, event.location.en)}</span>
                      {event.link && <span className="block truncate opacity-50">{event.link}</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              onClick={() => window.open("https://sul.python.org.br/", "_blank")}
              className="bg-[#B5C7EB]/10 dark:bg-[#B5C7EB]/5 border-2 border-[#B5C7EB]/30 p-8 rounded-2xl relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-8xl text-[#B5C7EB]">auto_awesome</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#B5C7EB] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    {t("DESTAQUE 2025", "HIGHLIGHT 2025")}
                  </span>
                  <span className="text-[#B5C7EB] material-symbols-outlined">campaign</span>
                </div>
                <h3 className="font-headline text-2xl font-black text-on-surface dark:text-white mb-2">
                  Python Sul 2025 — Porto Alegre
                </h3>
                <p className="font-body text-lg text-primary-dim dark:text-[#B5C7EB] font-bold mb-4">
                  {t(
                    "Palestrante: \"Testes inteligentes: O futuro da qualidade com IA e Python\"",
                    "Speaker: \"Smart Testing: The future of quality with AI and Python\""
                  )}
                </p>
                <p className="text-sm text-secondary dark:text-slate-400 max-w-2xl italic">
                  {t(
                    "\"Explorando a interseção entre automação de QA e algoritmos generativos para elevar o padrão da engenharia de software.\"",
                    "\"Exploring the intersection between QA automation and generative algorithms to raise the software engineering standard.\""
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
