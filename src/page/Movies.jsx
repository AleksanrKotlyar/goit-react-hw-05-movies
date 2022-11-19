import { searchMoviesByQuery } from 'servises/APImovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  async function getMoviesByQuery(query) {
    const response = await searchMoviesByQuery(query);

    setMovies(response);
  }

  const visibleMovie = movies?.filter(movie =>
    (movie.original_title.toLowerCase() || movie.title.toLowerCase()).includes(
      movieName.toLowerCase()
    )
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <Searchbar
        value={movieName}
        onChange={updateQueryString}
        getMoviesByQuery={getMoviesByQuery}
      />
      <MoviesList data={visibleMovie} />
    </main>
  );
};

export default Movies;
