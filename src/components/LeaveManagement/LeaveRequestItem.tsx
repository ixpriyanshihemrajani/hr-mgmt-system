import React, { useState } from 'react';
import { format, addMonths, subMonths, getDay, isSameDay } from 'date-fns';
import { Breadcrumb, Layout } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SideBar from '../Layout/SideBar';
import HeaderNav from '../Layout/HeaderNav';
import { FcNext, FcPrevious } from 'react-icons/fc';

const { Content } = Layout;


type Props = {}


const LeaveRequestItem = (props: Props) => {

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



      const holidays =JSON.parse(localStorage.getItem("holidays")||"[]");
      console.log('Yearly Holidays: ',holidays);



      const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const monthDays: (Date | null)[] = [];
  const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  let startDayOfWeek = startDate.getDay(); // Get the day of the week for the start date
  startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1; // Adjust startDayOfWeek for Monday as the first day
  
  const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // Push empty cells for the days before the start of the month
  for (let i = 0; i < startDayOfWeek; i++) {
    monthDays.push(null);
  }

  // Push the dates of the current month
  for (let i = 1; i <= endDate.getDate(); i++) {
    monthDays.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  const weeks: (Date | null)[][] = [];
  let week: (Date | null)[] = [];
  monthDays.forEach((day, index) => {
    if (day === null) {
      // If it's an empty cell, push null
      week.push(null);
    } else {
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
      week.push(day);
    }

    // If it's the last day of the month, push the remaining days of the week
    if (index === monthDays.length - 1 && week.length > 0) {
      weeks.push(week);
    }
  });
    
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

        <div className="bottom-0 w-full bg-gray-100 h-16 border-b flex flex-row items-center justify-between">
            <div className='flex flex-row items-center'>
                <img
                  className="object-cover w-9 h-9 rounded-full overflow-hidden ml-10 mr-3"
                  src={employeeData[0].photo}
                  alt="/src/assets/user.png"
                />
             <div className='text-lg font-medium text-gray-600'>{employeeData[0].employeeId}  {employeeData[0].name}</div>
             </div>
             <div className="flex items-center mr-16">
                <button className="text-blue-200" onClick={prevMonth}>
                <FcPrevious className=' font-bold h-5 w-5 mr-2' />
                </button>
                <h2 className="text-lg  text-sky-600">
                  {format(currentDate, 'MMMM yyyy')}
                </h2>
                <button className="text-blue-200" onClick={nextMonth}>
                <FcNext className='font-bold h-5 w-5 ml-2' />
                </button>
              </div>
                                        
        </div>
          <Content style={{ overflowY: 'auto' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="container bg-white h-full">
            <table className="calendar-table bg-white w-full h-full ">
              <thead>
                <tr>
                  {daysOfWeek.map(day => (
                    <th key={day} className="text-base font-normal text-center border p-2">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeks.map((week, weekIndex) => (
                  <tr key={weekIndex}>
                    {week.map((day, dayIndex) => (
                      <td
                      key={dayIndex}
                      className={`h-44 w-11 text-left align-top text-gray-500 text-2xl font-normal p-2 border ${
                        day instanceof Date ? (
                          isSameDay(day, new Date()) ? 'h-44 w-11 text-white bg-gray-100 ' : // If it's the same day
                          getDay(day) === 0 || getDay(day) === 6 ? 'h-44 w-11 bg-yellow-50' : '' // If it's a weekend day
                        ) : '' // If it's not a Date object
                      }`}
                    >
                      {day instanceof Date ? (
                        <div className={isSameDay(day, new Date()) ? "bg-emerald-200 rounded-full text-center text-xl font-medium w-10 h-10 p-1" : ""}> {/* Green rounded background */}
                          {/* Check if there is a holiday for this day */}
                          {holidays.find((holiday: { date: string | number | Date; }) => isSameDay(new Date(holiday.date), day)) ? (
                            // If there is a holiday, display its name along with the date
                            <div>
                              <div>{day.getDate()}</div>
                              <div className='text-sm '> 
                                {holidays.find((holiday: { date: string | number | Date; }) => isSameDay(new Date(holiday.date), day)).holidayName}</div>
                            </div>
                          ) : (
                            // If no holiday, display only the date
                            day.getDate()
                          )}
                        </div>
                      ) : ''}
                    </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </Content>
        </Layout>
      </SideBar>
    </Layout>
  </Layout>
)
}

export default LeaveRequestItem