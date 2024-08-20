// src/App.js

import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://media.istockphoto.com/id/1279133399/photo/top-above-high-angle-view-portrait-of-his-he-nice-attractive-focused-skilled-geek-guy-typing.jpg?s=1024x1024&w=is&k=20&c=DfOsGZVBWXZyXotSZ2ePKSfuKel8RtqDvHQBQnAqHnc=',
      rating: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'A sci-fi action film.',
      posterURL: 'https://media.istockphoto.com/id/1487286434/photo/portrait-of-young-smiling-female-programmer-sitting-on-her-desk-with-computers-in-an-it-office.jpg?s=1024x1024&w=is&k=20&c=0UTE23fzOBsQHy955_FA2BfwGA7ArALHiarSCs6BHVA=',
      rating: 8.7,
    },
    // Add more initial movies if needed
  ]);

  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (filters) => {
    setFilters(filters);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filters.title.toLowerCase());
    const ratingMatch = filters.rating ? movie.rating >= parseFloat(filters.rating) : true;
    return titleMatch && ratingMatch;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE APP</h1>
    
      </header>
      <AddMovie onAdd={handleAddMovie} />
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
