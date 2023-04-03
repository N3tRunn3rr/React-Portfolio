import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className="container">
        <div className="main-content">
          <div className="main-container box">
            <h1 className='title'>About Me</h1>
            <Link to='/contact' className='signup-btn'>Portfolio</Link>
          </div>
        </div>
      </div>
  );
}

export default Home;