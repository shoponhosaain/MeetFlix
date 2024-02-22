import React from 'react';
import Header from './../Components/Header';
import Hero from './../Components/hero';
import Upcomming from './../Components/Upcomming';
import Service from './../Components/Service';
import TopRated from './../Components/TopRated';
import Footer from './../Components/Footer';

const Home = () => {
    return (
        <>
        <Header/>
        <Hero/>
        <Upcomming/>
        <Service/>
        <TopRated/>
        <Footer/>
        </>
    );
};

export default Home;