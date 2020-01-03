import { connect } from 'react-redux';
import MovieList from '../components/MovieList.js';
import toggleMovieWatched from '../actions/toggleMovieWatched';

const mapStateToProps = ({hasWatched, movies, searchText}) => {
  let filteredMovies = movies.slice();
  // searchText dont filter if ''
  if (searchText !== '') {
    filteredMovies = filteredMovies.filter(({title}) => title.includes(searchText));
  }
  // hasWatched dont filter if null
  if (hasWatched !== null) {
    filteredMovies = filteredMovies.filter(movieObj => hasWatched === movieObj.hasWatched);
  }
  return {
    movies: filteredMovies,
  };
};

// toggle the watched property in the movie state
const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleWatched: (title) => dispatch(toggleMovieWatched(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

