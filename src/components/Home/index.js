import './index.css'; 
import { Component } from 'react';

import Chapters from '../Chapters'; 

import Bottom from '../Bottom';

import Header from '../Header'
import KrishnaImage from '../KrishnaImage'; 

const booksChapters = [
  { id: 1, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 2, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 3, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 4, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 5, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 6, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 7, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 8, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 9, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 10, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 11, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 12, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 13, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 14, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
  { id: 15, imageUrl: "https://res.cloudinary.com/dsp32vyqi/image/upload/v1757590890/gita_book_m43pug.jpg" },
];


class Home extends Component {

   /* state = {bhagavathGitaData : {}}
    componentDidMount(){
        this.getTheGitaDatat()
    }
    getTheGitaDatat = () => {
         API calling Here 
    } */ 

    render(){
        return(
            <div className='home-main-container'>
            <Header />
            <KrishnaImage />
            <ul className='all-books-container'>
                {
                    booksChapters.map((each) => (
                        <Chapters key={each.id} details={each}/>
                    ))
                }
            </ul>
        </div>
        )
    }
}
export default Home; 