import Redux from 'redux';

const hasWatched = (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE_WATCHED':
      return !state;

    default:
      return state;
  }
}

export default hasWatched;