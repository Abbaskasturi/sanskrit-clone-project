import { useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import LargeDevicesHeader from "../LargeDevicesHeader";
import './index.css';

const Header = () => {
    const [state, setState] = useState(false);
    const [ayur, setAyur] = useState(false);
    const [yoga, setYoga] = useState(false);
    const [upanisads, setUpanisads] = useState(false);
    const [sanskrit, setSanskrit] = useState(false);
    const [bhagavad, setBhagavad] = useState(false);
    const [contact, setContact] = useState(false);

    const ayurTimeoutRef = useRef(null);
    const yogaTimeoutRef = useRef(null);
    const upanisadsTimeoutRef = useRef(null);
    const sanskritTimeoutRef = useRef(null);
    const bhagavadTimeoutRef = useRef(null);
    const contactTimeoutRef = useRef(null);

    const toggleThreeDots = () => {
        setState(prevState => !prevState);
    }

    const ayurMouseEnter = () => {
        if (ayurTimeoutRef.current) clearTimeout(ayurTimeoutRef.current);
        setAyur(true);
    }
    const ayurMouseLeave = () => {
        ayurTimeoutRef.current = setTimeout(() => setAyur(false), 200);
    }

    const yogaMouseEnter = () => {
        if (yogaTimeoutRef.current) clearTimeout(yogaTimeoutRef.current);
        setYoga(true);
    }
    const yogaMouseLeave = () => {
        yogaTimeoutRef.current = setTimeout(() => setYoga(false), 200);
    }

    const upanisadsMouseEnter = () => {
        if (upanisadsTimeoutRef.current) clearTimeout(upanisadsTimeoutRef.current);
        setUpanisads(true);
    }
    const upanisadsMouseLeave = () => {
        upanisadsTimeoutRef.current = setTimeout(() => setUpanisads(false), 200);
    }

    const sanskritMouseEnter = () => {
        if (sanskritTimeoutRef.current) clearTimeout(sanskritTimeoutRef.current);
        setSanskrit(true);
    }
    const sanskritMouseLeave = () => {
        sanskritTimeoutRef.current = setTimeout(() => setSanskrit(false), 200);
    }

    const bhagavadMouseEnter = () => {
        if (bhagavadTimeoutRef.current) clearTimeout(bhagavadTimeoutRef.current);
        setBhagavad(true);
    }
    const bhagavadMouseLeave = () => {
        bhagavadTimeoutRef.current = setTimeout(() => setBhagavad(false), 200);
    }

    const contactMouseEnter = () => {
        if (contactTimeoutRef.current) clearTimeout(contactTimeoutRef.current);
        setContact(true);
    }
    const contactMouseLeave = () => {
        contactTimeoutRef.current = setTimeout(() => setContact(false), 200);
    }

    return (
        <div>
            <div className='small-devices-view-header-container'>
                <div className='logo-dots-container'>
                    <Link to='/logo' className='links-text'>
                    <img
                        src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757433724/logo_zk3hbv.png'
                        alt='logo'
                        className='logo-image'
                    />
                    </Link>
                    <div className='three-dots-container' onClick={toggleThreeDots}>
                        <VscThreeBars className='three-dots-icon' />
                    </div>
                </div>

                {state && (
                    <div className='sections-links-container'>
                        <Link to='/search' className='links-text'>
                        <div className="search-bar-container">
                            <FaSearch className="search-bar-icon" />
                        </div>
                        </Link>
                        <div
                            className="ayurveda-name-container"
                            onMouseEnter={ayurMouseEnter}
                            onMouseLeave={ayurMouseLeave}
                        >
                            <div className="both-name-icon-container">
                                <p className={`section-name ${ayur ? 'active-name' : ''}`}>AYURVEDA</p>
                                <FaAngleDown className={`ayur-icon ${ayur ? 'active-name' : ''}`} />
                            </div>
                            {ayur && (
                                <div className="ayur-outer-container">
                                    <div className="ayurdeva-menu-card">
                                        <Link to='/ayurvedaintro' className='links-text'>
                                          <p className="intro-paragraph">Introduction</p>
                                        </Link>
                                        <Link to='/timing' className='links-text'>
                                           <p className="timing-paragraph">Timing</p>
                                        </Link>
                                        <Link to='/food' className='links-text'>
                                            <p className="food-paragraph">Food</p>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="yoga-name-container"
                            onMouseEnter={yogaMouseEnter}
                            onMouseLeave={yogaMouseLeave}
                        >
                            <div className="both-name-icon-container">
                                <p className={`section-name ${yoga ? 'active-name' : ''}`}>YOGASUTRAS</p>
                                <FaAngleDown className={`ayur-icon ${yoga ? 'active-name' : ''}`} />
                            </div>
                            {yoga && (
                                <div className="yoga-outer-container">
                                    <div className="ayurdeva-menu-card">
                                        <Link to='/yogaintro' className='links-text'>
                                            <p className="intro-paragraph">Introduction</p>
                                        </Link>
                                        <Link to='/obstacles' className='links-text'>
                                          <p className="timing-paragraph">Obstacles</p>
                                        </Link>
                                        <Link to='/practices' className='links-text'>
                                           <p className="food-paragraph">Practices</p>
                                        </Link>
                                        <Link to='/yogasana' className='links-text'>
                                           <p className="food-paragraph">Yogasana</p>
                                        </Link>
                                        <Link to='/glossary' className='links-text'>
                                          <p className="food-paragraph">Glossary</p>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="bhagavad-name-container"
                            onMouseEnter={bhagavadMouseEnter}
                            onMouseLeave={bhagavadMouseLeave}
                        >
                            <Link to='/home' className='links-text'>
                               <div className="both-name-icon-container">
                                  <p className={`section-name ${bhagavad ? 'active-name' : ''}`}>BHAGAVAD GITA</p>
                                  <FaAngleDown className={`ayur-icon ${bhagavad ? 'active-name' : ''}`} />
                                </div>
                            </Link>
                        </div>

                      
                        <div
                            className="upanisads-name-container"
                            onMouseEnter={upanisadsMouseEnter}
                            onMouseLeave={upanisadsMouseLeave}
                        >
                            <div className="both-name-icon-container">
                                <p className={`section-name ${upanisads ? 'active-name' : ''}`}>UPANISADS</p>
                                <FaAngleDown className={`ayur-icon ${upanisads ? 'active-name' : ''}`} />
                            </div>
                            {upanisads && (
                                <div className="upanisads-outer-container">
                                    <div className="ayurdeva-menu-card">
                                        <Link to='/isopanisad' className='links-text'>
                                            <p className="intro-paragraph">ISOPANISAD</p>
                                        </Link>
                                        <Link to='/taittiri' className='links-text'>
                                            <p className="timing-paragraph">TAITTIRIYOPANISAD</p>
                                        </Link>
                                        <Link to='/mandu' className='links-text'>
                                            <p className="food-paragraph">MANDUKYOPANISAD</p>
                                        </Link>
                                        <Link to='/keno' className='links-text'>
                                            <p className="food-paragraph">KENOPANISAD</p>
                                        </Link>
                                        <Link to='/katho' className='links-text'>
                                            <p className="food-paragraph">KATHAPANISAD</p>
                                        </Link>
                                        <Link to='/aitar' className='links-text'>
                                            <p className="food-paragraph">AITAREYOPANISAD</p>
                                        </Link>
                                        <Link to='/munda' className='links-text'>
                                           <p className="food-paragraph">MUNDAKOPANISAD</p>
                                        </Link>
                                        <Link to='/prasno' className='links-text'>
                                           <p className="food-paragraph">PRASNOPANISAD</p>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                
                        <div
                            className="sanskrit-name-container"
                            onMouseEnter={sanskritMouseEnter}
                            onMouseLeave={sanskritMouseLeave}
                        >
                            <div className="both-name-icon-container">
                                <p className={`section-name ${sanskrit ? 'active-name' : ''}`}>SANSKRIT</p>
                                <FaAngleDown className={`ayur-icon ${sanskrit ? 'active-name' : ''}`} />
                            </div>
                            {sanskrit && (
                                <div className="sanskrit-outer-container">
                                    <div className="ayurdeva-menu-card">
                                        <Link to='/devotional' className='links-text'>
                                           <p className="intro-paragraph">Devotional Songs</p>
                                        </Link>
                                        <Link to='/grammar' className='links-text'>
                                           <p className="timing-paragraph">Grammar Songs</p>
                                        </Link>
                                        <Link to='/funsongs' className='links-text'>
                                           <p className="food-paragraph">Fun Songs</p>
                                        </Link>
                                        <Link to='/script' className='links-text'>
                                          <p className="food-paragraph">Script Songs</p>
                                        </Link>
                                        <Link to='/glossarysongs' className='links-text'>
                                          <p className="food-paragraph">Glossary</p>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="contact-name-container"
                            onMouseEnter={contactMouseEnter}
                            onMouseLeave={contactMouseLeave}
                        >
                            <Link to='/contact' className='links-text'>
                            <div className="both-name-icon-container">
                                <p className={`section-name ${contact ? 'active-name' : ''}`}>CONTACT US</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <div className="large-devices-header-container">
                <LargeDevicesHeader />
            </div>
        </div>
    );
};

export default Header;
