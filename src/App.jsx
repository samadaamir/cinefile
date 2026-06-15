import React, { useEffect, useState } from 'react'
import Card from './components/card'
import Hero from './components/Hero';
import Footer from './components/Footer';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=91e040c083b5c94266d759930e7530bb");
        const data = await response.json();

        setMovies(data.results);
      }
      catch (error) {
        console.error(error)
      }
    };
    fetchMovie();

  }, [])
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % movies.length
      );
    }, 2500)
    return () => clearInterval(interval);
  }, [movies])
  return (
    <div className='flex flex-col'>
      <Hero movie={movies[currentIndex]} />

      <div className="max-w-350 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App