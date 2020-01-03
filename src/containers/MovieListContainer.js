import { connect } from 'react-redux';
import MovieList from '../components/MovieList.js';
import toggleMovieWatched from '../actions/toggleMovieWatched';
import toggleMovieDetails from '../actions/toggleMovieDetails';

const mapStateToProps = (state) => {
  return {
    movies: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleWatched: (id) => dispatch(toggleMovieWatched(id)),
    handleToggleDetails: (id) => dispatch(toggleMovieDetails(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

