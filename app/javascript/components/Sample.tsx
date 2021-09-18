import React from 'react'
import "../../assets/stylesheets/sample.scss";
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
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
      <MyAvatar />
      <About />
      <Contact />
    </div>
  );
}

export default Sample;