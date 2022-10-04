import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
  const [credentials, setCredentials] = useState({email:"",password:""})
  let navigate =useNavigate();

    const handleSubmit =async(e)=>{
      e.preventDefault(); 
     
      const response = await fetch(`http://localhost:4000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password})
  
      });
      const json = await response.json()
      console.log(json);
      if(json.success){
        //save auth token and redirect
        localStorage.setItem('token',json.authtoken);
        navigate("/");
        props.showAlert('Successfully Login','success')

      }
      else{
        props.showAlert('Invalid Credentials','danger')
      }
   
    }
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value })
  }

  return (
    <div className="container" >
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={credentials.email}  onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label  htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"  >Submit</button>
</form>
    </div>
  )
}

export default Login
