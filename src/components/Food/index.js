import './index.css'; 

import Header from '../Header'; 

import { Component }  from 'react'; 

const sevenDhatusData = [
  {
    "title": "Seven dhatus", 
    "items": [
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757652555/seven-1_xf4x8j.png",
        "title": "Plasma"
      },
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757652565/seven-2_h5yase.png",
        "title": "Blood"
      },
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757652576/seven-3_meccsr.png",
        "title": "Muscle"
      },
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757652584/seven-4_w8sjnu.png",
        "title": "Fat"
      },
      {
        "imageUrl": "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757652593/seven-6_rtgoea.png",
        "title": "Bone"
      }
    ]
  }
];


class Food extends Component {
    render(){
        return(
       <div className='timing-intro-main-container'>
        <Header />
        <div className='food-image-main-container'>
          <h1 className='time-heading'>FOOD</h1> 
        </div>
        {sevenDhatusData.map(section => (
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
        )
    }
}

export default Food; 