import React from 'react';
import axios from 'axios';



class Tickets extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    tickets: '\'',
	};
    }

    componentDidMount() {
	axios.get(`http://127.0.0.1:8000/minigames/loto/1/`)
	    .then(response => {
		this.setState({
		    tickets: response.data.map((tickets) =>
			tickets.ticket.replace(/\'/g, "\""))
		});

	    })
    }
    
    render() {
	console.log(JSON.parse(this.state.tickets))
	return (
		<div>hello</div>
	);
    }
}

export default Tickets;
