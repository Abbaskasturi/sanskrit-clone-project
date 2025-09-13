import { Component } from 'react';
import Slider from "react-slick";
import Header from '../Header';
import './index.css';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const healthData = [
  {
    "title": "Healthy",
    "titleImage": {
      "url": "https://sanskrit.ie/images/ayurveda.png",
      "alt": "Healthy"
    },
    "description": "Those who have balanced doṣas, agnis, dhātus and malas and who have a sense of well-being in themselves, their mind and their senses – are called HEALTHY.",
    "carouselImages": [
      {
        "id": 1,
        "url": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757644134/heath-1_rxu2j2.png",
        "alt": "General wellness"
      },
      {
        "id": 2,
        "url": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757644185/health-vata-2_xmiznk.jpg",
        "alt": "Balance of Vata"
      },
      {
        "id": 3,
        "url": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757644218/health-muscles-1_dzq1hh.png",
        "alt": "Muscle health"
      },
      {
        "id": 4,
        "url": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757644247/stomach-1_izlpwo.png",
        "alt": "Digestive wellness"
      }
    ]
  }
];

const dosasData = [
  {
    "title": "Dosas",
    "description": "Doṣas are three energies - vāta energy reflects characteristics of the wind, pitta energy reflects qualities of fire; and kapha energy reflects the nature of water. These energies make us behave in a particular way and affect the nature of movement, transformation and structures in our body.",
    "image1": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757645381/lion-2_rjx8yx.png",
    "image2": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757645519/elephant-2_vhzbv5.png",
    "image3": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757645474/monkey-2_hcd3rq.png"
  }
];

class AyurvedaIntro extends Component {
  render() {
   
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <div className='ayurveda-intro-main-container'>
        <Header />
        <div className='food-image-main-container'>
          <h1 className='intro-heading'>INTRODUCTION</h1>
        </div>
        <div className='section-container'>
          {healthData.map(item => (
            <div key={item.title} className='section-card'>
              <div className='planet-title-container'>
              <img
                src={item.titleImage.url}
                alt={item.titleImage.alt}
                className='section-title-image'
              />
              <h2 className='section-title'>{item.title}</h2>
            </div>
              <p className='section-description'>{item.description}</p>
              <div className='slider-container'>

              <Slider {...sliderSettings}>
                {item.carouselImages.map(img => (
                  <div key={img.id} className='images-container-healthy'>
                    <img
                      src={img.url}
                      alt={img.alt}
                      className='carousel-image'
                    />
                  </div>
                ))}
              </Slider>
            </div>
            </div>
          ))}
        </div>
        <div className='section-container'>
          {dosasData.map(item => (
            <div key={item.title} className='section-card'>
              <h2 className='section-title'>{item.title}</h2>
              <p className='section-description'>{item.description}</p>
              <div className='dosas-images-container'>
                <img src={item.image1} alt="Vāta energy" className='dosas-image' />
                <img src={item.image2} alt="Kapha energy" className='dosas-image' />
                <img src={item.image3} alt="Pitta energy" className='dosas-image' />
              </div>
            </div>
          ))}
        </div>
        <div className='sense-container'>
            <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757648648/senses_tsexml.png' alt='bottom-image' className='bottom-image'/>
        </div>
      </div>
    );
  }
}

export default AyurvedaIntro;
