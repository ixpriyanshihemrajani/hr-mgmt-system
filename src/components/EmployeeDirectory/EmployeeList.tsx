import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SideBar from '../Layout/SideBar';
import HeaderNav from '../Layout/HeaderNav';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { IoMdAdd } from 'react-icons/io';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';

const { Content } = Layout;

interface DataType {
    key: React.Key;
    photo: string;
    employeeId: number;
    name: string;
    emailId: string;
    department: string;
    title: string;
    dateOfJoining:string;
    phone: string;
    reportingTo: string;
    role:string;
    age: number;
    address: string;
    birthDate:string;
  }
  
const columns:ColumnsType<DataType> = [
    {
        title: (
            <div className="text-sm font-semibold">Photo</div>),
        width: 100,
        dataIndex: 'photo',
        render: (photo: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <img
                    className="rounded-full"
                    src={photo}
                    alt="Profile"
                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }}
                />
            </div>
        ),
        
    },
    {
        title: (
            <div className="text-sm font-semibold">EmployeeId</div>),
        width: 120,
        dataIndex: 'employeeId',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
        
    },
    {
      title: (
        <div className="text-sm font-semibold">Employee Name</div>),
      width: 200,
      dataIndex: 'name',
      render: (text: string) => (
        <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {text}
        </div>),
      
    },
    {
        title: (
            <div className="text-sm font-semibold">EmailId</div>),
        width: 300,
        dataIndex: 'emailId',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            color:'blue'}}>
              {text}
            </div>),
        
    },
    {
      title: (
        <div className="text-sm font-semibold">Department</div>),
      width: 300,
      dataIndex: 'department',
      render: (text: string) => (
        <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {text}
        </div>),
    },
    {
        title: (
            <div className="text-sm font-semibold">Title</div>),
        width: 300,
        dataIndex: 'title',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
        
    },
    {
        title: (
            <div className="text-sm font-semibold">Date of Joining</div>),
        width: 150,
        dataIndex: 'dateOfJoining',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
        
    },
    {
        title: (
            <div className="text-sm font-semibold">Mobile No.</div>),
        width: 150,
        dataIndex: 'phone',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
        
    },
    {
        title: (
            <div className="text-sm font-semibold">Reporting To</div>),
        width: 200,
        dataIndex: 'reportingTo',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
        
    },
    {
        title: (
            <div className="text-sm font-semibold">Role</div>),
        width: 200,
        dataIndex: 'role',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
        
    },
    {
        title: (
            <div className="text-sm font-semibold">Age</div>),
        width: 100,
        dataIndex: 'age',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
        
    },
    {
        title: (
            <div className="text-sm font-semibold">Address</div>),
        width: 300,
        dataIndex: 'address',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
       
    },
    {
        title: (
            <div className="text-sm font-semibold">Birth Date</div>),
        width: 150,
        dataIndex: 'birthDate',
        render: (text: string) => (
            <div style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {text}
            </div>),
       
    },
    {
        title: (
          <div className="text-sm font-semibold">Update</div>
        ),
        width: 90,
        render: () => (
          <IoMdCreate className="text-blue-400 cursor-pointer hover:text-blue-700" size={24} />
        ),
      },
      {
        title: (
          <div className="text-sm font-semibold">Delete</div>
        ),
        width: 90,
        render: () => (
          <IoMdTrash className="text-red-400 cursor-pointer hover:text-red-700" size={24} />
        ),
      },
    
  ];


function createDate(year: number, month: number, day: number): Date {
    return new Date(year, month - 1, day);
}

