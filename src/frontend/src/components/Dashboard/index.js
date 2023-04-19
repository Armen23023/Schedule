import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import './index.css';
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
  function getItem(label, key, icon, children,href) {
    return {
      key,
      icon,
      children,
      label,
      href
    };
  }
  const items = [
    getItem('Դասացուցակներ', '1', <DesktopOutlined />,undefined,'schedule'),
    getItem('Դասախոսներ', '2', <IdcardTwoTone />,undefined),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Իմ Էջը','3',<UserOutlined />,undefined),
      getItem('Կարգավորումներ','4',<SettingOutlined />,undefined),
      getItem('Դորս գալ','5',<ImportOutlined />,undefined,'login'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6',undefined,undefined), getItem('Team 2', '8',undefined,undefined)]),
    getItem('Նորություններ', '9', <ContainerOutlined />,undefined),
  ];





const Index = () => {
    const [collapsed, setCollapsed] = useState(false);
  







    return (
        <Layout
        style={{
          minHeight: '100vh',
        }}
      >
  <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <a href={item.href}>{item.label}</a>
          {item.children && (
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children.map((child) => (
                <Menu.Item key={child.key} icon={child.icon}>
                  <a href={child.href}>{child.label}</a>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
        </Menu.Item>
      ))}
    </Menu>
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