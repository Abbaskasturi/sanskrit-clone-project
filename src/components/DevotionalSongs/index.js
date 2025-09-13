import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import './index.css';

const DevotionalSongs = ({ songItem }) => {
  const { songName, songAudio } = songItem;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <li className='each-song-container'>
        <div className='song-bg-image'>
          <FaRegCirclePlay className='dev-play-icon' onClick={toggleModal} />
        </div>
        <p>Song: <span className="song-name-span">{songName}</span></p>
      </li>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={toggleModal}>X</button>
            <h2 className="modal-title">{songName}</h2>
            <audio controls autoPlay>
              <source src={songAudio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </>
  );
};

export default DevotionalSongs;
