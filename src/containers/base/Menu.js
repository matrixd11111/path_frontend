import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render () {
	return (
	    <div>
	    <Link to='/articles/'>
		My_Diary
	    </ Link>
	    <Link to='/minigames/loto/'>
		Mini_Games
	    </ Link>
	    <Link to='#'>
		Plan_Bellian
	    </ Link>
	    <Link to='#'>
		Help
	    </ Link>
	    </div>
	);
    }
}
export default Menu;
