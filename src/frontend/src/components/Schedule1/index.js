import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Route } from 'react-router-dom';
import './schedule.css';
import {
    DesktopOutlined,
    ContainerOutlined,
    SettingOutlined,
    ImportOutlined,
    IdcardTwoTone ,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

  
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Դասացուցակներ', '2', <DesktopOutlined />),
    getItem('Դասախոսներ', '1', <IdcardTwoTone />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Իմ Էջը','3',<UserOutlined />),
      getItem('Կարգավորումներ','4',<SettingOutlined />),
      getItem('Դորս գալ','5',<ImportOutlined />),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Նորություններ', '9', <ContainerOutlined />),
  ];





const Index = () => {
    const [collapsed, setCollapsed] = useState(false);







    return (
        <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed}
         onCollapse={ setCollapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            National Polytechnic University of Armenia
          </Footer>
        </Layout>
      </Layout>
    );
};

export default Index;