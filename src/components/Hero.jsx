import React, { useEffect, useState } from "react";

const Hero = ({ movie }) => {
  const [displayMovie, setDisplayMovie] = useState(movie);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!movie) return;

    setVisible(false);

    const timeout = setTimeout(() => {
      setDisplayMovie(movie);
      setVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [movie]);

  if (!displayMovie) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original${displayMovie.backdrop_path}`}
        alt={displayMovie.original_title}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-105"
          }`}
      />

      <div className="relative z-10 flex h-full flex-col">

        <nav className="flex items-center justify-between px-6 py-5 md:px-12">
          <h1 className="text-3xl font-bold text-red-600 cursor-pointer">
            CineFile
          </h1>

          <ul className="flex items-center gap-6 text-white font-medium">
           <li className="cursor-pointer transition hover:text-red-500">
              Home
            </li>
           <li className="cursor-pointer transition hover:text-red-500" >
              Movies
            </li>
          
          </ul>
        </nav>

        <div className="flex flex-1 items-center px-6 md:px-16">
          <div
            className={`max-w-3xl text-white transition-all duration-500 ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0.5 translate-y-8"
              }`}
          >
            <p className="mb-3 text-sm md:text-base [text-shadow:2px_2px_10px_rgba(0,0,0,0.9)]">
              Date: {displayMovie.release_date}
            </p>

            <h1 className="mb-5 text-4xl font-bold md:text-6xl lg:text-7xl [text-shadow:3px_3px_15px_rgba(0,0,0,1)]">
              {displayMovie.original_title}
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed md:text-lg [text-shadow:2px_2px_10px_rgba(0,0,0,0.9)]">
              {displayMovie.overview?.length > 250
                ? `${displayMovie.overview.slice(0, 250)}...`
                : displayMovie.overview}
            </p>

            <button
              onClick={() =>
                window.open(
                  `https://www.themoviedb.org/movie/${displayMovie.id}`,
                  "_blank"
                )
              }
              className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;