import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="group relative h-85 w-60 overflow-hidden rounded-3xl shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2">

      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay - Hidden Initially */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/75" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">

        <div className="translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

          {/* Release Date */}
          <p className="mb-2 text-sm text-gray-300">
            📅 {movie.release_date}
          </p>

          {/* Title */}
          <h2 className="mb-3 text-xl font-bold text-white">
            {movie.original_title}
          </h2>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-gray-200">
            {movie.overview?.length > 120
              ? `${movie.overview.slice(0, 120)}...`
              : movie.overview}
          </p>

          {/* Button */}
          <button
            onClick={() =>
              window.open(
                `https://www.themoviedb.org/movie/${movie.id}`,
                "_blank"
              )
            }
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
          >
            View Details
          </button>

        </div>

      </div>
    </div>
  );
};

export default Card;