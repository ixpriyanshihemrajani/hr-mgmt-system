import React from 'react'
import  { useState } from 'react';
import { Breadcrumb, Layout } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SideBar from '../Layout/SideBar';
import HeaderNav from '../Layout/HeaderNav';

type Props = {}
const { Content } = Layout;

interface Service {
    name: string;
    imageUrl: string;
    path: string;
  }

  const ServiceCard = ({ name, imageUrl,path }: Service) => {
    return (
      <Link to={path}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-md hover:shadow-blue-950 ">
        <div className="flex justify-center items-center h-32 bg-white">
          <img
            className="h-24 w-24 rounded-full shadow-md shadow-blue-700 object-contain"
            src={imageUrl}
            alt="Profile"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-lg text-center mb-2 hover:text-black" >
            {name}
          </div>
        </div>
      </div>

      </Link>
    );
  };
  
  

const Services = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const services: Service[] = [
        { name: 'Organization', imageUrl: '/src/assets/organization-structure.png',path:'/employee-directory'},
        { name: 'Employee Profile', imageUrl: '/src/assets/user.png',path:'/employee-profile' },
        { name: 'Leave Tracker', imageUrl: '/src/assets/calendar.png' ,path:'/leave-management'},
        { name: 'Attendance Tracker', imageUrl: '/src/assets/approved.png',path:'/attendance-tracking' },
        { name: 'Task Assignment', imageUrl: '/src/assets/employee.png',path:'/task-assignments' },
        { name: 'Performance Review', imageUrl: '/src/assets/increase.png',path:'/performance-reviews' },
        { name: 'Employee Onboarding', imageUrl: '/src/assets/career.png',path:'/employee-onboarding' },
        { name: 'Employee Search', imageUrl: '/src/assets/search.png' ,path:'/employee-search'},
      ];
    

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderNav>
        {/* Pass your header content as children */}
        {/* Example: */}
        <div></div>
      </HeaderNav>
      <Layout>
        <SideBar>
          <Layout>
            <Content style={{ padding: '0 24px', overflowY: 'auto' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">All Services</h1>
                    <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-lg pl-10 pr-4 py-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <MdSearch className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {services
                    .filter((service) => service.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((service, index) => (
                        <ServiceCard key={index} imageUrl={service.imageUrl} name={service.name} path={service.path}/>
                    ))}
                </div>
                </div>
            </Content>
          </Layout>
        </SideBar>
      </Layout>
    </Layout>
  )
}

export default Services;