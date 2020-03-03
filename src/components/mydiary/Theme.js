import React from 'react';
import { List } from 'antd';

const Theme = (props) => {
    const pr = props.data;
    return (
	<List
	dataSource={pr}
	renderItem={item => (
	    <List.Item
	    className="articles"
	      key={item.title}
	    >
	      <List.Item.Meta
	    title={<a href={`/pablic/${item.section}/`}>{item.title}</a>}
	      />
	    </List.Item>
	)}
	/>
    );
}
export default Theme;
