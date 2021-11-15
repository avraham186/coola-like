import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../assets/images/home-page-imgs/coola_like_logo.png";

export function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer__bg ">
        <div className="footer__container container grid">
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="footer__social"
            >
              <LinkedInIcon className="uil uil-facebook-f" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="footer__social"
            >
              <YouTubeIcon className="uil uil-instagram" />
            </a>
            <a
              href="https://whatsapp.com/"
              target="_blank"
              className="footer__social"
            >
              <WhatsAppIcon className="uil uil-twitter-alt" />
            </a>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>

        <p className="footer__copy">&#169; All right reserved</p>
      </div>
    </footer>
  );
}
