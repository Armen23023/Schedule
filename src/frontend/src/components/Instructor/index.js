import React, { useState,useEffect } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import './index.css';
import {  useNavigate } from "react-router-dom";
import { Input, Table,Card,Avatar,Button } from 'antd';


import {
    DesktopOutlined,
    ContainerOutlined,
    SettingOutlined,
    ImportOutlined,
    IdcardTwoTone ,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { useUser } from '../../userProvider';

  

function parseJwt (token) {
  

  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

var jwtObj = parseJwt(localStorage.getItem('BearerToken')) ;
var firstname = jwtObj.user.firstname;

  
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children,navigate, href = "") {
    return {
      key,
      icon,
      children,
      label,
      href,
      onClick: () => {
        if (href !== "") navigate(href);
      },
    };
    
  }
  function Navo(){
    const navigate = useNavigate();

  const items = [
      


    getItem('Դասացուցակներ', '1', <DesktopOutlined />,undefined,navigate, "/dashboard"),
    getItem('Դասախոսներ', '2', <IdcardTwoTone />,undefined,navigate,"/instructor"),
    getItem(firstname , 'sub1', <UserOutlined />, [
      getItem('Իմ Էջը','3',<UserOutlined />,undefined,navigate,"/homepage"),
      getItem('Կարգավորումներ','4',<SettingOutlined />,undefined),
      getItem('Դորս գալ','5',<ImportOutlined />,undefined,'login'),
    ]),
    getItem('Խումբ', 'sub2', <TeamOutlined />, [getItem('Team 1', '6',undefined,undefined), getItem('Team 2', '8',undefined,undefined)]),
    getItem('Նորություններ', '9', <ContainerOutlined />,undefined),
  ];
return items
}

const { SubMenu } = Menu;
const { Search } = Input;

const instructorData = [
  {
    name: 'Անուն Ազգանուն',
    photoUrl: 'https://www.google.com/search?q=photo+profile&oq=photo+profile&aqs=chrome..69i57.8529j0j7&sourceid=chrome&ie=UTF-8#imgrc=QsatBu9zpFWl5M',
    description: 'C++ developer, Back-end engineer',
  },
  {
    name: 'Jane Smith',
    photoUrl: 'https://example.com/jane-smith.png',
    description: 'Java SE,EE,Spring Boot, FullStack developer',
  },
  {
    name: 'Անուն Միրզոյան',
    photoUrl: 'https://www.google.com/search?q=photo+profile&oq=photo+profile&aqs=chrome..69i57.8529j0j7&sourceid=chrome&ie=UTF-8#imgrc=QsatBu9zpFWl5M',
    description: 'Android developer',
  },
  {
    name: 'Անուն Գասպարյան',
    photoUrl: 'https://www.google.com/search?q=photo+profile&oq=photo+profile&aqs=chrome..69i57.8529j0j7&sourceid=chrome&ie=UTF-8#imgrc=QsatBu9zpFWl5M',
    description: 'Հայոց պատմություն, Հայ Գրականություն',
  },
];








const Index = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = (value) => {
      setSearchQuery(value);
      const results = instructorData.filter(instructor => 
        instructor.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    };
  




    

    return (
      <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed}
       onCollapse={ setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={Navo()} />
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
            <Breadcrumb.Item>Դասախոսներ</Breadcrumb.Item>
            <Breadcrumb.Item>Որոնում</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Search
              placeholder="Որոնել դասախոսին "
              allowClear
              enterButton="Որոնել"
              size="middle"
              onSearch={handleSearch}
            />
            {searchQuery && (
              <div>
                {searchResults.length > 0 ? (
                  searchResults.map(instructor => (
                    <Card key={instructor.name} style={{ marginTop: 16 }}>
                      <Card.Meta
                        avatar={<Avatar src={instructor.photoUrl} />}
                        title={instructor.name}
                        description={instructor.description}
                      />
                      
                      <Button type="primary">Տեսնել անձնական տվյալները</Button>
                    </Card>
                  ))
                ) : (
                  <p>No results found for "{searchQuery}"</p>
                )}
              </div>
            )}
          </div>









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