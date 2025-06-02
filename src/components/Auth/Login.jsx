import React, { useState } from 'react'

const Login = ({handleLogin}) => {



    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        console.log("Form Submitted");


        setEmail(" ");
        setPassword("");
    }

    const clicked=()=>{
      window.location.reload();
    }





  return (
    <div className="flex justify-center items-center h-screen w-screen" >
 <div className=' border-2  border-solid border-emerald-500  justify-center items-center text p-20 rounded-2xl'>
 <div> <h1 className='flex text-white text-2xl font-bold  mb-10 justify-center items-center'>LOGIN</h1>
 </div>

    <form  
    
    onSubmit={(e)=>{
        submitHandler(e);

    }}
    className='flex flex-col items-center justify-center'>

        <input 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)
        }}
    
        
        required className= 'bg-transparent  text-white outline-none border-emerald-500 border -2 rounded-2xl px-6 py-3 placeholder:text-white' type="email"  placeholder='Email'>
         </input> 



         <br></br>
        
         <input 

value={password}
        onChange={(e)=>{setPassword(e.target.value)
        }}
    
         
         
         
          required className= 'bg-transparent  text-white outline-none border-emerald-500 border -2 rounded-2xl px-6 py-3 placeholder:text-white' type="password"  placeholder='Password'>

         </input> 
         <br></br>
      
         <button onClick={clicked} className="bg-amber-50 px-10 py-1 rounded-xl" type="submit">Login</button>    
          </form>
 </div>
</div>

  )
}

export default Login
