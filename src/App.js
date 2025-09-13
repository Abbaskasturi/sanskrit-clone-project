import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChapterWiseSongs from './components/ChapterWiseSongs'; 
import Home from './components/Home';
import AyurvedaIntro from './components/AyurvedaIntro'; 

import Food from './components/Food';

import Timing from  './components/Timing'; 

import YogaIntro from './components/YogaIntro'; 

import Obstacles  from './components/Obstacles'; 

import Practice from './components/Practice'; 

import Yogasana from './components/Yogasana'; 

import Isopanisad  from './components/Isopanisad'; 

import Glossary  from './components/Glossary';

import  Taittiri from './components/Taittiri'; 

import Mandu from './components/Mandu';

import Katho from './components/Katho'; 

import Keno from './components/Keno'; 

import Aitareyo from './components/Aitareyo'; 

import Munda  from './components/Munda'; 

import Prasno  from './components/Prasno'; 

import Devotional from './components/Devotional'; 

import Grammar from './components/Grammar'; 

import Funsongs  from './components/Funsongs'; 

import Glossarysongs from './components/Glossarysongs';

import Script from './components/Script';

import Contact from './components/Contact'; 

import Searchbar from './components/Searchbar';

import Bottom from './components/Bottom';

import GoUpButton from './components/GoUpButton'; 

import Logo from './components/Logo'; 

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/songs/:id' element={<ChapterWiseSongs />} /> 
      <Route path='/chapters' element = {<Home />} />  
      <Route path='/ayurvedaintro' element={<AyurvedaIntro />}/> 
      <Route path='/timing' element = {< Timing/>} />
      <Route path ='/food' element={<Food/>}/>
      <Route path='/yogaintro' element={<YogaIntro/>}/>
      <Route path='/obstacles' element={ <Obstacles/> } />
      <Route path='/practices' element={<Practice/>}/>
      <Route path='/yogasana' element={<Yogasana/>}/> 
      <Route path='/glossary' element={<Glossary/>}/> 
      <Route path='/home' element={<Home/>}/> 
      <Route path='/isopanisad' element={<Isopanisad/>}/>
      <Route path='/taittiri' element={<Taittiri/>}/>
      <Route path='/mandu' element={<Mandu/>}/>
      <Route path='/keno' element={<Keno/>}/>
      <Route path='/katho' element={<Katho/>}/>
      <Route path='/aitar' element ={<Aitareyo/>} />
      <Route path='/munda' element = {<Munda/>} /> 
      <Route path='/prasno' element = {<Prasno/>} /> 
      <Route path='/devotional' element ={<Devotional/>} />
      <Route path='/grammar' element = {<Grammar/>} />
      <Route path='/funsongs' element = {<Funsongs/>} />
      <Route path ='/script' element = {<Script/>} />
      <Route path = '/glossarysongs' element={<Glossarysongs/>}/> 
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/search' element = {<Searchbar/>} />
      <Route path='/logo' element = {<Logo/>} />
    </Routes>
    <Bottom />
    <GoUpButton/>
  </BrowserRouter>
);

export default App;