function createEmployeeImage(src: string): HTMLImageElement {
    const image = document.createElement('img');
    image.src = src;
    return image;
}
  
  const data: DataType[] = [
    {
        key: "1",
        photo: "/src/assets/Employee1.jpg",
        employeeId: 1001,
        name: "Alexandra Turner",
        emailId: "alexandra.turner@example.com",
        department: "Marketing",
        title: "Senior Marketing Strategist",
        dateOfJoining: "2022-06-15",
        phone: "123-456-7891",
        reportingTo: "Marketing Director",
        role: "Marketing Lead",
        age: 32,
        address: "123 Marketing Avenue, Cityville",
        birthDate: "1989-04-20"
    },
    {
        key: "2",
        photo: "/src/assets/Employee2.jpg",
        employeeId: 1002,
        name: "Sebastian Blackwood",
        emailId: "sebastian.blackwood@example.com",
        department: "Engineering",
        title: "Principal Software Engineer",
        dateOfJoining: "2021-10-10",
        phone: "123-456-7892",
        reportingTo: "Engineering Manager",
        role: "Lead Developer",
        age: 35,
        address: "456 Tech Boulevard, Techcity",
        birthDate: "1986-08-05"
    },
    {
        key: "3",
        photo: "/src/assets/Employee3.jpg",
        employeeId: 1003,
        name: "Isabella Knight",
        emailId: "isabella.knight@example.com",
        department: "Finance",
        title: "Chief Financial Officer",
        dateOfJoining: "2020-03-25",
        phone: "123-456-7893",
        reportingTo: "CEO",
        role: "Financial Strategist",
        age: 40,
        address: "789 Finance Street, Financetown",
        birthDate: "1982-11-12"
    },
    {
        key: "4",
        photo: "/src/assets/Employee4.jpg",
        employeeId: 1004,
        name: "Maximilian Adler",
        emailId: "maximilian.adler@example.com",
        department: "Research and Development",
        title: "Lead Research Scientist",
        dateOfJoining: "2023-01-05",
        phone: "123-456-7894",
        reportingTo: "Research Director",
        role: "Senior Scientist",
        age: 38,
        address: "1011 Innovation Street, Innovatetown",
        birthDate: "1984-06-28"
    },
    {
        key: "5",
        photo: "/src/assets/Employee5.jpg",
        employeeId: 1005,
        name: "Victoria Santiago",
        emailId: "victoria.santiago@example.com",
        department: "Sales",
        title: "Sales Director",
        dateOfJoining: "2021-08-20",
        phone: "123-456-7895",
        reportingTo: "CEO",
        role: "Sales Strategist",
        age: 36,
        address: "1212 Sales Street, Salestown",
        birthDate: "1985-09-15"
    },
    {
      key: "6",
      photo: "/src/assets/ProfilePhoto.jpg",
      employeeId: 1006,
      name: "Priyanshi Hemrajani",
      emailId: "priyanshi.hemrajani@example.com",
      department: "Technology Services",
      title: "Software Engineer Intern",
      dateOfJoining: "2022-05-9",
      phone: "123-476-8851",
      reportingTo: "Technical Lead",
      role: "Team Member",
      age: 25,
      address: "252 Sanjay Colony",
      birthDate: "2000-06-16"
  },
    
  ];


const EmployeeList: React.FC = () => {

    
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
              {/* <div style={{ padding: 24, minHeight: 700, background: '#fff' }}> */}
              <div className="flex justify-between items-center my-8">
                <h1 className="text-2xl font-bold">Employee View</h1>
                <button className="flex items-center  text-white font-semibold py-2 px-3 rounded text-lg"
                style={{ backgroundColor: '#003566' }}>
                    <IoMdAdd className="mr-2 size-6 " style={{ fontWeight: 'bold' }} />
                    Add
                </button>
            </div>

                <div className="border-t border-b ">
                <Table
                    columns={columns} 
                    dataSource={data}
                    scroll={{ x: 1300, y: 1300 }}
                    pagination={false} // Disable pagination for simplicity
                    bordered={false} // Disable default table border
                    components={{
                        header: {
                            cell: (props: any) => <th {...props} style={{ backgroundColor: '#003566',color:'white', border:'none'}} />,
                        },
                    }}
                />
                </div>

              {/* </div> */}
            </Content>
          </Layout>
        </SideBar>
      </Layout>
    </Layout>
  );
};

export default EmployeeList;

