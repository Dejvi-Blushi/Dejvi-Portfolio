import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import TechLogos from "../components/TechModels/TechLogos";
import {SkillsLogos} from "../constants/constants";
import {useRef} from "react";

export default function TechStack() {
  const title = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {y: 50, opacity: 0},
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.6,
        stagger: 0.2,
        scrollTrigger: {trigger: "#skills"}
      }
    );

    gsap.fromTo(
      title.current,
      {opacity: 0},
      {
        opacity: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {trigger: title.current}
      }
    );
  });

  return (
    <section id="skills" className="section-padding">
      <div className="w-full h-full md:px-10">
        <h1
          className="font-semibold md:text-5xl text-3xl text-center mb-6 md:mb-10"
          ref={title}
        >
          My Tools of the Trade
        </h1>

        <div className="flex flex-wrap justify-center xl:gap-10 md:gap-6 gap-5">
          {SkillsLogos.map((model) => (
            <div
              key={model.name}
              className="card-border tech-card overflow-hidden group rounded-lg xl:w-[calc(20%-32px)] lg:w-[calc(25%-18px)] md:w-[calc(33.3333%-16px)] w-full flex-none"
              tabIndex={0}
            >
              <div className="tech-card-content">
                <figure className="tech-icon-wrapper">
                  <TechLogos model={model} />
                </figure>

                <div className="w-full">
                  <p>{model.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
