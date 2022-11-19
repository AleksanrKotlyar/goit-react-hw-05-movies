import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  MovieGallery,
  MovieItem,
  MovieImage,
  MovieTitle,
  Linka,
} from './MoviesList.styled';

const MoviesList = ({ data }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  // const { pathname } = useLocation();
  const location = useLocation();

  return (
    <MovieGallery>
      {data.map(({ id, backdrop_path, origin_title, title }) => (
        <MovieItem key={id}>
          <Linka to={`/movies/${id}`} state={{ from: location }}>
            <MovieImage src={`${BASE_URL}${backdrop_path}`} alt="poster" />
            <MovieTitle>{title || origin_title}</MovieTitle>
          </Linka>
        </MovieItem>
      ))}
    </MovieGallery>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
