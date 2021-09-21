import React from 'react'
import "../../assets/stylesheets/sample.scss";
import About from './Informations'
import Contact from './Contact'
import MyAvatar from './MyAvatar';
import Navbar from './Navbar'
import Informations from './Informations';

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
      <section id='informations'>
        <Informations />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
}

export default Sample;