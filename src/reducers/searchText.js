import Redux from 'redux';

const searchText = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.q;

    default:
      return state;
  }
}

export default searchText;