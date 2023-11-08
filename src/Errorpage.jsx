import { Link } from 'react-router-dom';
import './App.css'

const Errorpage = () => {
    return (
        <div className='errPage'>
           <div className='errBg'>
              <Link to='/'><button className="btn absolute top-[80%] left-[45%] bg-indigo-600 hover:bg-indigo-700 text-white">Back To Home</button></Link>
           </div>
        </div>
    );
};

export default Errorpage;