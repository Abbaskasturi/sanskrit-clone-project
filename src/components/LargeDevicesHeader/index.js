import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LargeDevicesHeader = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  return (
    <div className="large-devices-header-container">
      <div className="merged-large-container">
        <Link to="/logo" className="text-link">
          <img
            src="https://res.cloudinary.com/dsp32vyqi/image/upload/v1757433724/logo_zk3hbv.png"
            alt="logo-large"
            className="logo-image-large"
          />
        </Link>

        <div className="sections-links-container-large">
          <Link to="/search" className="text-link">
            <div className="search-bar-container-large">
              <FaSearch
                className={`search-bar-icon-large ${
                  activeMenu === "searchbar" ? "active-name" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("searchbar")}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </Link>
          <div
            className="menu-item-container"
            onMouseEnter={() => handleMouseEnter("ayurveda")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="both-name-icon-container">
              <p
                className={`section-name ${
                  activeMenu === "ayurveda" ? "active-name" : ""
                }`}
              >
                AYURVEDA
              </p>
              <FaAngleDown
                className={`ayur-icon ${
                  activeMenu === "ayurveda" ? "active-name" : ""
                }`}
              />
            </div>
            {activeMenu === "ayurveda" && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter("ayurveda")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/ayurvedaintro" className="text-link">
                  <p className="intro-paragraph">Introduction</p>
                </Link>
                <Link to="/timing" className="text-link">
                  <p className="timing-paragraph">Timing</p>
                </Link>
                <Link to="/food" className="text-link">
                  <p className="food-paragraph">Food</p>
                </Link>
              </div>
            )}
          </div>
          <div
            className="menu-item-container"
            onMouseEnter={() => handleMouseEnter("yogasutras")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="both-name-icon-container">
              <p
                className={`section-name ${
                  activeMenu === "yogasutras" ? "active-name" : ""
                }`}
              >
                YOGASUTRAS
              </p>
              <FaAngleDown
                className={`ayur-icon ${
                  activeMenu === "yogasutras" ? "active-name" : ""
                }`}
              />
            </div>
            {activeMenu === "yogasutras" && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter("yogasutras")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/yogaintro" className="text-link">
                  <p className="intro-paragraph">Introduction</p>
                </Link>
                <Link to="/obstacles" className="text-link">
                  <p className="timing-paragraph">Obstacles</p>
                </Link>
                <Link to="/practices" className="text-link">
                  <p className="food-paragraph">Practices</p>
                </Link>
                <Link to="/yogasana" className="text-link">
                  <p className="food-paragraph">Yogasana</p>
                </Link>
                <Link to="/glossary" className="text-link">
                  <p className="food-paragraph">Glossary</p>
                </Link>
              </div>
            )}
          </div>
          <div
            className="menu-item-container"
            onMouseEnter={() => handleMouseEnter("bhagavad")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/home" className="text-link">
              <div className="both-name-icon-container">
                <p
                  className={`section-name ${
                    activeMenu === "bhagavad" ? "active-name" : ""
                  }`}
                >
                  BHAGAVAD GITA
                </p>
              </div>
            </Link>
          </div>
          <div
            className="menu-item-container"
            onMouseEnter={() => handleMouseEnter("upanisads")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="both-name-icon-container">
              <p
                className={`section-name ${
                  activeMenu === "upanisads" ? "active-name" : ""
                }`}
              >
                UPANISADS
              </p>
              <FaAngleDown
                className={`ayur-icon ${
                  activeMenu === "upanisads" ? "active-name" : ""
                }`}
              />
            </div>
            {activeMenu === "upanisads" && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter("upanisads")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/isopanisad" className="text-link">
                  <p className="intro-paragraph">ISOPANISAD</p>
                </Link>
                <Link to="/taittiri" className="text-link">
                  <p className="timing-paragraph">TAITTIRIYOPANISAD</p>
                </Link>
                <Link to="/mandu" className="text-link">
                  <p className="food-paragraph">MANDUKYOPANISAD</p>
                </Link>
                <Link to="/keno" className="text-link">
                  <p className="food-paragraph">KENOPANISAD</p>
                </Link>
                <Link to="/katho" className="text-link">
                  <p className="food-paragraph">KATHOPANISAD</p>
                </Link>
                <Link to="/aitar" className="text-link">
                  <p className="food-paragraph">AITAREYOPANISAD</p>
                </Link>
                <Link to="/munda" className="text-link">
                  <p className="food-paragraph">MUNDAKOPANISAD</p>
                </Link>
                <Link to="/prasno" className="text-link">
                  <p className="food-paragraph">PRASNOPANISAD</p>
                </Link>
              </div>
            )}
          </div>
          <div
            className="menu-item-container"
            onMouseEnter={() => handleMouseEnter("sanskrit")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="both-name-icon-container">
              <p
                className={`section-name ${
                  activeMenu === "sanskrit" ? "active-name" : ""
                }`}
              >
                SANSKRIT
              </p>
              <FaAngleDown
                className={`ayur-icon ${
                  activeMenu === "sanskrit" ? "active-name" : ""
                }`}
              />
            </div>
            {activeMenu === "sanskrit" && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter("sanskrit")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/devotional" className="text-link">
                  <p className="intro-paragraph">Devotional Songs</p>
                </Link>
                <Link to="/grammar" className="text-link">
                  <p className="timing-paragraph">Grammar Songs</p>
                </Link>
                <Link to="/funsongs" className="text-link">
                  <p className="food-paragraph">Fun Songs</p>
                </Link>
                <Link to="/script" className="text-link">
                  <p className="food-paragraph">Script Songs</p>
                </Link>
                <Link to="/glossarysongs" className="text-link">
                  <p className="food-paragraph">Glossary</p>
                </Link>
              </div>
            )}
          </div>
          <div
            className="menu-item-container"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/contact" className="text-link">
              <div className="both-name-icon-container">
                <p
                  className={`section-name ${
                    activeMenu === "contact" ? "active-name" : ""
                  }`}
                >
                  CONTACT US
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeDevicesHeader;
