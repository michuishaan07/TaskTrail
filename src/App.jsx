import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashbpard/EmpDashboard';
import AdminDashboard from './components/Dashbpard/AdminDashboard';
import Header from './components/others/Header';
import { getlocalStorage, setlocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

export default function App() {




const authData=useContext(AuthContext);
const [user, setUser] = useState(null);
const[loggedInUserData,setLoggedInUserData]=useState(null);


useEffect(() => {
  if (authData) {
    const stored = localStorage.getItem("loggedInUser");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.role);

      if (parsed.role === 'employee') {
        const emp = authData.employees.find((e) => e.email === parsed.email);
        setLoggedInUserData(emp);
      }
    }
  }
}, [authData]);

      












  const handleLogin = (email, password) => {
 
    console.log("Auth Data: ", authData); 
  
    if (email === 'admin@example.com' && password === '123') {
      setUser({role:'admin'}); 
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    
   
    }
  
    else if (authData) {

      const employee=
      authData.employees.find((e) => e.email === email && e.password === password)

      if (employee) {
        setUser({ role: 'employee' });
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          email: employee.email,
        }));
      }
      
      
     

    }
  else {
    alert("Invalid Cred");
  }
  };


  console.log("user:", user);
console.log("loggedInUserData:", loggedInUserData);

  



  return (
    <div >
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user === 'admin' ? <AdminDashboard  changeUser={setUser}/> :
    user === 'employee' ? <EmpDashboard changeUser={setUser} data={loggedInUserData} /> :
     null
}


{/* <EmpDashboard/> */}
{/* <Header/>
<AdminDashboard/> */}
    </div>
  )
}
