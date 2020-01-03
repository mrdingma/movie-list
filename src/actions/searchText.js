import redux from 'redux';

const search = (q) => ({
  type: 'CHANGE_SEARCH_TEXT',
  q
});


export default search;