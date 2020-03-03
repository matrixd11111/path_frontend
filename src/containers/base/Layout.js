import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import '../../style/mydiary.css';

import Menu from './Menu';
import Send from './Send';
import MyDiaryRouter from '../../routes';
import ArticleDetail from '../mydiary/ArticleDetailView';
import Tickets from '../minigames/Ticket';

const { Header, Footer, Sider, Content } = Layout;

class CustomLayout extends React.Component {
    render () {
	return (
	    <Router>
	    <Layout>
	    <Header className='header'>
	    <Menu />
	    </Header>
	    <Layout>
	    <Content className='content'>
	    <Sider className='sider'>
	    <MyDiaryRouter />
	    </Sider>
		<Route exact 
	    path="/pablic/:articleID/" 
	    component={ArticleDetail} />{" "}
		<Route exact 
	    path="/minigames/loto/" 
	    component={Tickets} />{" "}
	    </Content>
	    </Layout>
	    <Footer className='footer'>
	    <Send />
	    </Footer>
	    </Layout>
	    </Router>
	);
    }
}
export default CustomLayout;
