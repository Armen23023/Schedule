import React, { useState,useEffect } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import './index.css';
import {  useNavigate } from "react-router-dom";
import { Select, Table,Button,Input,Space } from 'antd';


import {
    DesktopOutlined,
    ContainerOutlined,
    SettingOutlined,
    ImportOutlined,
    IdcardTwoTone ,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

  

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

const { Option } = Select;

const { SubMenu } = Menu;

const dataSource = [
  {
    key: '1',
    course: 'Համակարգչային ծրագրավորում',
    day1: '9։30-10։50',
    day2: '5207ա',
    day3: 'Գանովիչ Տ․',
    day4: 'Լաբորատոր',
  },
  {
    key: '2',
    course: 'ՏԲ Նախագծման տեխնոլոգիա',
    day1: '11:00-12:20',
    day2: '5211',
    day3: 'Հովհաննիսյան Է․',
    day4: 'Դասախոսություն',

  },
  {
    key: '3',
    course: 'Համակարգչային ծրագրավորում',
    day1: '12։50-14։10',
    day2: '5220',
    day3: 'Գանովիչ Տ․',
    day4: 'Լաբորատոր',
  },
  {
    key: '3',
    course: 'Կենսաբանական անվտանգություն',
    day1: '14։20-15։40',
    day2: '2446',
    day3: 'Ասատրյան Ն․',
    day4: 'Դասախոսություն',
  },
];

const columns = [
  {
    title: 'Առարկա',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'Տևողություն',
    dataIndex: 'day1',
    key: 'day1',
  },
  {
    title: 'Լսարան',
    dataIndex: 'day2',
    key: 'day2',
  },
  {
    title: 'Դասախոս',
    dataIndex: 'day3',
    key: 'day3',
  },
  {
    title: 'Դասի տեսակը',
    dataIndex: 'day4',
    key: 'day4',
  },
];

const weekDays = [
  { value: 'Monday', label: 'Երկուշաբթի' },
  { value: 'Tuesday', label: 'Երեքշաբթի' },
  { value: 'Wednesday', label: 'Չորեքշաբթի' },
  { value: 'Thursday', label: 'Հինգշաբթի' },
  { value: 'Friday', label: 'Ուրբաթ' },
];

const key = [
  { value: 'Համակարգչային ծրագրավորում', value:'ՏԲ Նախագծման տեխնոլոգիա', label: 'Համարիչ' },
  { value: 'Physics', label: 'Հայտարար' },

];








const Index = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchDay, setSearchDay] = useState(null);
    const [searchCourse, setSearchCourse] = useState(null);
  
    const handleDayChange = (value) => {
      setSearchDay(value);
    };
  
    const handleCourseChange = (value) => {
      setSearchCourse(value);
    };
  
    const filteredDataSource = dataSource.filter(
      (item) =>
        (!searchDay || item[searchDay.toLowerCase()] !== '') &&
        (!searchCourse || item.course === searchCourse)
    );
 
  

    

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
            <Breadcrumb.Item>Դասացուցակներ</Breadcrumb.Item>
            <Breadcrumb.Item>Որոնում</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >



          <div style={{ marginBottom: 16 }}>
          <Space>
            <span>Filter by day:</span>
            <Select
              defaultValue=""
              style={{ width: 140 }}
              onChange={handleDayChange}
            >
              <Option value="">All</Option>
              {weekDays.map((day) => (
                <Option value={day.value} key={day.value}>
                  {day.label}
                </Option>
              ))}
            </Select>
            <span>Filter by course:</span>
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleCourseChange}
            >
              <Option value="">Համարիչ</Option>
              {key.map((course) => (
                <Option value={course.value} key={course.value}>
                  {course.label}
                </Option>
              ))}
            </Select>
            <Input placeholder="Search" style={{ width: 200 }} />
            <Button>Search</Button>
          </Space>
        </div>
        <Table dataSource={filteredDataSource} columns={columns} />
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