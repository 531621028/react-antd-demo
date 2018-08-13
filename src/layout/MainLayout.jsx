import React, { Component } from 'react';
import { Layout, Breadcrumb, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './MainLayout.css'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class MainLayout extends Component {
    render() {
        return (
            <Layout theme="dark">
                <Header className="header">
                    <div className="logo" />
                </Header>
                <Layout theme="dark">
                    <Sider width={200}>
                        <Menu mode="inline" theme="dark">
                            <SubMenu key="user" title={<span><Icon type="user" /><span>用户管理</span></span>}>
                                <Menu.Item key="userList">
                                    <Link to="/pages/user/list">用户列表</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="role" title={<span><Icon type="user" /><span>角色管理</span></span>}>
                                <Menu.Item key="roleList">
                                    <Link to="/pages/role/list">角色列表</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout theme="dark" style={{ minHeight: 1000 }}>
                        <Content>
                            {this.props.children}
                        </Content>
                        <Footer theme="dark" style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;