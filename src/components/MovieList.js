import React, { Component } from 'react';
import MovieListEntry from './MovieListEntry.js';

class MovieList extends Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   videos: this.props.videos
    // };
  }

  // when click, render the list

  render () {
    return (
      <div>
        <div className="watchButtons">
          <button className="btn btn-success">Watched</button>
          <button className="btn btn-success">To Watch</button>
        </div>
        <div className="movie-list">
        {
          this.props.movies.map(movie => (
            <MovieListEntry
              key={movie.id}
              video={movie}
              handleToggleWatched={this.props.handleToggleWatched}
              handleToggleDetails={this.props.handleToggleDetails}
            />
          ))
        }
        </div>
      </div>
    )
  }
};

export default MovieList;