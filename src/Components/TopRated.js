import React from "react";
import Card from "./Card";
import useFetch from './../Hooks/useFetchData';
import { Link } from "react-router-dom";

const TopRated = () => {
  const { data, isLoading, error } = useFetch('https://dummyapi.online/api/movies');
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <section className="top-rated">
        <div className="container">
          <p className="section-subtitle">Online Streaming</p>
          <h2 className="h2 section-title">Top Rated Movies</h2>
          <ul className="movies-list">
            {data.map((item)=>{
              return <Link key={item.id} to={"/MovieDetails/"+item.id}><Card name={item.movie} rating={item.rating} url={item.imdb_url} /> </Link> 
            })}
           
          </ul>
        </div>
      </section>
    </>
  );
};

export default TopRated;
