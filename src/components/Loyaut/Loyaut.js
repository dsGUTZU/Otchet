import React from 'react';
import { Table, Radio, Divider } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Layout, Menu, Avatar } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import CustomAvatar from '../Avatar/Avatar';
import CustomFriend from '../Title/Title';
import CustomGroup from '../Title/Group';
import CustomGame from '../Title/Game';
import CustomMusic from '../Title/Music';
const { Header, Content, Footer, Sider } = Layout;

export default class Noname extends React.Component{
    render(){
        return(
            <Router>
            <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <UserOutlined />
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <UserOutlined />
          <Link to="/music">Music</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <UserOutlined />
          <Link to="/friends">Friend</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <UserOutlined />
          <Link to="/friends">Game</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <UserOutlined />
          <Link to="/friends">Group</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Switch>
        <Route exact path="/home">
            <CustomAvatar />
          </Route>
          <Route exact path="/friends">
            <CustomFriend />
          </Route>
          <Route exact path="/music">
            <CustomMusic />
          </Route>
          <Route exact path="/game">
            <CustomGame />
          </Route>
          <Route exact path="/group">
            <CustomGroup />
          </Route>
        </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  </Router>
        )
    }
}