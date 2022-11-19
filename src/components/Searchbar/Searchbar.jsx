import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
// import { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import toast, { Toaster } from 'react-hot-toast';
// import { searchMovies } from 'APIMovies/APImovies';

const Searchbar = ({ value, onChange, getMoviesByQuery }) => {
  // const [query, setQuery] = useState('');

  // const handleOnChange = ({ target: { value } }) => {
  //   setQuery(value);
  // };

  const handleOnSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.elements.input.value;

    if (query.trim() === '') {
      return toast('Enter a request.', {
        duration: 1000,
        position: 'top-right',
        style: { 'background-color': 'yellow' },
      });
    }

    getMoviesByQuery(query);
    // e.currentTarget.reset();
  };

  return (
    <Header>
      <SearchForm onSubmit={handleOnSubmit}>
        <SearchFormButton type="submit">
          <FcSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <Toaster />
        <SearchFormInput
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {};

export default Searchbar;
