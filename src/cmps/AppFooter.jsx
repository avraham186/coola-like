import React from "react";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import linkedin from "../assets/images/icons/footer-icons/linkedin-btn.png";
import youtube from "../assets/images/icons/footer-icons/youtube-btn.png";
import whatsapp from "../assets/images/icons/footer-icons/whatsapp-btn.png";

import logo from "../assets/images/icons/footer-icons/logo.svg";
import { Link } from "react-router-dom";

export function AppFooter() {

  return (
    <footer className="footer full">
      <div className="footer-content main-layout">
        <div className="flex space-between">
          <div className="footer-logo" >
            <img src={logo} alt="logo" />
          </div>
          <div className="main-pages flex column">
            <h3 className="footer-title">עמודים מרכזיים</h3>
            <Link to='/'><span>עמוד הבית</span></Link>
            <Link to='/'><span>אודות</span></Link>
            <Link to='/events'><span>דך ארועים</span></Link>
            <Link to='/projects'><span>דף משרות</span></Link>
            <Link to='/'><span>טיפים ומידע</span></Link>
          </div>
          <div className="community-management flex column">
            <h3 className="footer-title">ניהול קהילה</h3>
            <Link to='/'><span>מערכת ניהול</span></Link>
          </div>
          <div className="footer-socials">
            <h3 className="footer-title"> עקבו אחרינו</h3>
            <div className="socials-icons flex align-center justify-center">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="footer-social"
              >
                <img src={linkedin} alt="linkedin-btn" />
                {/* <LinkedInIcon className="uil uil-linkedin-f" /> */}
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="footer-social"
              >
                <img src={youtube} alt="youtube-btn" />
                {/* <YouTubeIcon className="uil uil-youtube" /> */}
              </a>
              <a
                href="https://whatsapp.com/"
                target="_blank"
                className="footer-social"
              >
                <img src={whatsapp} alt="whatsapp-btn" />
                {/* <WhatsAppIcon className="uil uil-whatsap-alt" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // <footer className="footer full">
    //   <div className="footer__bg">
    //     <div className="footer__container">
    //       {/* <div className="footer__container container grid"> */}
    //       <div className="logo">
    //         <img src={logo} alt="logo" />
    //       </div>

    //       <div className="footer-column">
    //         <h3 className="footer-title">עמודים מרכזיים</h3>
    //         <Link to='/'><span>עמוד הבית</span></Link>
    //         <Link to='/'><span>עלינו</span></Link>
    //         <Link to='/events'><span>דך ארועים</span></Link>
    //         <Link to='/projects'><span>דף משרות</span></Link>
    //         <Link to='/'><span>טיפים ומידע</span></Link>
    //       </div>

    //       <div className="footer-column">
    //         <h3 className="footer-title">ניהול קהילה</h3>
    //         <Link to='/'><span>מערכת ניהול</span></Link>
    //       </div>

    //       <div className="footer__socials">
    //         <h3 className="footer-title"> עקבו אחרינו</h3>
    //         <div className="socials-icons">
    //           <a
    //             href="https://www.linkedin.com/"
    //             target="_blank"
    //             className="footer__social"
    //           >
    //             <LinkedInIcon className="uil uil-facebook-f" />
    //           </a>
    //           <a
    //             href="https://www.youtube.com/"
    //             target="_blank"
    //             className="footer__social"
    //           >
    //             <YouTubeIcon className="uil uil-instagram" />
    //           </a>
    //           <a
    //             href="https://whatsapp.com/"
    //             target="_blank"
    //             className="footer__social"
    //           >
    //             <WhatsAppIcon className="uil uil-twitter-alt" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <p className="footer__copy">&#169; All right reserved</p>
    //   </div>
    // </footer>
  );
}
