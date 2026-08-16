import React from 'react';

const whyDonateData = [
  {
    id: 1,
    overline: "Pourquoi donner ?",
    title: "Urgences & Accidents",
    subtitle: "Transfusion d'urgence vitale",
    description: "Prise en charge vitale et immédiate des victimes d'accidents de la route nécessitant des transfusions massives dans les services d'urgence (CNHU, CHUD).",
    image: "/step-1.jpg", 
    textColor: "text-blood-600"
  },
  {
    id: 2,
    overline: "Impact Vital",
    title: "Santé Maternelle",
    subtitle: "Sauver les mères et nouveau-nés",
    description: "Lutte directe contre les hémorragies de la délivrance lors des accouchements, qui constituent la première cause de mortalité maternelle au Bénin.",
    image: "/step-2.jpg", 
    textColor: "text-blood-600"
  },
  {
    id: 3,
    overline: "Soutien Continu",
    title: "Drépanocytose & Cancers",
    subtitle: "Traitements chroniques réguliers",
    description: "Accompagnement continu des enfants et adultes drépanocytaires par des échanges transfusionnels réguliers pour prévenir les crises vaso-occlusives.",
    image: "/step-3.jpg", 
    textColor: "text-blood-600"
  }
];

export default function WhyDonate() {
  return (
    <section id="pourquoi-donner" className="hemo-container mt-10 sm:mt-12">
      <div>
        {/* Conteneur Stacking Cards au Scroll */}
        <div className="relative space-y-16 sm:space-y-24 pb-8 mb-16 mt-4">
          {whyDonateData.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.id}
                className="transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  
                  {/* Partie Texte (5/12) */}
                  <div
                    className={`lg:col-span-5 bg-white p-8 sm:p-10 md:p-12 flex flex-col justify-center min-h-[320px] lg:min-h-[400px] 
                    rounded-t-[32px] rounded-b-none border-b-0 pb-12 sm:pb-14 lg:pb-12
                    ${
                      isEven
                        ? 'lg:order-2 lg:rounded-none lg:rounded-r-[32px] lg:border-b lg:border-l-0 lg:pl-14'
                        : 'lg:order-1 lg:rounded-none lg:rounded-l-[32px] lg:border-b lg:border-r-0 lg:pr-14'
                    }`}
                  >
                    <div>
                      {/* Overline contextuel pour remplacer le titre global */}
                      <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500 bg-blood-gray-100 rounded-lg">
                        {item.overline}
                      </span>

                      {/* Title & Subtitle */}
                      <h3 className="font-bold text-zinc-950 text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className={`mt-2 text-sm sm:text-base font-bold uppercase tracking-wide ${item.textColor}`}>
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="mt-6 text-sm sm:text-base text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Partie Image (7/12) */}
                  <div
                    className={`lg:col-span-7 relative h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden rounded-[32px] z-10 
                    -mt-6 sm:-mt-8 lg:mt-0
                    ${
                      isEven
                        ? 'lg:order-1 lg:-mr-8'
                        : 'lg:order-2 lg:-ml-8'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-blood-gray-950/5 hover:bg-transparent transition-colors duration-500" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
