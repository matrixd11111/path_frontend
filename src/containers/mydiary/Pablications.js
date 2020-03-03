import React from 'react';

const Pablic = (props) => {
    const contents = props.content
    const content = contents.map((pablic) => 
				 <li key={pablic.title}>
			       <h2>{pablic.title}</h2>
			       <p>{pablic.content}</p>
				 </li>
				);
    return (
	    <div className="containerpablic">
	    <ul className="pablics">{content}</ul>
	    </div>
    );
}

export default Pablic;
