import './index.css';
import { Link } from 'react-router-dom';

const Chapters = (props) => {
    const { details } = props;
    const { id } = details; 

    return (
        <Link to={`/songs/${id}`} className='chapter-no-links'>
            <li className='chapters-main-container'>
                <div className='id-no-container'>
                    <h1 className='id-heading'>{id}</h1>
                </div>
            </li>
        </Link>
    );
}

export default Chapters;
