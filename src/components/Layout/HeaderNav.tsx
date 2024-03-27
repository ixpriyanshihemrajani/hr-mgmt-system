import React from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space ,Tooltip} from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { SearchOutlined, BellOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { logout } from '../../redux/Actions/loginActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const {Header, Content, Footer } = Layout;

interface HeaderNavProps {
  children: React.ReactNode; // Define children prop type as ReactNode
}

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const HeaderNav: React.FC<HeaderNavProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')|| "[]");
  console.log('LoggedInUser:', loggedInUser);
  
  // Retrieve user data from localStorage
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  
  // Filter the data based on the emailId of the loggedInUser
  const employeeData = data.filter((user: { emailId: any; }) => user.emailId === loggedInUser);
  console.log(employeeData, "hello world");
  
  if (employeeData.length > 0) {
      console.log('Employee ID:', employeeData[0]?.employeeId); // Access employeeId only if employeeData[0] is defined
  } else {
      console.log('No user data found for the logged-in user');
  }

  return (
    <Layout>
      <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white', // Set background color to white
        padding: '0 24px', // Add padding to the header
        borderBottom: '1px solid #e0e0e0', // Add grey line as separator
      }}
    >
      <div className="logo" style={{ width: 160, height: 60, marginRight: 'auto' }}>
        <img src="/src/assets/companyLogo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 400, marginRight: 24 }} />
      </div>
      <Space>
      <Tooltip title="Notifications">
        <BellOutlined style={{ marginRight: 10, fontSize: 20 }} />
      </Tooltip>
      <img
        src={employeeData[0].photo}
        alt="Profile"
        style={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          marginRight: 10,
          objectFit: 'cover',
        }}
      />
      <Tooltip title="Sign Out">
        <Link to='/login'>
          <LogoutOutlined style={{ fontSize: 20 }} onClick={handleLogout} />
        </Link>
      </Tooltip>
    </Space>
      <style>{`
        .ant-menu-horizontal {
          border-bottom: none; // Remove bottom border from menu
        }
        .ant-menu-horizontal > .ant-menu-item:hover,
        .ant-menu-horizontal > .ant-menu-submenu:hover {
          background-color: white; // Change background color on hover
        }
      `}</style>
    </Header>
    {children}
      {/* <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};


export default HeaderNav;
