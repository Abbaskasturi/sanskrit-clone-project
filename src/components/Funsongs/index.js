import './index.css'; 

import {Component} from 'react'; 

import Header from '../Header'; 

import DevotionalSongs from '../DevotionalSongs';

const devotionalData = [
  {
    id: 1,
    songName: "Ānandamayi",
    songImage: "https://picsum.photos/seed/anandamayi/200/200",
    songAudio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    songName: "Atra Tatra",
    songImage: "https://picsum.photos/seed/atratatra/200/200",
    songAudio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    songName: "Kathām Kadā",
    songImage: "https://picsum.photos/seed/kathamkada/200/200",
    songAudio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];


class Funsongs extends Component {
    render(){
        return(
            <div className='devotional-main-container'>
                <Header />
                <h1 className='songs-heading'>Songs</h1>
                <ul className='song-list-container'>
                  {
                    devotionalData.map((eachsong) => (
                        <DevotionalSongs key={eachsong.id} songItem ={eachsong}/>
                    ))
                  }
                </ul>
            </div>
        )    
    }
}

export default  Funsongs; 