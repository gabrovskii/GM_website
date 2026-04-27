"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const timelineItems = [
    {
      title: { pt: "Desenvolvedor Pleno", en: "Mid-Level Software Developer" },
      period: { pt: "2021 - Presente", en: "2021 - Present" },
      company: "INDT / Motorola",
      description: {
        pt: "Coordenação técnica de times e treinamentos entre unidades; arquitetura de automação Android e IA; gestão documental para certificações e fiscalização de P&D; viagens estratégicas e suporte técnico presencial.",
        en: "Technical coordination of teams and cross-unit training; Android and AI automation architecture; document management for R&D certifications and compliance; strategic travel and on-site technical support.",
      },
      current: true,
    },
    {
      title: { pt: "Desenvolvedor Júnior", en: "Junior Software Developer" },
      period: { pt: "2020 - 2021", en: "2020 - 2021" },
      company: "INDT / Motorola",
      description: {
        pt: "Recrutamento técnico e treinamentos; liderança de squad e gestão de entregas; planejamento estratégico de QA e definição de novos processos de validação.",
        en: "Technical recruitment and training; squad leadership and delivery management; strategic QA planning and definition of new validation processes.",
      },
      current: false,
    },
    {
      title: { pt: "Trainee de Desenvolvimento", en: "Software Developer Trainee" },
      period: { pt: "2019 - 2020", en: "2019 - 2020" },
      company: "INDT / Motorola",
      description: {
        pt: "Planejamento, execução e report; gerenciamento do ciclo de vida de bugs, análise de riscos técnicos e definição de estratégias de teste.",
        en: "Planning, execution, and reporting; bug lifecycle management, technical risk analysis, and test strategy definition.",
      },
      current: false,
    },
    {
      title: { pt: "Estágio em Testes de Software", en: "Software Testing Intern" },
      period: { pt: "2018 - 2019", en: "2018 - 2019" },
      company: "INDT / Motorola",
      description: {
        pt: "Automação de testes em sistemas Android e validações acústicas para sistemas de assistentes virtuais.",
        en: "Test automation for Android systems and acoustic validation for virtual assistant systems.",
      },
      current: false,
    },
  ];

  const skills = [
    "Python", "Java", "Bash / Shell Script", "UI Automator", "Gemini CLI",
    "Local LLMs", "AI-Assisted QA", "Jenkins", "Git (Gerrit/GitLab)",
    "Git Bug2go", "Jira / Confluence"
  ];

  return (
    <section className="py-24 px-8 bg-surface dark:bg-brand-dark" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-black text-on-surface dark:text-white mb-4 uppercase tracking-tighter">
            {t("Experiência Profissional", "Experience")}
          </h2>
          <div className="w-16 h-1 bg-primary dark:bg-brand-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-24">
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {[2, 4, 6, 3].map((num) => (
                <div key={num} className="aspect-square rounded-xl overflow-hidden bg-surface-container dark:bg-[#1b2027] shadow-sm group relative">
                  <Image
                    src={`/assets/images/${num}.jpg`}
                    alt="Python Evento"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-6">
              <p className="font-body text-lg text-secondary dark:text-slate-300 leading-relaxed">
                {t(
                  "Sou graduado em Ciência da Computação e ",
                  "I hold a degree in Computer Science and specialize in "
                )}
                <span className="text-primary dark:text-brand-accent font-bold">
                  {t("Especialista em Qualidade de Software", "Software Quality")}
                </span>
                {t(
                  ", com 7 anos de trajetória no ciclo completo de QA. Minha experiência abrange desde testes manuais e acústicos para certificações internacionais até a ",
                  ", with over 7 years of experience across the full QA lifecycle. My background spans from manual and acoustic testing for international certifications to "
                )}
                <span className="font-bold">
                  {t("liderança técnica de times", "technical team leadership")}
                </span>
                {t(
                  ", sendo responsável por planejamentos e gestão de talentos em fluxos de trabalho globais.",
                  ", where I manage planning and talent within global workflows."
                )}
              </p>
              <p className="font-body text-lg text-secondary dark:text-slate-300 leading-relaxed">
                {t(
                  "Atualmente, foco minha atuação na ",
                  "Currently, my focus is on "
                )}
                <span className="font-bold">
                  {t("automação de processos e no ecossistema Android", "process automation and the Android ecosystem")}
                </span>
                {t(
                  ", integrando tecnologias modernas ao dia a dia. Aplico modelos de linguagem locais e ferramentas de linha de comando (CLI) para escalar a eficiência dos testes, unindo agilidade e rigor técnico para resolver desafios de alta complexidade.",
                  ", integrating modern technologies into daily operations. I leverage local LLMs and CLI tools to scale testing efficiency, combining agility with technical rigor to solve high-complexity challenges."
                )}
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: { pt: "Graduação", en: "Education" }, value: { pt: "Ciência da Computação", en: "Computer Science" } },
                { label: { pt: "Especialização", en: "Specialization" }, value: { pt: "Qualidade de Software", en: "Software Quality" } },
                { label: { pt: "Sistemas", en: "Systems" }, value: { pt: "Automação em Android", en: "Android Automation" } },
                { label: { pt: "Idiomas", en: "Languages" }, value: { pt: "Português / Inglês", en: "Portuguese / English" } },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="font-headline text-2xl font-black text-primary dark:text-brand-accent">{t(item.label.pt, item.label.en)}</span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline dark:text-slate-400">
                    {t(item.value.pt, item.value.en)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10"></div>
            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative pl-16 group">
                <div className={`absolute left-4 top-2 w-4 h-4 rounded-full border-4 border-surface dark:border-brand-dark ${item.current ? "bg-primary dark:bg-brand-accent" : "bg-slate-400 dark:bg-[#424851]"} group-hover:bg-primary dark:group-hover:bg-brand-accent group-hover:scale-125 transition-all z-10`}></div>
                <div className="bg-surface dark:bg-[#111418] p-6 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline font-bold text-on-surface dark:text-white">
                      {t(item.title.pt, item.title.en)}
                    </h3>
                    <span className={`font-label text-[10px] font-bold ${item.current ? "text-primary dark:text-brand-accent" : "text-slate-400 dark:text-slate-500"} uppercase`}>
                      {t(item.period.pt, item.period.en)}
                    </span>
                  </div>
                  <p className="text-sm text-secondary dark:text-slate-300 mb-4">{item.company}</p>
                  <p className="text-sm text-secondary dark:text-slate-400 leading-relaxed">
                    {t(item.description.pt, item.description.en)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-surface dark:bg-[#111418] rounded-xl border border-slate-100 dark:border-white/5">
              <h4 className="font-headline font-bold mb-6 flex items-center gap-2 text-on-surface dark:text-white">
                <span className="material-symbols-outlined text-primary dark:text-brand-accent">terminal</span>
                {t("Stack Técnica", "Technical Stack")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-surface-container dark:bg-[#1b2027] text-xs font-bold rounded-full dark:text-[#a5abb6]">{skill}</span>
                ))}
              </div>
            </div>
            <div className="p-8 bg-primary dark:bg-[#1b2027] text-on-primary dark:text-brand-accent rounded-xl shadow-md border dark:border-white/5">
              <h4 className="font-headline font-bold mb-6 flex items-center gap-2 text-white dark:text-brand-accent">
                <span className="material-symbols-outlined">verified</span>
                {t("Certificações", "Certifications")}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-sm mt-1 text-white dark:text-brand-accent">check_circle</span>
                  <p className="text-sm font-bold text-white dark:text-[#e0e6f1]">Scrum Foundation Professional</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-sm mt-1 text-white dark:text-brand-accent">check_circle</span>
                  <p className="text-sm font-bold text-white dark:text-[#e0e6f1]">
                    {t("Especialista em Qualidade (IFAM)", "Quality Specialist (IFAM)")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
