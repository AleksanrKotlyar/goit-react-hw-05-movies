import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../page/Home'));
const NotFound = lazy(() => import('../page/NotFound'));
const Movies = lazy(() => import('../page/Movies'));
const MoviesCast = lazy(() => import('./MoviesCast/MoviesCast'));
const MoviesReviews = lazy(() => import('./MoviesReviews/MoviesReviews'));
const MovieDetails = lazy(() => import('page/MovieDetails'));

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
