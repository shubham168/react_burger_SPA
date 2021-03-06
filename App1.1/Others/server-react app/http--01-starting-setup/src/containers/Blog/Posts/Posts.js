import React, { Component } from "react";
import axios from "../../../axios";
import { Route } from "react-router-dom";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";
// import post from "../../../components/Post/Post";
class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.splice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPosts });
        //   console.log(response);
      })
      .catch((error) => {
        // console.log(error);
        // this.setState({
        //   error: true,
        // });
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push("/posts/" + id);
    // this.setState({
    //   selectedPostId: id,
    // });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went Wrong...</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post, i) => {
        return (
          //   <Link to={"/posts/" + post.id} }>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          //   </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
