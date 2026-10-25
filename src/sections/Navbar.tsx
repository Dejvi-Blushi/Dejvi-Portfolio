import {useEffect, useState} from "react";
import {navLinks} from "../constants/constants";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".navbar",
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
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled && "scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Dejvi Blushi
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({link, name}) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>
                    {name}
                    <span className="underline" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}
