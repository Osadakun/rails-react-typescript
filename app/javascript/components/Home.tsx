import React from 'react'
import "../../assets/stylesheets/home.scss";
import Contact from './Contact'
import MyAvatar from './MyAvatar';
import Navbar from './Navbar'
import Informations from './Informations';

const Home: React.FC = () => {
  return (
    <>
      <header>
        <p className="greet">Welcome to Mypage</p>
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
      <section id='INFORMATIONS'>
        <Informations />
      </section>
      <section id='CONTACT'>
        <Contact />
      </section>
    </>
  );
}

export default Home;