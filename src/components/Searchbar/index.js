import './index.css'; 
import { Component }   from 'react'; 

import Header from '../Header'; 

class Searchbar extends Component {
    render(){
        return(
            <div className='search-main-container'>
                <Header />
               <div className='search-inner-container'>
                  <input type='text' className='search-bar'/>
                  <button type='submit' className='btn-submit'>Search</button>
               </div>
               <div className='outer-results-container'>
                <h1 className='search-heading'>Search Results</h1>
                <div className='results-container'>
                    <p className='results-para'>No Results Found</p>
                </div>
               </div>
            </div>
        )
    }
}
export default Searchbar; 