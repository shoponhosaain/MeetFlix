import React from 'react';
import Card from './Card';
import useFetch from '../Hooks/useFetchData';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  const { data, isLoading, error } = useFetch('https://dummyapi.online/api/movies');
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Limit the number of items to be rendered
  const limitedData = data.slice(0, 4); // Adjust the limit as per your requirement

  return (
    <>
      <section className="upcoming">
        <div className="container">
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle">Online Streaming</p>
              <h2 className="h2 section-title">Upcoming Movies</h2>
            </div>
            <ul className="filter-list">
              <li>
                <button className="filter-btn">Movies</button>
              </li>
            </ul>
          </div>
          <ul className="movies-list  has-scrollbar">
          {limitedData.map((item)=>{
              return <Link key={item.id} to={"/MovieDetails/"+item.id}><Card name={item.movie} rating={item.rating} url={item.imdb_url} /> </Link> 
            })}
           
          </ul>
        </div>
      </section>
    </>
  );
};

export default Upcoming;
