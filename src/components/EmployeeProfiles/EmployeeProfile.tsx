import React from "react";
import { Breadcrumb, Layout } from "antd";
import { DesktopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SideBar from "../Layout/SideBar";
import HeaderNav from "../Layout/HeaderNav";
import { FcDepartment, FcBusinessman, FcPhone, FcGlobe } from "react-icons/fc";

const { Content } = Layout;

type Props = {};


interface DataType {
  key: React.Key;
  photo: string;
  employeeId: number;
  name: string;
  emailId: string;
  department: string;
  title: string;
  dateOfJoining: string;
  phone: string;
  reportingTo: string;
  role: string;
  age: number;
  address: string;
  birthDate: string;
}

const data: DataType[] = [
  {
    key: "1",
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
    birthDate: "2000-06-16",
  },
];


const EmployeeProfile = (props: Props) => {

    const CircleSegment: React.FC<{ color: string; size: string }> = ({ color, size }) => (
        <span
          className={`inline-block w-${size} h-${size} rounded-full bg-${color}`}
          style={{
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 100% 100%, 50% 100%)",
            transform: "translate(-50%)",
          }}
        ></span>
      );      

  return (
    <Layout>
      <HeaderNav>
        {/* Pass your header content as children */}
        {/* Example: */}
        <div></div>
      </HeaderNav>
      <Layout>
        <SideBar>
          <Layout>
            <Content style={{paddingLeft:"24px" ,overflowY: "auto" }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb> */}
              <div
                className="h-48 bg-cover bg-center flex flex-col justify-between items-center"
                style={{
                  backgroundImage: `url('/src/assets/EmployeeProfileBackground.jpg')`,
                }}
              >
                <img
                  className="object-cover w-32 h-32 rounded-full overflow-hidden mt-5 border-4 border-white"
                  src="/src/assets/ProfilePhoto.jpg"
                  alt="/src/assets/user.png"
                />
                <div className="text-white flex flex-row justify-between text-lg font-medium">
                    <p className="mr-7">{data[0].employeeId}-{data[0].name}</p>
                    <p className="mx-7">{data[0].title}</p>
                    <p className="mx-7">{data[0].department}</p>
                    <p className="ml-7">{data[0].emailId}</p>
                </div>
              </div>
              <div className=" bottom-0 w-full bg-white h-10"></div>
              <div className="flex">
                <div className="w-60 bg-gray-800 text-white ">
                    <div className="border-l-4 border-blue-500 
                    bg-neutral-400 h-16 pl-2 pt-4 text-lg font-medium">Profile</div>
                    </div>
                <div className="w-4/5 flex flex-row my-6">
                    <div className="w-1/2 flex flex-col mx-5">
                        <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment color="blue-500" size="6" />
                                About Me
                            </h2>
                            <div className="flex flex-wrap my-6 pl-5">
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-6 h-6 mr-2 "
                                    src="/src/assets/head.png" />
                                    <p className="text-sm font-medium">{data[0].department}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/suitcase.png"/>
                                    <p className="text-sm font-medium">{data[0].title}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-4 h-4 mr-2 " 
                                    src="/src/assets/phone-call.png"/>
                                    <p className="text-sm font-medium">{data[0].phone}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/location.png"/>
                                    <p className="text-sm font-medium">Hyderabad Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment color="blue-500" size="6" />
                                Organization Structure
                            </h2>
                            <div className="flex flex-wrap my-6 pl-5">
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-6 h-6 mr-2 "
                                    src="/src/assets/head.png" />
                                    <p className="text-sm font-medium">{data[0].department}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/suitcase.png"/>
                                    <p className="text-sm font-medium">{data[0].title}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-4 h-4 mr-2 " 
                                    src="/src/assets/phone-call.png"/>
                                    <p className="text-sm font-medium">{data[0].phone}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/location.png"/>
                                    <p className="text-sm font-medium">Hyderabad Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment color="blue-500" size="6" />
                                Work
                            </h2>
                            <div className="flex flex-wrap my-6 pl-5">
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-6 h-6 mr-2 "
                                    src="/src/assets/head.png" />
                                    <p className="text-sm font-medium">{data[0].department}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/suitcase.png"/>
                                    <p className="text-sm font-medium">{data[0].title}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-4 h-4 mr-2 " 
                                    src="/src/assets/phone-call.png"/>
                                    <p className="text-sm font-medium">{data[0].phone}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/location.png"/>
                                    <p className="text-sm font-medium">Hyderabad Location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col mr-5"> 
                    <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment color="blue-500" size="6" />
                                Reporting To
                            </h2>
                            <div className="flex flex-wrap my-6 pl-5">
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-6 h-6 mr-2 "
                                    src="/src/assets/head.png" />
                                    <p className="text-sm font-medium">{data[0].department}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/suitcase.png"/>
                                    <p className="text-sm font-medium">{data[0].title}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-4 h-4 mr-2 " 
                                    src="/src/assets/phone-call.png"/>
                                    <p className="text-sm font-medium">{data[0].phone}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/location.png"/>
                                    <p className="text-sm font-medium">Hyderabad Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment color="blue-500" size="6" />
                                Personal
                            </h2>
                            <div className="flex flex-wrap my-6 pl-5">
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-6 h-6 mr-2 "
                                    src="/src/assets/head.png" />
                                    <p className="text-sm font-medium">{data[0].department}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/suitcase.png"/>
                                    <p className="text-sm font-medium">{data[0].title}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-4 h-4 mr-2 " 
                                    src="/src/assets/phone-call.png"/>
                                    <p className="text-sm font-medium">{data[0].phone}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/location.png"/>
                                    <p className="text-sm font-medium">Hyderabad Location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </Content>
          </Layout>
        </SideBar>
      </Layout>
    </Layout>
  );
};

export default EmployeeProfile;
