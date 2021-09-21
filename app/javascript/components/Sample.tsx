import React from 'react'
import "../../assets/stylesheets/sample.scss";
import Contact from './Contact'
import MyAvatar from './MyAvatar';
import Navbar from './Navbar'
import Informations from './Informations';

const Sample: React.FC = () => {
  return (
    <>
      <header>
        <p className="greet">Welcome to MyPage</p>
        <section>
          <Navbar />
        </section>
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
      <section>
        <MyAvatar />
      </section>
      <section id='informations'>
        <Informations />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  );
}

export default Sample;