import React from 'react';
import axios from 'axios';

import Theme from "../../components/mydiary/Theme";

class ArticleTheme extends React.Component {

    state = {
	articles: []
    }

    componentDidMount() {
	const articleID = this.props.match.params.articleID;
	axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
	     .then(res => {
		 this.setState({
		     articles: res.data
		 });
	     })
    }

    render() {
	return (
	    <Theme data={this.state.articles}/>
	);
    }
}


export default ArticleTheme;
