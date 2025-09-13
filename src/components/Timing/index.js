import './index.css';
import Header from '../Header';
import { Component } from 'react';

const healthyData = [
  {
    "title": "A healthy lifestyle",
    "items": [
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757651177/time-1_bwkqtl.png",
        "description": "Get physical"
      },
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757651180/time-2_iersu7.png",
        "description": "Stop for a little peace"
      },
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757651184/time-3_vs48cy.png",
        "description": "There is a time for everything"
      },
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757651199/time-4_kwmmjm.png",
        "description": "Sleep"
      }
    ]
  }
];

class Timing extends Component {
  render() {
    return (
      <div className='timing-intro-main-container'>
        <Header />
        <div className='timing-image-main-container'>
          <h1 className='time-heading'>TIMING</h1>
        </div>
        {healthyData.map(section => (
          <div key={section.title} className="healthy-section">
            <h2 className="healthy-title">{section.title}</h2>
            <div className="healthy-items">
              {section.items.map((item, index) => (
                <div key={index} className="healthy-card">
                  <img
                    src={item.imageUrl}
                    alt={item.description}
                    className="healthy-image"
                  />
                  <p className="healthy-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Timing;
