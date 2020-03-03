import React from 'react';

class Send extends React.Component {
    render () {
	return (
		<div className='footer'>
		<form className='formsend'>
		<button className='dropmenu'>Menu</button>
		<input className='send' name="send" type="text" placeholder="__"/>
		<button className='buttonsend'>Send</button>
		</form>
</div>
);
}
}
export default Send;
