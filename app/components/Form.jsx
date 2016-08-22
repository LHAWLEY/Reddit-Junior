import React from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions/index';

let Form = ({ dispatch }) => {
  let title, body;

  return (
    <div>
      <p>Create a new post</p>
      <form onSubmit={e => {
          e.preventDefault();
          dispatch(addPost({title: title.value, body: body.value}));
        }}>
        <input className='form_title' ref={node => { title = node }} type='text' name='title' placeholder='Title'></input>
        <textarea className='form_body' ref={node => { body = node }} type='text' name='post_body' placeholder='Text'></textarea>
        <input className='button' type='submit'></input>
      </form>
    </div>
  )
}

Form = connect()(Form)
export default Form;
