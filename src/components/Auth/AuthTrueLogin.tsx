import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {}

const Login = (props: Props) => {


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
        <div className="relative flex flex-row justify-space-between min-h-screen overflow-hidden">
                    <div className="w-1/3 flex justify-start items-center h-screen"
                    style={{backgroundImage: `url('src/assets/BackgroundImage.jpg')`}}>
                    <div className="text-center">
                      {/* Round profile photo with background image */}
                      <div className="w-32 h-32 rounded-full bg-cover bg-center mx-auto" style={{backgroundImage: `url('src/assets/ProfileImage.jpg')`}}></div>
                      {/* Quote */}
                      <p className="mt-4 p-5 text-white  text-center font-semibold text-2xl ">
                        "Our employees all work from home, and they are able to check-in/check
                        out instead of a time-card. We can just pull reports and payday is
                        much easier."
                      </p>
                      {/* Small font text */}
                      <p className="mt-2 font-semibold text-blue-200 text-sm">WENDY BALDWIN OF ER4 LOVE.</p>
                    </div>
                  </div> 
                  <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl border-b-2 border-black">
                    <h1 className="text-3xl font-semibold text-center text-blue-950">
                        Welcome {employeeData[0].name}!
                    </h1>
                    <form className="mt-6">
                        <div className="mt-6 text-center">
                            <button className="inline-block px-8 py-4 tracking-wide text-white text-center transition-colors duration-200 transform bg-blue-950 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                                <Link to="/services">Access Application</Link>
                            </button>
                        </div>
                    </form>
                    <div className="relative flex items-center justify-center w-full mt-6 border border-t"></div>
                </div>

            </div>
        
    );
}


export default Login
