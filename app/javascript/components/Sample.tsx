import React from 'react'
import Footer from './Footer';
import MyAvatar from './MyAvatar';
import Navbar from './Navbar'

const Sample: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
        <p className="greet">Welcome to MyPage</p>
      </header>
      <MyAvatar />
      <Footer />
    </div>
  );
}

export default Sample;