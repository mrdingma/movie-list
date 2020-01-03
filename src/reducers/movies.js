import Redux from 'redux';

const movies = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_WATCHED':
      return state.map(movieObj => {
        if (movieObj.title === action.title) {
          movieObj.watched = !movieObj.watched;
        }
      });

    case 'ADD_MOVIE':
      state.push({
        title: action.title,
        watched: false,
      });
      return state;

    default:
      return state;
  }
}


export default movies;