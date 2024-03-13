import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import store from './redux/Store';
import Login from './components/Auth/Login';
import AuthTrueLogin from './components/Auth/AuthTrueLogin';
import FilterPanel from './components/EmployeeSearch/FilterPanel';
import EmployeeList from './components/EmployeeDirectory/EmployeeList';
import Services from './components/Home/Services';
import { AuthState } from './redux/Actions/loginTypes';
import EmployeeProfile from './components/EmployeeProfiles/EmployeeProfile';



const App: React.FC = () => {
  // const isAuthenticated = true ; // Change to true if the user is authenticated
  const isAuthenticated = useSelector((state:{auth: AuthState}) =>state.auth.isAuthenticated);
  console.log(isAuthenticated)

  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* {isAuthenticated && (
          <>
            <HeaderNav /> 
             <SideBar />
          </>
        )} */}
        
          
          {isAuthenticated ? (
            
            <Routes>
            <Route path="/login" element={<AuthTrueLogin />} />
            <Route path="/services" element={<Services />} />
            <Route path="/employee-directory" element={<EmployeeList />} />
            <Route path="/employee-profile" element={<EmployeeProfile />} />
            <Route path="/filterPanel" element={<FilterPanel />} />
            <Route path="*" element={<body className="bg-gray-100 flex items-center justify-center h-screen">
              <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
                  <div className="text-center">
                      <h1 className="text-2xl font-bold text-gray-800 mb-4">Bad Request </h1>
                      <p className="text-gray-600">Error :( 404 Error Not Found</p>
                  </div>
              </div>
          </body>} />
            </Routes>
        ):(
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<body className="bg-gray-100 flex items-center justify-center h-screen">
              <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
                  <div className="text-center">
                      <h1 className="text-2xl font-bold text-gray-800 mb-4">Authentication Required</h1>
                      <p className="text-gray-600">You have to authenticate first on the login page</p>
                  </div>
              </div>
          </body>} /> 
          </Routes>
          )}
      </main>
      
    </div>
    </BrowserRouter>
  );
};

export default App;
