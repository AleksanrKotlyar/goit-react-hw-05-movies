import { fetchGenres, getTrending } from 'APIMovies/APImovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await getTrending();

        if (movies) {
          setTrendingMovies(movies);
          //  setStatus('resolved');
        }
      } catch (error) {
        console.log(error);
        //  setError(error);
        //  setStatus('rejected');
      } finally {
        //  setStatus('resolved');
      }
    }
    fetchData();

    const genre = JSON.parse(localStorage.getItem('genresDataArray'));
    if (!genre) {
      fetchGenres();
    }
  }, []);

  if (!trendingMovies) {
    return;
  }

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList data={trendingMovies} />
    </main>
  );
};

export default Home;
