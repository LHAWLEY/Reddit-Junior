import Firebase from 'firebase';
import uuid from 'node-uuid';

const database = new Firebase('https://reddit-junior.firebaseio.com')

const ADD_POST = 'ADD_POST';
const ADD_LIKE = 'ADD_LIKE';
const FETCH_POSTS = 'FETCH_POSTS';

// Action Creators

const fetchPosts = function () {
  return (dispatch => {
    database.child('posts').on('value', snapshot => {
      let posts = [],
          ids = snapshot.val();

      for (let id in ids) {
        let {title, body, likes} = ids[id];

        posts.push({ id, title, body, likes });
      }

      dispatch({ type: FETCH_POSTS, posts: posts });
    });
  });
}

const addPost = function ({ title, body }) {
  return dispatch => database.child('posts').push({
    id: uuid(), title, body, likes: 0
  });
}

const addLike = function (id) {
  return dispatch => {
    database.child(`posts/${id}`).transaction(currentPost => {
      currentPost.likes += 1
      return currentPost
    });
  };
}

export { ADD_POST, addPost, ADD_LIKE, addLike, FETCH_POSTS, fetchPosts };