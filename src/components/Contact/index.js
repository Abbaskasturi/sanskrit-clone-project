import './index.css';
import { Component } from 'react';
import Header from '../Header';

import { IoLocationOutline } from "react-icons/io5";

import { MdEmail } from "react-icons/md";

import { MdOutlineCall } from "react-icons/md";

class Contact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thanks for contacting us.");
    e.target.reset();
  };

  render() {
    return (
      <div className="contact-main-container">
        <Header />
        
       
        <div className="outer-heading-container">
          <div className="inner-heading-container">
            <h1 className="contact-heading">
              Contact<span className="us-span">Us</span>
            </h1>
          </div>
        </div>

        <h2 className="intro-text">
          Feel free to send us any questions you may have. We are happy to answer them.
        </h2>

     
        <div className='outer-submit-container'>
        <div className="submit-container">
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <div className="each-input-container">
              <label htmlFor="name" className="label-ele">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                className="input"
              />
            </div>

            <div className="each-input-container">
              <label htmlFor="email" className="label-ele">Email Id</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Id"
                className="input"
              />
            </div>

            <div className="each-input-container">
              <label htmlFor="message" className="label-ele">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="send-btn">SEND</button>
          </form>
        </div>

      
        <div className="contact-info">
          <div className='hidden-icon-container'>
            <IoLocationOutline className='icon-style'/>
            <h1 className='icon-text'>ADDRESS</h1>
          </div>
          <p className='contact-details'>
            <strong>John Scottus Secondary School</strong><br />
            Old Conna, Ferndale Road,<br />
            Rathmichael, Co. Dublin. Eircode A98FN12
          </p>
          <div className='hidden-icon-container'>
            
            <MdEmail className='icon-style'/>
            <h1 className='icon-text'>EMAIL US AT</h1>
          </div>
          <p className='contact-details'>
            <a href="mailto:secondary@johnscottusoldconna.ie">
              secondary@johnscottusoldconna.ie
            </a><br />
            <a href="mailto:rutger@johnscottus.ie">
              rutger@johnscottus.ie
            </a>
          </p>
          <div className='hidden-icon-container'>
            
            <MdOutlineCall className='icon-style'/>
            <h1 className='icon-text'>CALL US AT</h1>
          </div>
          <p className='contact-details'>
            +353 (1) 668 0828 (School)<br />
            +353 (87) 6242446 (Rutger Kortenhorst)
          </p>
        </div>
</div>
       
        <div className="map-container">
          <iframe
            title="school-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.1979475453123!2d-6.137384384052152!3d53.22007297995116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48679e54fc004d71%3A0x5a4818d41d75e6a4!2sJohn%20Scottus%20School!5e0!3m2!1sen!2sie!4v1631515842384!5m2!1sen!2sie"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Contact;
