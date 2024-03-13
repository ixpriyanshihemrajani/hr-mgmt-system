import React, { useState } from 'react'; 
import {
  DesktopOutlined,
  HomeOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Button,  Tooltip } from "antd";
import { RxDashboard } from "react-icons/rx";
import { CgPerformance } from "react-icons/cg";
import { FaTasks, FaUserPlus } from "react-icons/fa";
import { FcLeave } from "react-icons/fc";
import { IoPersonSharp } from "react-icons/io5";
import { MdCoPresent } from "react-icons/md";
import { RiUserSearchFill } from "react-icons/ri";
import { FcServices } from "react-icons/fc";
import { Link } from 'react-router-dom';
import logo from './innovlogo.png';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import { Content } from "antd/es/layout/layout";


type Props = {}

const { Header, Content, Footer, Sider } = Layout;

interface SideBarProps {
  children: React.ReactNode; // Define children prop type as ReactNode
}

interface SidebarItem {
  key: string;
  icon: React.ReactNode;
  title: string;
  path: string;
}

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

const SideBar: React.FC<SideBarProps> = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className=" overflow-y-scroll" style={{ width:"auto" ,height: "100vh "}}>
      <Sider collapsible collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="sm"
      className={`${collapsed ? 'collapsed' : ''} sm:w-fit w-[100%] h-full  flex`}
      style={{ overflowY: 'auto', height: '100vh' }}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

        <Menu.Item key="1" icon
        ={<FcServices />}>
        <Link to="/services">Services</Link>
        </Menu.Item>
          
        <Menu.SubMenu key="sub1" icon={<HomeOutlined />} title="Home">

        <Menu.Item key="2">
        <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>

        </Menu.SubMenu>

        <Menu.Item key="3" icon
        ={<IoPersonSharp />}>
        <Link to="/employee-directory">Employee Directory</Link>
        </Menu.Item>

        <Menu.SubMenu key="sub2" icon={<UserOutlined />} title="Employee Profile">

        <Menu.Item key="4">
        <Link to="/employee-profile">Profile</Link>
        </Menu.Item>

        <Menu.Item key="5">
        <Link to="/employee-profile/job-history">Job History</Link>
        </Menu.Item>

        <Menu.Item key="6">
        <Link to="/employee-profile/skills">Skills</Link>
        </Menu.Item>

        <Menu.Item key="7">
        <Link to="/employee-profile/performance-metrics">Performance Metrics</Link>
        </Menu.Item>

        </Menu.SubMenu>

        <Menu.Item key="8" icon={<FcLeave/>}>
        <Link to="/leave-management">Leave Management</Link>
        </Menu.Item>

        <Menu.Item key="9" icon={<MdCoPresent  />}>
        <Link to="/attendance-tracking">Attendance Tracking</Link>
        </Menu.Item>

        <Menu.Item key="10" icon={<FaTasks />}>
        <Link to="/task-assignments">Task Assignments</Link>
        </Menu.Item>

        <Menu.Item key="11" icon={<CgPerformance  />}>
        <Link to="/performance-reviews">Performance Reviews</Link>
        </Menu.Item>

        <Menu.Item key="12" icon={<FaUserPlus />}>
        <Link to="/employee-onboarding">Employee Onboarding</Link>
        </Menu.Item>

        <Menu.Item key="13" icon={<RiUserSearchFill/>}>
        <Link to="/employee-search">Employee Search</Link>
        </Menu.Item>

        </Menu>
        </Sider>

        {children}
      
    </Layout>
  );
};




export default SideBar
