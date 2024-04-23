import React, { useState,useEffect, useRef } from 'react';
import { Breadcrumb, Layout, Tooltip } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SideBar from '../Layout/SideBar';
import HeaderNav from '../Layout/HeaderNav';
import { FcPrevious , FcNext } from "react-icons/fc";
import { BiCalendar } from 'react-icons/bi';

const { Content } = Layout;

type Props = {}

interface DataType {
  key: React.Key;
  date:Date;
  holidayName: string;
  restricted: boolean;
}

const LeaveRequestList = (props: Props) => {

  const holidays: DataType[] = [
    {
      key: "1",
      date: new Date(2024, 0, 1), // January 1st, 2024
      holidayName: "New Year",
      restricted: false
    },
    {
      key: "2",
      date: new Date(2024, 0, 15), // January 15th, 2024
      holidayName: "Makar Sankranti/Pongal",
      restricted: false
    },
    {
      key: "3",
      date: new Date(2024, 0, 26), // January 26th, 2024
      holidayName: "Republic Day",
      restricted: false
    },
    {
      key: "4",
      date: new Date(2024, 1, 14), // February 14th, 2024
      holidayName: "Vasant Panchami",
      restricted: true
    },
    {
      key: "5",
      date: new Date(2024, 2, 8), // March 8th, 2024
      holidayName: "Maha Shivaratri",
      restricted: true
    },
    {
      key: "6",
      date: new Date(2024, 2, 25), // March 25th, 2024
      holidayName: "Holi",
      restricted: true
    },
    {
      key: "7",
      date: new Date(2024, 2, 29), // March 29th, 2024
      holidayName: "Good Friday",
      restricted: false
    },
    {
      key: "8",
      date: new Date(2024, 3, 10), // April 10th, 2024
      holidayName: "Eid-al-Fitr/Ugadi",
      restricted: false
    },
    {
      key: "9",
      date: new Date(2024, 3, 17), // April 17th, 2024
      holidayName: "Rama Navami",
      restricted: true
    },
    {
      key: "10",
      date: new Date(2024, 4, 1), // May 1st, 2024
      holidayName: "May Day",
      restricted: false
    },
    {
      key: "11",
      date: new Date(2024, 4, 23), // May 23rd, 2024
      holidayName: "Buddha Purnima",
      restricted: true
    },
    {
      key: "12",
      date: new Date(2024, 5, 17), // June 17th, 2024
      holidayName: "Bakr Eid/Eid-ul-adha",
      restricted: true
    },
    {
      key: "13",
      date: new Date(2024, 6, 17), // July 17th, 2024
      holidayName: "Muharram",
      restricted: true
    },
    {
      key: "14",
      date: new Date(2024, 7, 15), // August 15th, 2024
      holidayName: "Independence Day",
      restricted: false
    },
    {
      key: "15",
      date: new Date(2024, 7, 19), // August 19th, 2024
      holidayName: "Raksha Bandhan",
      restricted: true
    },
    {
      key: "16",
      date: new Date(2024, 7, 26), // August 26th, 2024
      holidayName: "Janmashtami",
      restricted: true
    },
    {
      key: "17",
      date: new Date(2024, 9, 2), // October 2nd, 2024
      holidayName: "Mahatma Gandhi Jayanti",
      restricted: false
    },
    {
      key: "18",
      date: new Date(2024, 9, 11), // October 11th, 2024
      holidayName: "Maha Navami",
      restricted: true
    },
    {
      key: "19",
      date: new Date(2024, 9, 31), // October 31st, 2024
      holidayName: "Diwali OR Deepawali",
      restricted: false
    },
    {
      key: "20",
      date: new Date(2024, 10, 7), // November 7th, 2024
      holidayName: "Chhat Pooja",
      restricted: true
    },
    {
      key: "21",
      date: new Date(2024, 10, 15), // November 15th, 2024
      holidayName: "Guru Nanak Jayanti",
      restricted: true
    },
    {
      key: "22",
      date: new Date(2024, 12, 25), // November 15th, 2024
      holidayName: "Christmas",
      restricted: false
    }
  ];

    useEffect(() => {
      localStorage.setItem('holidays', JSON.stringify(holidays));
    }, [holidays]);

    //get data from local storage
    const localStorageHolidays = localStorage.getItem('holidays');
    const showHolidays = localStorageHolidays ? JSON.parse(localStorageHolidays
      ) : [];

      
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

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const startDate = new Date(currentYear, 0, 1); // January 1st of the current year
      const endDate = new Date(currentYear, 11, 31); // December 31st of the current year
    
      // Format dates as "01-Jan-YYYY - 31-Dec-YYYY"
      const formattedStartDate = startDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
      const formattedEndDate = endDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });


      const [activeTab, setActiveTab] = useState('holidays'); // State to track active tab

      // Function to toggle active tab
      const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
      };


      const [scrollX, setScrollX] = useState(0);

      const handleScroll = (direction: string) => {
        const container = document.getElementById('cardContainer');
        const containerWidth = container?.offsetWidth; // Add null check here
        const scrollAmount = 200; // Adjust this value according to your needs

        if (container && containerWidth) { // Check if container and containerWidth are not null
          if (direction === 'left') {
            container.scrollTo({
              left: scrollX - scrollAmount,
              behavior: 'smooth'
            });
            setScrollX(scrollX - scrollAmount);
          } else if (direction === 'right') {
            container.scrollTo({
              left: scrollX + scrollAmount,
              behavior: 'smooth'
            });
            setScrollX(scrollX + scrollAmount);
          }
        }
      };


      // const [showCalendar, setShowCalendar] = useState(false); // State to control visibility of calendar
      // const calendarRef = useRef<HTMLDivElement>(null); // Define the type of calendarRef
  
      // const handleCalendarClick = () => {
      //     setShowCalendar(!showCalendar); // Toggling calendar visibility
      // };
  
      // useEffect(() => {
      //     const handleClickOutside = (event: MouseEvent) => {
      //         if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
      //             setShowCalendar(false);
      //         }
      //     };
  
      //     document.addEventListener('mousedown', handleClickOutside);
  
      //     return () => {
      //         document.removeEventListener('mousedown', handleClickOutside);
      //     };
      // }, []);

      const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };


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
              <div className="bottom-0 w-full bg-white h-24 border-b flex flex-row items-center justify-between">
                            <div className='flex flex-row items-center'>
                                <img
                                    className="object-cover w-9 h-9 rounded-full overflow-hidden ml-10 mr-3"
                                    src={employeeData[0].photo}
                                    alt="/src/assets/user.png"
                                />
                                <div className='text-lg font-semibold text-gray-600'>{employeeData[0].employeeId}  {employeeData[0].name}</div>
                            </div>
                            <div className='text-lg font-semibold text-gray-600 flex flex-row items-center'>
                                <FcPrevious className='font-bold h-5 w-5 mr-2' />
                                {formattedStartDate} - {formattedEndDate}
                                <FcNext className='font-bold h-5 w-5 ml-2' />
                            </div>
                            <div className="flex relative flex-row">
                                <button className="flex items-center  text-white font-semibold  px-4 rounded text-base bg-blue-500 mr-3">
                                    Apply Leave
                                </button>
                                <button className="flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full p-1 mr-5" 
                                onClick={toggleDropdown}>
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="2" />
                                        <circle cx="6" cy="12" r="2" />
                                        <circle cx="18" cy="12" r="2" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                  <>
                                    <div className="relative">
                                      <div className="absolute right-0 top-0 mt-7 mr-8 z-10">
                                        <div className="w-5 h-5">
                                          <img src="/src/assets/triangle.png" alt='pic'/>
                                        </div>
                                      </div>
                                    </div>

                                    <div //ref={calendarRef} 
                                    className="absolute right-0 top-0 mt-11 mr-7 z-10 text-base
                                     bg-gray-100 border border-gray-200 hover:bg-blue-50 hover:text-sky-800
                                     shadow-lg py-2 px-4" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                                      {/* Calendar component goes here */}
                                     <Link to='/leave-management/calendar'>Calendar View</Link>
                                    </div>
                                  </>
                                )}
                            </div>
                        </div>
                <Content style={{ padding: '0 24px', overflowY: 'auto' }}>
                  {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb> */}

                  <div className="relative">
                          <button 
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md
                            hover:bg-blue-200"
                            onClick={() => handleScroll('left')}
                          >
                            <FcPrevious className='h-4 w-4 hover:text-white'/>
                          </button>
                      <div id="cardContainer" className="flex space-x-4 py-4 overflow-hidden ml-10 mr-10">
                          <div className="flex-shrink-0 w-48 bg-white border rounded-md shadow-md p-4 flex flex-col items-center">
                              <span className="font-bold text-base mb-2">Casual Leave</span>
                              <img className="w-16 h-16 my-10" src="/src/assets/Leave1.png" alt="Leave Icon" />
                              <div className="text-center">
                              <p className="mb-3 text-base">Available : 3 </p>
                              <p className="mb-2 text-base">Booked   : 0 </p>
                              </div>
                          </div>
                          <div className="flex-shrink-0 w-48 bg-white border rounded-md shadow-md p-4 flex flex-col items-center">
                              <span className="font-bold text-base mb-2">Earned Leave</span>
                              <img className="w-16 h-16 my-10" src="/src/assets/Leave2.png" alt="Leave Icon" />
                              <div className="text-center">
                              <p className="mb-3 text-base">Available : 3 </p>
                              <p className="mb-2 text-base">Booked   : 0 </p>
                              </div>
                          </div>
                          <div className="flex-shrink-0 w-48 bg-white border rounded-md shadow-md p-4 flex flex-col items-center">
                              <span className="font-bold text-base mb-2">Leave Without Pay</span>
                              <img className="w-16 h-16 my-10" src="/src/assets/Leave3.png" alt="Leave Icon" />
                              <div className="text-center">
                              <p className="mb-2 text-base">Booked   : 0 </p>
                              </div>
                          </div>
                          <div className="flex-shrink-0 w-48 bg-white border rounded-md shadow-md p-4 flex flex-col items-center">
                              <span className="font-bold text-base mb-2">Marriage Leave</span>
                              <img className="w-16 h-16 my-10" src="/src/assets/Leave4.png" alt="Leave Icon" />
                              <div className="text-center">
                              <p className="mb-3 text-base">Available : 0 </p>
                              <p className="mb-2 text-base">Booked   : 0 </p>
                              </div>
                          </div>
                          <div className="flex-shrink-0 w-48 bg-white border rounded-md shadow-md p-4 flex flex-col items-center">
                              <span className="font-bold text-base mb-2">Optional Holiday</span>
                              <img className="w-16 h-16 my-10" src="/src/assets/Leave5.png" alt="Leave Icon" />
                              <div className="text-center">
                              <p className="mb-3 text-base">Available : 2 </p>
                              <p className="mb-2 text-base">Booked   : 0 </p>
                              </div>
                          </div>
                          <div className="flex-shrink-0 w-48 bg-white border rounded-md shadow-md p-4 flex flex-col items-center">
                              <span className="font-bold text-base mb-2">Sick Leave</span>
                              <img className="w-16 h-16 my-10" src="/src/assets/Leave6.png" alt="Leave Icon" />
                              <div className="text-center">
                              <p className="mb-3 text-base">Available : 3 </p>
                              <p className="mb-2 text-base">Booked   : 0 </p>
                            </div>
                        </div>
                            <button 
                              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md
                              hover:bg-blue-200"
                              onClick={() => handleScroll('right')}
                            >
                              <FcNext className='h-4 w-4'/>  
                            </button>
                        </div>  
                    </div>
  
                  
                  <div style={{ padding: 24, background: '#fff',margin: 20}} className='border rounded-md shadow-md'>
                  <div className=" mb-8 ">
                    <table className="border-collapse w-full ">
                      <tbody>
                        <tr >
                          <td className="pb-4 w-1/4 border-b border-gray-300 text-xl font-bold
                          ">All Leave and Holidays</td>
                          <td className="pb-4 border-b border-gray-300 text-base flex justify-end">
                          <div className="bg-gray-100 rounded-md shadow-md flex justify-between items-center">
                            <button
                              className={`pr-2 px-4 py-2 text-gray-500 hover:text-sky-600 ${activeTab === 'holidays' && 'font-semibold text-sky-600'}`}
                              onClick={() => handleTabClick('holidays')}
                            >
                              Holidays
                            </button>
                            <div className="border-r border-gray-300 h-full"></div>
                            <button
                              className={`pl-2 px-4 py-2 text-gray-500 hover:text-sky-600 ${activeTab === 'leave' && 'font-semibold text-sky-600'}`}
                              onClick={() => handleTabClick('leave')}
                            >
                              Leave
                            </button>
                          </div>
                          </td>
                        </tr>
                        {/* Render different data based on active tab */}
                        {activeTab === 'holidays' && (
                          <>
                            {showHolidays.map((holiday:DataType) => (
                              !holiday.restricted && (
                                <tr key={holiday.key}>
                                  <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500 justify-center">
                                    <BiCalendar className="inline-block mr-2 text-blue-400 h-6 w-6 " />
                                    {new Date(holiday.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                                  </td>
                                  <td className="py-4 border-b border-gray-300 text-base font-medium">{holiday.holidayName}</td>
                                </tr>
                              )
                            ))}
                          </>
                        )}
                        {activeTab === 'leave' && (
                        <>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 1</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 1</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                          <tr>
                            <td className="py-4 w-1/4 border-b border-gray-300 text-base font-medium text-gray-500">Leave Data 2</td>
                            <td className="py-4 border-b border-gray-300 text-base font-medium">Leave Data Value 2</td>
                          </tr>
                        </>
                      )}
                      </tbody>
                    </table>
                  </div>
                  </div>
                </Content>
              </Layout>
            </SideBar>
          </Layout>
        </Layout>
      )
}

export default LeaveRequestList;