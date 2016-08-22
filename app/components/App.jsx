import React from 'react';
import Post from './Post.jsx';
import Form from './Form.jsx';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

const mapStateToProps = function (posts) {
  return { posts };
}

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div>
        <h1 className='app_title'>Reddit Junior</h1>
        <Form />
        {this.props.posts.map(post => {
          return <Post key={post.id} id={post.id} title={post.title} body={post.body} likes={post.likes} />
        })}
      </div>
    )
  }
}

App = connect(mapStateToProps)(App)

export default App;