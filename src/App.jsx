import React, {useContext, useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null); 
  const authdata = useContext(AuthContext)

  useEffect(() => {
    if(authdata){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authdata])
  

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authdata && authdata.employees.find((e)=> email === e.email && e.password === password)) {
      setUser('employee');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
     {!user ? <Login handleLogin={handleLogin} /> : ""}
     {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
