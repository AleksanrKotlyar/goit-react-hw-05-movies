import { searchReviews } from 'APIMovies/APImovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'Utils/Box';
import { Item, Paragraf } from 'components/MoviesReviews/MoviesReviews.styled';
import toast from 'react-hot-toast';

const MoviesReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const searchReviewsMovie = await searchReviews(movieId);
        setReviews(searchReviewsMovie);
      } catch (error) {
        toast(`${error}`, {
          duration: 1000,
          position: 'top-right',
          style: { 'background-color': 'red' },
        });
      }
    })();
  }, [movieId]);

  if (!reviews) return;
  return (
    <Box as="ul" bg="#ff990030" p="8px">
      {reviews?.map(({ id, author, content }) => (
        <Item key={id}>
          <Paragraf>
            <b>Author: {author} </b>
          </Paragraf>
          <Paragraf>{content}</Paragraf>
        </Item>
      ))}
    </Box>
  );
};

export default MoviesReviews;
