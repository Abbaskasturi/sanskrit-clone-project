import './index.css';

import Header from '../Header';

import { Component } from 'react';

import IsopanisadSongs from '../IsopanisadSongs'; 

import { FaRegCirclePlay } from "react-icons/fa6";

// dummy data 

const TaittiriSongsData = [
  {
    id: 1,
    title: "Chapter 1 - Arjuna Vishada Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 2,
    title: "Chapter 2 - Sankhya Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    title: "Chapter 3 - Karma Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 4,
    title: "Chapter 4 - Jnana Karma Sanyasa Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 5,
    title: "Chapter 5 - Karma Sanyasa Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 6,
    title: "Chapter 6 - Dhyana Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 7,
    title: "Chapter 7 - Jnana Vijnana Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 8,
    title: "Chapter 8 - Akshara Brahma Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 9,
    title: "Chapter 9 - Raja Vidya Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 10,
    title: "Chapter 10 - Vibhuti Yoga",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

class Katho extends Component {
    render(){
        return(
            <div className='isopanisad-main-container'>
                <Header />
                <div className='isopanisad-image-main-container'>
                    <h1 className='isopanisad-heading '>KATHAPANISAD</h1>
                </div>
                <div className='iso-image-container'>
                    <img src='https://sanskrit.ie/images/gita_open.png' alt='book' className='iso-book'/>
                </div>
                 <ul className='songs-items-container'>
         <li className='song-audio'>
            <div className='audio-container'>
                <h1 className='whole-name'>SANTI MANTRA</h1>
                <FaRegCirclePlay className='audio-icon'/>
            </div>
         </li>
        {
          TaittiriSongsData.map((song) => (
            <IsopanisadSongs key ={song.id} songDetails={song} />
          ))
        }
         <li className='song-audio'>
            <div className='audio-container'>
                <h1 className='whole-name'>End of Chapter</h1>
                <FaRegCirclePlay className='audio-icon'/>
            </div>
         </li>
      </ul>
    </div>
        )
    }
}

export default Katho;