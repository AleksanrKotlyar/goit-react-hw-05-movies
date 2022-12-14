import { searchCast } from 'servises/APImovies';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { List, Paragraf, ListItem } from './MoviesCast.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';

const MoviesCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

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
    <>
      {cast.length > 0 ? (
        <List>
          {cast?.map(({ id, name, character, profile_path }) => (
            <ListItem key={id}>
              <img
                src={
                  profile_path
                    ? `${BASE_URL}${profile_path}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9xblPLFER3Yqo594AP24UPoq-5RzC9sSHg&usqp=CAU'
                }
                width="50px"
                height="60px"
                alt="photo_actor"
              />
              <div>
                <Paragraf>
                  <b>{name}</b>
                </Paragraf>
                <Paragraf>
                  <b>Character:</b> {character}
                </Paragraf>
              </div>
            </ListItem>
          ))}
        </List>
      ) : (
        <div>No information.</div>
      )}
    </>
  );
};

export default MoviesCast;
