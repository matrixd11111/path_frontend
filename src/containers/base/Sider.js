import React from 'react';

class Sider extends React.Component {
    render () {
	console.log(this.props.childrnen)
	return (
	    <div className='sider'>
		{this.props.children}
	    </div>
	);
    }
}
export default Sider;
