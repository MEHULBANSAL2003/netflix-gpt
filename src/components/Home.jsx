import React from 'react';
import Header from './Header';
import Body from './Body';
import { BG_IMAGE } from '../utilities/constants';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <div 
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative w-full h-screen flex flex-col items-center justify-center"
      >
        <div className="text-center text-white">
          <h1 className="text-6xl  font-bold mb-4">Unlimited movies, TV shows, and more</h1>
          <p className="text-lg mb-6">Starts at ₹149. Cancel at any time.</p>
          <button className="px-3 py-2 font-bold my-6 rounded bg-red-600 hover:bg-red-700 ">
            <Link to="/login">Sign in</Link>
      </button>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
