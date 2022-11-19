import { Outlet, useParams } from 'react-router-dom';
import { searchMovies } from 'APIMovies/APImovies';
import { useState, useEffect, Suspense } from 'react';
import { Box } from '../../Utils/Box';
import { Circles } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { WrapSpinner, CustLink, CustP, Title } from './MovieInfo.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';
const genre = JSON.parse(localStorage.getItem('genresDataArray'));

const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const searchMovie = await searchMovies(movieId);
        setMovie(searchMovie);
      } catch (error) {
        toast(`${error}`, {
          duration: 1000,
          position: 'top-right',
          style: { 'background-color': 'red' },
        });
      }
    })();
  }, [movieId]);

  if (!movie) return;

  let gen = movie.genres
    .reduce((acc, item) => {
      genre.forEach(genreItem => {
        if (item.id === genreItem.id) {
          acc.push([genreItem.name]);
        }
      });
      return acc;
    }, [])
    .join(', ');

  let pict = '';
  if (movie.poster_path === null) {
    pict =
      'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';
  } else pict = `${BASE_URL}${movie.poster_path}`;

  function addAudit(data) {
    if (!data) {
      // if (data.length === 0) {
      return 'No information';
    }
    return data;
  }

  const { title, release_date, vote_average, overview } = movie;

  return (
    <main>
      <button type="button">Go back</button>
      {movie && (
        <>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="space-between"
            mt={5}
            mb={5}
          >
            <img src={`${pict}`} width="250px" height="350px" alt="film__img" />
            <Box ml={4}>
              <Title>
                {title} ({release_date?.slice(0, 4)})
              </Title>
              <CustP>
                User Score: {`${addAudit(Number(vote_average).toFixed(1))}`}
              </CustP>
              <CustP>
                <b>Overview:</b>
                <br />
                {`${addAudit(overview)}`}
              </CustP>
              <CustP>
                <b>Genres:</b>
                <br />
                {`${addAudit(gen)}`}
              </CustP>
            </Box>
          </Box>

          <h3>Additional information</h3>
          <ul>
            <li>
              <CustLink to="cast">Cast</CustLink>
            </li>
            <li>
              <CustLink to="reviews">Reviews</CustLink>
            </li>
          </ul>
          <hr />
          <Suspense
            fallback={
              <WrapSpinner>
                <Circles
                  height="80"
                  width="80"
                  color="#ff6b08"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </WrapSpinner>
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieInfo;
