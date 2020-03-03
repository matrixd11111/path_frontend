import React from 'react';
import axios from 'axios';

import Pablic from "./Pablications";

class ArticleDetail extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    content: []
	};
	this.pasrserContent = this.parserContent.bind(this);
    }

    componentDidMount() {
	const articleID = this.props.match.params.articleID;
	axios.get(`http://127.0.0.1:8000/api/pablic/${articleID}/`)
	     .then(res => {
		 this.parserContent(res.data)
	     })
    }

    parserContent = (pablics) => 
	pablics.map((pablic) => {
	    const content = JSON.parse(pablic.content, function(key, value){
		return (key, value);})
	    this.setState({
		content: content
	    })}
		   )

    render() {
	return (
		<Pablic content={this.state.content}/>
	);
    }
}


export default ArticleDetail;
