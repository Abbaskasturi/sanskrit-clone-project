
import './index.css';
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const IsopanisadSongs = ({ songDetails }) => {
  const { title, audio, id } = songDetails;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
    
      <li className='song-audio'>
        <div className='audio-container'>
          <h1 className='whole-name'>{id}</h1>
          <FaRegCirclePlay className='audio-icon' onClick={toggleModal} />
        </div>
      </li>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={toggleModal}>X</button>

            <h2 className="modal-title">{title}</h2>
            <p className="modal-text">
              This is some dummy content for Bhagavad Gita Chapter {id}.
            </p>
            <div className="audio-player">
              <audio controls>
                <source src={audio} type="audio/mp3" />
              </audio>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IsopanisadSongs;
