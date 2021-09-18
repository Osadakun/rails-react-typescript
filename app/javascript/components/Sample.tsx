import React from 'react'
import About from './About'
import Contact from './Contact'
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
      <About />
      <Contact />
    </div>
  );
}

export default Sample;