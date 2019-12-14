import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongItem from './SongItem';

class SongList extends Component {
  
  // renderList() {
  //   return this.props.songs.map((song) => {
  //     return (
  //       <div className="item" key={song.title}>
  //         <div className="right floated content">
  //           <button className="ui button primary">
  //             Select
  //           </button>
  //         </div>
  //         <div className="content">
  //           {song.title}
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  
  render() {
    const songs = this.props.songs.map((song) => {
      return <SongItem key={song.title} song={song} />
    })
    return (
      <div className="ui divided list">
        { songs }  
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);