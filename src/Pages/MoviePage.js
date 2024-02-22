import React from 'react';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import { useParams } from 'react-router-dom';
import useFetch from "../Hooks/useFetchData";
import MovieDetails from './../Components/MovieDetails';

const MoviePage = (props) => {
    const {id} =  useParams()
    const { data } = useFetch("https://dummyapi.online/api/movies");
  if (!data) {
    return <div>Loading...</div>; // Or any other loading indicator
  }
   
    return (
       <>
       <Header/>
       <MovieDetails id={id} data={data} />
       <Footer/>
       </>
    );
};

export default MoviePage;