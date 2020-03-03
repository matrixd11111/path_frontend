import React from 'react';
import axios from 'axios';

class ChooseNumber extends React.Component {
    constructor(props){
	super(props);
	this.setNumber = this.setNumber.bind('this');
    }

    setNumber (ticket, number) =>  {
	axios.get(`http://127.0.0.1:8000/minigames/loto/${ticket}/${number}/`)
    }

    render {
	return (
		<button onClick={this.setNumber(
		    this.props.ticket,
		    this.props.number,
		)}>
		{this.props.child}
		</button>
	);
    }
}

export default ChooseNumber;
