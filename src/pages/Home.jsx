import React from 'react';
import Hero from './Home/Hero';
import About from './Home/About';
import Socials from '../components/Socials';
import Skills from './Home/Skills';
import ShowProjects from './Home/ShowProjects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <ShowProjects></ShowProjects>
        </div>
    );
};

export default Home;