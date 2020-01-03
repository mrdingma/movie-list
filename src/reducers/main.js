import Redux from 'redux';

var movieListReducer = (state = [], action) => {
  const updatedState = state.slice();

  switch (action.type) {

    case 'CHANGE_MOVIE_LIST':
      const currentIdArr = updatedState.map(movie => movie.id);

      // need to add all new movie id to old state
      action.movies.forEach(newMovie => {
        if (!currentIdArr.includes(newMovie.id)) {
          updatedState.push(newMovie);
        }
      });
      return updatedState;

    case 'ADD_MOVIE':
      state.push({
        title: action.title,
        watched: false,
        details: false
      });
      return state;

    case 'TOGGLE_MOVIE_WATCHED':
      return state.map(movie => {
        if (movie.id === action.id) {
          movie.watched = !movie.watched;
        }
      });

    case 'TOGGLE_MOVIE_DETAILS':
        return state.map(movie => {
          if (movie.id === action.id) {
            movie.details = !movie.details;
          }
        });

    default:
      return state;
  }
};

export default movieListReducer;
