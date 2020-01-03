import React from 'react';


const MovieListEntry = ({video, handleToggleWatched, handleToggleDetails}) => (

  <div className="movie-list-entry">
    <div className="movie-list-entry-detail">
      {video.title}
        <span className="smallWatchButton">
          <button className="btn btn-light btn-outline-dark btn-sm">To Watch</button>
        </span>
    </div>
  </div>

);



export default MovieListEntry;