import { searchMoviesByQuery } from 'servises/APImovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (movieName === '') return;

    (async () => {
      const response = await searchMoviesByQuery(movieName);

      setMovies(response);
    })();
  }, [movieName]);

  // async function getMoviesByQuery() {
  //   const response = await searchMoviesByQuery(movieName);

  //   setMovies(response);
  // }

  const visibleMovie = movies?.filter(movie =>
    (movie.original_title.toLowerCase() || movie.title.toLowerCase()).includes(
      movieName.toLowerCase()
    )
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setMovies([]);
  };

  return (
    <main>
      <Searchbar
        value={movieName}
        onChange={updateQueryString}
        // getMoviesByQuery={getMoviesByQuery}
      />
      <MoviesList data={visibleMovie} />
    </main>
  );
};

export default Movies;
