import React from 'react';
import { List } from 'antd';

const Articles = (props) => {
    return (
	<List
	dataSource={props.data}
	renderItem={item => (
	    <List.Item
	    className="articles"
	      key={item.title}
	    >
	      <List.Item.Meta
	    title={<a href={`/articles/${item.id}`}>{item.title}</a>}
	      />
	    </List.Item>
	)}
	/>
    );
}

export default Articles;
