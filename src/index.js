import React from 'react';
import ReactDOM from 'react-dom';
import css from "./index.css";
import Card from "./Home"
import movies from './Details';


function nData(value){
  return (
    <Card
name={value.name}
image={value.image}
link={value.link}
    />
  )
}
ReactDOM.render(
  <>
  <h1 className='h1-text'>Top 10 Netflix Movies</h1>
  {movies.map(nData)}
  </>,
  document.getElementById("root")
)