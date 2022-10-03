import React from 'react'

const Login = () => {

    const handleSubmit =async(e)=>{
      e.preventDefault(); 
      fetch()
      const response = await fetch(`http://localhost:4000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json()
      console.log(json);
   
    }
  return (
    <div className="container" >
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label  htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password"/>
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
