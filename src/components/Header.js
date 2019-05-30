import React from 'react';
import image from '../styles/image/image.png';

const Header = () => {
  return (
    <div className="wrapper">
      <img
        src={image}
        alt="A bust of a statue, presumably called Ahronspeck"
      />
      <div className="headerContent">
        <h1>Ahornspeck The Speaking Statue</h1>
        <p className="subTitle">
          Inspired by the Talking Statues of Rome, this virtual space
          provides a room for public opinion.
        </p>
        <p>Speak as if you are Ahornspeck, the speaking statue!</p>
      </div>
    </div>
  );
}

export default Header;