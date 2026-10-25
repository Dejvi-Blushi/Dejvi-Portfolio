import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const title = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {y: 50, opacity: 0},
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {trigger: card}
        }
      );
    });

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
  }, []);

  return (
    <section id="projects" className="app-showcase mt-8 md:mt-0">
      <div className="w-full">
        <h1
          className="font-semibold md:text-5xl text-3xl text-center mb-6 md:mb-10"
          ref={title}
        >
          Projects I Have Shipped
        </h1>

        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <a href="https://real-estate-app-dejvi.vercel.app">
              <div className="image-wrapper card-border rounded-lg p-10">
                <img
                  src={`${import.meta.env.BASE_URL}images/project1.png`}
                  alt="T&T Real Estate"
                />
              </div>
            </a>

            <div className="text-content">
              <h2 className="text-center">T&T Real Estate</h2>
            </div>
          </div>

          <div className="project-list-wrapper">
            <div className="project" ref={project2Ref}>
              <a href="https://crypto-app-dejvi.vercel.app">
                <div className="image-wrapper card-border rounded-lg p-10">
                  <img
                    src={`${import.meta.env.BASE_URL}images/project2.png`}
                    alt="CryptoApp"
                  />
                </div>
              </a>

              <h2 className="text-center">CryptoApp</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <a href="https://dejvi-blushi.github.io/Naruto-Storm-2-DEMO">
                <div className="image-wrapper card-border rounded-lg p-10">
                  <img
                    src={`${import.meta.env.BASE_URL}images/project3.png`}
                    alt="Naruto Storm 2 DEMO"
                  />
                </div>
              </a>

              <h2 className="text-center">Naruto Storm 2 DEMO (React)</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
