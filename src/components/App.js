import React from 'react';
import PostContainer from '../containers/PostContainer';
import SearchContainer from '../containers/SearchContainer';
import MovieListContainer from '../containers/MovieListContainer';

const App = () => (
  <div>
    <div className="title">
      <h1>Movie List</h1>
    </div>
    <div className="row">
      <div className="col-md-5">
        <MovieListContainer />
        {/* <SearchContainer /> */}
      </div>
    </div>
  </div>
);

export default App;