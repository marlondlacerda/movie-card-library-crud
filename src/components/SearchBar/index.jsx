import React from 'react';
import PropTypes from 'prop-types';
import { CheckBoxInput, SelectInput, TextInput } from './components';

import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookMarkedOnly,
      onBookMarkedChange, onSelectedGenreChange, selectedGenre } = this.props;

    return (
      <div className="form">
        <form data-testid="search-bar-form" className="search-bar-form content">
          <TextInput
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />
          <div className="search-select">
            <CheckBoxInput
              bookMarkedOnly={ bookMarkedOnly }
              onBookMarkedChange={ onBookMarkedChange }
            />

            <SelectInput
              selectedGenre={ selectedGenre }
              onSelectedGenreChange={ onSelectedGenreChange }
            />
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookMarkedOnly: PropTypes.bool.isRequired,
  onBookMarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
