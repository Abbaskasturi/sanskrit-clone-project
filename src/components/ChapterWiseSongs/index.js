import './index.css';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { FaRegCirclePlay } from "react-icons/fa6";
import KrishnaImage from '../KrishnaImage';

import Header from '../Header'


import Songs from '../Songs'; 

// dummy data 

const gitaSongs = [
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


const ChapterWiseSongs = () => {
  const { id } = useParams();
  /* state = {songsData : {}}
    componentDidMount(){
        this.getThesongsData()
    }
    getThesongsData = () => {
         API calling Here 
    } */ 
  return (
    <div className='songs-main-container'>
      <Header />
      <KrishnaImage />
      <Link to="/chapters" className='back-link'>
        <div className='back-forward-container'>
          <MdOutlineKeyboardArrowLeft className='arrow-icon' />
          <p className='back-para'>Back</p>
        </div>
      </Link> 
      <h1 className='chapter-name-no'>CHAPTER {id}</h1>
      <hr className='red-line'/>
        <p className='verse-name'>Verse</p>
      <hr className='red-line'/>
      <ul className='songs-items-container'>
         <li className='song-audio'>
            <div className='audio-container'>
                <h1 className='whole-name'>Whole Chapter</h1>
                <FaRegCirclePlay className='audio-icon'/>
            </div>
         </li>
        {
          gitaSongs.map((song) => (
            <Songs key ={song.id} songDetails={song} />
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
  );
};

export default ChapterWiseSongs;
