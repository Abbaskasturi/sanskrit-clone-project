import './index.css';
import Header from '../Header';
import { Component } from 'react';

const knowledgeData = [
  {
    title: "Movements in the mind: five types of knowledge",
    titleImage: "https://sanskrit.ie/images/ayurveda.png",
    subItems: [
      {
        object: {
          headingTitle: "observing a scene",
          imageUrlSub: "https://sanskrit.ie/images/Picture42.png",
          bottomHeading: "direct cognition"
        }
      },
      {
        object: {
          headingTitle: "inferring fire from smoke",
          imageUrlSub: "https://sanskrit.ie/images/Picture43.png",
          bottomHeading: "inference"
        }
      },
      {
        object: {
          headingTitle: "wisdom",
          imageUrlSub: "https://sanskrit.ie/images/Picture44.png",
          bottomHeading: "testimony from authority"
        }
      }
    ]
  }
];

class Obstacles extends Component {
  render() {
    return (
      <div className="knowledge-wrapper">
        <Header />

        <div className="obstacle-image-main-container">
          <h1 className="knowledge-heading">KNOWLEDGE</h1>
        </div>
        {knowledgeData.map(section => (
          <div key={section.title} className="knowledge-section">
            <div className='sub-title-container'>
              <img
                src={section.titleImage}
                alt={section.title}
                className="knowledge-title-image"
               />
               <h2 className="knowledge-title">{section.title}</h2>
            </div>
            
            <div className='outer-all-cards-container'>
              <div className="knowledge-all-cards">
                {section.subItems.map((item, index) => (
                  <div key={index} className="knowledge-card">
                    <p className="knowledge-subtitle">{item.object.headingTitle}</p>
                    <img
                      src={item.object.imageUrlSub}
                      alt={item.object.headingTitle}
                      className="knowledge-image"
                    />
                    <p className="knowledge-caption">{item.object.bottomHeading}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Obstacles;
