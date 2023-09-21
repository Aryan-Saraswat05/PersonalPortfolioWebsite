import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import './index.scss';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi,
            <br />
            I'm

            Aryan
            <br />
            Web Developer.
          </h1>
          <h2>Front End Developer | JavaScript Expert | Student</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
