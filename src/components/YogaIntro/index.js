import './index.css';
import Header from '../Header';
import { Component } from 'react';
import Slider from 'react-slick'; 

const yogaData = [
  {
    "title": "PATANJALI YOGA-SUTRAS",
    "titleImage": "https://sanskrit.ie/images/ayurveda.png",
    "description": "A few thousand years ago, Patañjali, a sage from India, developed a scientific step-by-step approach to lead ordinary human beings from the common experience of chaos, confusion and negative emotions to the highest level of well-being. This manual contains 196 statements (sūtras) in four chapters.",
    "image": "https://sanskrit.ie/images/yoga_1.png"
  }
];

class YogaIntro extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className='ayurveda-intro-main-container'>
        <Header />
        <div className='yoga-image-main-container'>
          <h1 className='intro-heading'>INTRODUCTION</h1>
        </div>
        <div className='section-container'>
          {yogaData.map(item => (
            <div key={item.title} className='section-card'>
              <div className='planet-title-container'>
                <img
                  src={item.titleImage}
                  alt={item.title}
                  className='section-title-image'
                />
                <h2 className='section-title'>{item.title}</h2>
              </div>
              <p className='section-description'>{item.description}</p>
              <div className='slider-container'>
                <Slider {...sliderSettings}>
                  <div className='images-container-healthy'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='carousel-image'
                    />
                  </div>
                </Slider>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default YogaIntro;
