import React from "react";
import axios from "axios";
import Articles from "../../components/mydiary/Article";

class ArticleList extends React.Component {
  state = {
    articles: []
  };

  fetchArticles = () => {
    axios.get("http://127.0.0.1:8000/api/")
	  .then(res => {
	      this.setState({
		  articles: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();      
    }
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} /> <br />
      </div>
    );
  }
}

export default ArticleList;
