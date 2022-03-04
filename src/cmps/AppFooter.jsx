import React from "react";
import linkedin from "../assets/images/icons/footer-icons/linkedin-btn.png";
import youtube from "../assets/images/icons/footer-icons/youtube-btn.png";
import whatsapp from "../assets/images/icons/footer-icons/whatsapp-btn.png";
import { ReactComponent as Logo } from "../assets/images/icons/footer-icons/logo.svg";
import { Link } from "react-router-dom";

export function AppFooter() {

  return (
    <footer className="footer full">
      <div className="footer-content main-layout">
        <div className="flex space-between">
          <div className="footer-logo" >
            <Logo/>
          </div>
          <div className="main-pages flex column">
            <h3 className="footer-title">עמודים מרכזיים</h3>
            <Link to='/'><span>עמוד הבית</span></Link>
            <Link to='/'><span>אודות</span></Link>
            <Link to='/events'><span>דף ארועים</span></Link>
            <Link to='/jobs'><span>דף משרות</span></Link>
            <Link to='/'><span>טיפים ומידע</span></Link>
          </div>
          <div className="community-management flex column">
            <h3 className="footer-title">ניהול קהילה</h3>
            <Link to='/projects'><span>מערכת ניהול</span></Link>
          </div>
          <div className="footer-socials">
            <h3 className="footer-title"> עקבו אחרינו</h3>
            <div className="socials-icons flex align-center justify-center">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                <img src={linkedin} alt="linkedin-btn" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                <img src={youtube} alt="youtube-btn" />
              </a>
              <a
                href="https://whatsapp.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                <img src={whatsapp} alt="whatsapp-btn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
