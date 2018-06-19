import React, { Component } from "react";

class HackerNewsApp extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    const response = await fetch("https://node-hnapi.herokuapp.com/news");
    const data = await response.json();
    this.setState({
      articles: data
    });
  }

  render() {
    console.log(this.state.articles);
    return this.state.articles.map((article, i) => {
      return (
        <div>
          <div>
            <h1 className="App-title" key={i}>
              {article.title}
            </h1>
          </div>
          <div>
            <p key={i}>
              >{article.url}
            </p>
            <p>Comments:{article.comments_count}</p>
          </div>
        </div>
      );
    });
  }
}

export default HackerNewsApp;
