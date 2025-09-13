import "./index.css";
import Header from "../Header";
import { Component } from "react";

import {Link} from 'react-router-dom'

class Logo extends Component {
  state = { showModal: true }; 

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="logo-container">
        <Header />
        <div className="yogo-inner-container">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.At0dyeR3m27eBoY-CdjZMwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="yogo"
            className="yogo-image"
          />
          <div className="text-container">
             <Link to='/yogaintro' className="link-text">
              <h1 className="heading-text">YOGASUTRAS</h1>
              <p className="para-text">Ready to attune the mind to Yogo?</p>
            </Link>
          </div>
          
        </div>
        {this.state.showModal && (
          <div className="modal-overlay" onClick={this.handleClose}>
            <div
              className="modal-box"
              onClick={(e) => e.stopPropagation()} 
            >
              <div>
                <button className="close-btn" onClick={this.handleClose}>
                  ✕
                </button>
                <h1 className="anno-heading">Important Announcement</h1>
              </div>
              <hr className="notify-line"/>
              <div className="modal-content">
                <h2 style={{ color: "red", textAlign: "center" }}>
                  NOTICEBOARD
                </h2>
                <p>
                  Rutger on zoom. Most courses are 8 weeks.  
                  All courses are on the same zoom address.  
                  Local Dublin times are the same as GMT.
                </p>
                <p>
                  Meeting ID: <b>795 777 3585</b>  
                  <br/>
                  Password: <b>OMpeace</b>
                </p>
                <p style={{ color: "red" }}>
                  Monday Sanskrit 13 Youth from 17:00 - 18:00
                </p>
                <p>
                  The next term begins on 15 September 2025. It is a 10-week
                  term. We finish on 24 November and we skip 27 October.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Logo;
