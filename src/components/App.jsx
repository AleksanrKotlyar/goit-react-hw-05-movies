import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Movies from '../page/Movies';
import MoviesCast from './MoviesCast/MoviesCast';
import MoviesReviews from './MoviesReviews/MoviesReviews';
import NotFound from '../page/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import MovieDetails from 'page/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MoviesCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
