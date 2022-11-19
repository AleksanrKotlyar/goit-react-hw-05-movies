import { searchCast } from 'APIMovies/APImovies';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Box } from 'Utils/Box';
import { Item, Paragraf } from './MoviesCast.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';

const MoviesCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const searchCastMovie = await searchCast(movieId);
        setCast(searchCastMovie);
      } catch (error) {
        toast(`${error}`, {
          duration: 1000,
          position: 'top-right',
          style: { 'background-color': 'red' },
        });
      }
    })();
  }, [movieId]);

  if (!cast) return;
  return (
    <Box as="ul" bg="#ff990030" p="8px">
      {cast?.map(({ id, name, character, profile_path }) => (
        <Item key={id}>
          <img
            src={`${BASE_URL}${profile_path}`}
            width="40px"
            height="50px"
            alt="photo_actor"
          />
          <Paragraf>
            <b>{name}</b>
          </Paragraf>
          <Paragraf>
            <b>Character:</b> {character}
          </Paragraf>
        </Item>
      ))}
    </Box>
  );
};

export default MoviesCast;
