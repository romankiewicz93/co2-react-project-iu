import React, { useState, useEffect } from "react";
import "./LocalLinks.css";

const LocalLinks = () => {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const lang = navigator.language;
    setIsRTL(/^(ar|he)$/.test(lang));
    const ulElement = document.querySelector(".local-links ul");
    if (ulElement) {
      if (isRTL) {
        ulElement.classList.add("flex-row-reverse");
      } else {
        ulElement.classList.remove("flex-row-reverse");
      }
    }
  }, [isRTL]);

  return (
    <nav className="local-links">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-unstyled d-flex flex-sm-row flex-column mt-4">
              <li className="nav-item me-3">
                <a href="#home" className="nav-link">
                  Datenverzeichnis
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#about" className="nav-link">
                  Datenexport
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#services" className="nav-link">
                  Datenimport
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#company" className="nav-link">
                  Hilfe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LocalLinks;
