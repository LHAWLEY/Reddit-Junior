import React from 'react';
import { connect } from 'react-redux'
import { addLike } from '../actions/index';

let Like = ({ id, dispatch, likes }) => {
  return (
    <div>
      <span className='like_count'>Likes: {likes}</span>
      <button className='small button' onClick={e => {
        e.preventDefault();
        dispatch(addLike(id));
      }}>Like</button>
    </div>
  )
}

Like = connect()(Like)
export default Like;