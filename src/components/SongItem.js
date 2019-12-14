import React from 'react';

const SongItem = (props) => {
  return(
    <div className="item" key={props.song.title}>
      <div className="right floated content">
        <button className="ui button primary">
          Select
        </button>
      </div>
      <div className="content">
        {props.song.title}
      </div>
    </div>
  );
};

export default SongItem;