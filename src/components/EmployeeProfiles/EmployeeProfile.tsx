import React from "react";
import { Breadcrumb, Layout } from "antd";
import { DesktopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SideBar from "../Layout/SideBar";
import HeaderNav from "../Layout/HeaderNav";
import { FcWorkflow } from "react-icons/fc";

const { Content } = Layout;

type Props = {};

const EmployeeProfile = (props: Props) => {

    const CircleSegment: React.FC<{  size: string }> = ({  size }) => (
        <span
          className={`inline-block w-${size} h-${size} rounded-full bg-blue-600`}
          style={{
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 100% 100%, 50% 100%)",
            transform: "translate(-50%)",
          }}
        ></span>
      );      

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
                  src= {employeeData[0].photo}
                  alt="/src/assets/user.png"
                />
                <div className="text-white flex flex-row justify-between text-base font-medium">
                    <p className="ml-7">{employeeData[0].employeeId}-{employeeData[0].name}</p>
                    <p className="mx-7">{employeeData[0].title}</p>
                    <p className="mx-7">{employeeData[0].department}</p>
                    <p className="mr-7">{employeeData[0].emailId}</p>
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
                                <CircleSegment size="6" />
                                About Me
                            </h2>
                            <div className="flex flex-wrap my-6 pl-5">
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-6 h-6 mr-2 "
                                    src="/src/assets/head.png" />
                                    <p className="text-base text-ellipsis font-medium overflow-hidden whitespace-nowrap mr-6">
                                        {employeeData[0].department}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2" src="/src/assets/suitcase.png" alt="Suitcase icon" />
                                    <p className="text-base text-ellipsis font-medium overflow-hidden whitespace-nowrap mr-6">
                                        {employeeData[0].title}
                                    </p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-4 h-4 mr-2 " 
                                    src="/src/assets/phone-call.png"/>
                                    <p className="text-base text-ellipsis font-medium"
                                    style={{textOverflow: 'ellipsis' }}>{employeeData[0].phone}</p>
                                </div>
                                <div className="w-1/2 flex items-center mb-6">
                                    <img className="w-5 h-5 mr-2 " 
                                    src="/src/assets/location.png"/>
                                    <p className="text-base text-ellipsis font-medium"
                                    style={{textOverflow: 'ellipsis' }}>Hyderabad Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment  size="6" />
                                Organization Structure
                            </h2>
                            <div className="flex flex-wrap my-6 pl-5">
                                <div className="mb-6">
                                    <div className="flex flex-col">
                                        <p className="text-base font-medium pl-2 text-gray-500 flex flex-row">
                                        <FcWorkflow className="w-6 h-6 mr-3" />
                                            Department</p>
                                        <p className="pl-11 text-base font-semibold">{employeeData[0].department}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment  size="6" />
                                Work
                            </h2>
                            <div className="ml-8 mt-2 mb-10 mr-6">
                                <table className="border-collapse w-full ">
                                    <tbody>
                                        <tr >
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Department</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium text-ellipsis 
                                            overflow-hidden whitespace-nowrap" style={{ maxWidth: '150px' }}>{employeeData[0].department}</td>
                                        </tr>
                                        <tr >
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Position</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].title}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Date Of Joining</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].dateOfJoining}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Reporting To</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].reportingTo}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Role</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].role}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col mr-5"> 
                    <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment  size="6" />
                                Reporting To
                            </h2>
                            <div className="flex flex-wrap my-6 pl-5">
                                <div className=" mb-6">
                                    <div className="flex flex-row items-center">
                                        <img src="/src/assets/reportingTo.jpg" alt="Profile" className="w-14 h-14 rounded-full mr-3" />
                                        <div className="flex flex-col">
                                            <p className=" text-base font-semibold">{employeeData[0].reportingTo}</p>
                                            <p className="text-base font-medium  text-gray-500 flex flex-row">Technical Lead</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm shadow-md pt-4 mb-4 ">
                            <h2 className="text-base font-bold mb-2 flex items-center">
                                <CircleSegment size="6" />
                                Personal
                            </h2>
                            <div className="ml-8 mt-2 mb-10 mr-6">
                                <table className="border-collapse w-full ">
                                    <tbody>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Employee Id</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].employeeId}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Name</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].name}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium text-gray-500">Email Id</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium text-ellipsis overflow-hidden whitespace-nowrap" style={{ maxWidth: '150px' }}>
                                            {employeeData[0].emailId}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Mobile No.</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].phone}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Age</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].age}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Birth Date</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].birthDate}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            text-gray-500">Address</td>
                                            <td className="py-4 border-b border-gray-300 text-base font-medium
                                            ">{employeeData[0].address}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
