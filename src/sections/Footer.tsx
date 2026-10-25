import {socials} from "../constants/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start" />

        <div className="socials">
          {socials.map((social) => (
            <a
              className="icon"
              target="_blank"
              href={social.url}
              key={social.name}
            >
              <img src={social.imgPath} alt="" width="20" height="20" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Dejvi Blushi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
