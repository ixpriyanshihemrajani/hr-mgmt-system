import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SideBar from '../Layout/SideBar';
import HeaderNav from '../Layout/HeaderNav';

const { Content } = Layout;

type Props = {}

const AttendanceForm = (props: Props) => {
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
              <div style={{ padding: 24, minHeight: 700, background: '#fff' }}>
                ContentCorruption is a form of dishonesty or a criminal offense which is un
              </div>
            </Content>
          </Layout>
        </SideBar>
      </Layout>
    </Layout>
  )
}

export default AttendanceForm