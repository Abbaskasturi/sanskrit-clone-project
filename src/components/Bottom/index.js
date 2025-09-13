import { useState } from 'react';
import { FaRegCompass } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LiaFacebook } from "react-icons/lia";
import { TfiYoutube } from "react-icons/tfi";
import './index.css';

const Bottom = () => {
    const [iconsValues, setIconsValues] = useState({
        facebook: false,
        twitter: false,
        youtube: false,
        compass: false,
    });

    const handleIconClick = (iconName) => {
        setIconsValues(prevState => ({
            ...prevState,
            [iconName]: !prevState[iconName] 
        }));
    };

    return(
        <div className='bottom-container-main'>
            <div className='social-media-container'>
                <p className='connect-para'>Connect</p>
                
                <a href="https://www.facebook.com/rutger.kortenhorst" target="_blank" rel="noopener noreferrer">
                    <LiaFacebook 
                        className={`social-icons ${iconsValues.facebook ? 'social-icons-clicked' : ''}`} 
                        onClick={() => handleIconClick('facebook')} 
                    />
                </a>
            
                <a href="https://x.com/RutgerSanskrit" target="_blank" rel="noopener noreferrer">
                    <FaTwitter 
                        className={`social-icons ${iconsValues.twitter ? 'social-icons-clicked' : ''}`} 
                        onClick={() => handleIconClick('twitter')} 
                    />
                </a>
                <a href="https://www.youtube.com/@RutgerKortenhorst" target="_blank" rel="noopener noreferrer">
                    <TfiYoutube 
                        className={`social-icons ${iconsValues.youtube ? 'social-icons-clicked' : ''}`} 
                        onClick={() => handleIconClick('youtube')} 
                    />
                </a>
                

                <a href="https://www.johnscottus.ie/" target="_blank" rel="noopener noreferrer">
                    <FaRegCompass 
                        className={`social-icons ${iconsValues.compass ? 'social-icons-clicked' : ''}`} 
                        onClick={() => handleIconClick('compass')} 
                    />
                </a>
            </div>
            <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757523573/logo-image_qdqndw.png' className='logo-image-bottom' alt='logo'/>
            <h1 className='well-heading'>
                WELLBEING~SVASTI
            </h1>
            <p className='copy-right'>
                © 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by
            </p>
            <span className='spaning-name'>
                Burning Desire Inclusive
            </span>
        </div>
    );
};

export default Bottom;