import {useState, useEffect} from "react";
import {words} from "../constants/constants";
import HeroScene from "../components/HeroModels/HeroScene";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {y: 50, opacity: 0},
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        delay: 1,
        ease: "power2.inOut"
      }
    );

    gsap.fromTo(
      [".button-child", ".hero-p"],
      {opacity: 0},
      {
        opacity: 1,
        duration: 1.4,
        delay: 0.4,
        ease: "power2.inOut"
      }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/hero-bg.png" alt="hero background" />
      </div>

      <div className="hero-layout">
        <div className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none tracking-tight">
              <h1>
                <span>Building&nbsp;</span>

                <span className="relative inline-flex min-w-37.5 md:min-w-62.5">
                  {words.map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className={`absolute left-0 top-0 transition-opacity duration-700 ease-in-out whitespace-nowrap ${
                        index === wordIndex
                          ? "opacity-100 relative"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none hero-p">
              Hi, I'm Dejvi, a web developer based in Albania with a passion for
              coding.
            </p>

            <a
              href="#projects"
              className="md:w-80 md:h-16 w-60 h-12 button-child cta-wrapper"
            >
              <div className="cta-button group">
                <div className="bg-circle" />

                <span>See my Work</span>

                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <figure>
          <HeroScene />
        </figure>
      </div>
    </section>
  );
}
