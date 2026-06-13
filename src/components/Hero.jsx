import React from "react";

const Hero = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.original_title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-5">
          <div className="text-3xl font-bold text-red-600">
            CineFile
          </div>

          <ul className="flex items-center gap-8 text-white font-medium">
            <li className="cursor-pointer hover:text-red-500">Home</li>
            <li className="cursor-pointer hover:text-red-500">Movies</li>
          </ul>
        </nav>

        {/* Hero Content */}
        <div className="flex h-[80%] items-center px-8 md:px-16">
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-sm text-gray-300">
              📅 {movie.release_date}
            </p>

            <h1 className="mb-5 text-5xl font-bold md:text-7xl">
              {movie.original_title}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-200">
              {movie.overview}
            </p>

            <button
              onClick={() =>
                window.open(
                  `https://www.themoviedb.org/movie/${movie.id}`,
                  "_blank"
                )
              }
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
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