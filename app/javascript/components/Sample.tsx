import React from 'react'
import About from './About'
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
      <About />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Sample;