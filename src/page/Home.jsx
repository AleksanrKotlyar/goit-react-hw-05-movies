import { fetchGenres, getTrending } from 'servises/APImovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const movies = await getTrending();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
        toast(`${error}`, {
          duration: 1000,
          position: 'top-right',
          style: { 'background-color': 'red' },
        });
      }
    })();
    const genre = JSON.parse(localStorage.getItem('genresDataArray'));
    if (!genre) {
      fetchGenres();
    }
  }, []);

  if (!trendingMovies) return;
  return (
    <main>
      <h1 style={{ marginBottom: '24px', textAlign: 'center' }}>
        Trending today{' '}
      </h1>
      <MoviesList data={trendingMovies} />
    </main>
  );
};

export default Home;
