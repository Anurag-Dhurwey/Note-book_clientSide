import React ,{useState}from 'react'
import {useNavigate} from 'react-router-dom';

const Sinup = () => {
  const host = "http://localhost:4000";
  const [credentials,set_credentials]=useState({name:"",email:"",password:"",confirmpassword:""})
  let navigate=useNavigate()
  const on_submit=async(e)=>{
      e.preventDefault();
      try {
          const response = await fetch(`${host}/api/register`, {
            method: "POST",
            headers: {
              "Content-Type": " application/json",
              },
              body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,confirmpassword:credentials.confirmpassword})
          });
          const json = await response.json();
          console.log(json)
          if(json.success){
              localStorage.setItem('auth-token',json.authToken)
              navigate('/')
          }else{
              console.log('wrong details')
          }
        } catch (error) {
          console.log(error.message);
        }
  }
  const onchange=(e)=>{
   
    set_credentials({...credentials,[e.target.name]:e.target.value})
}
  return (
   <>
      <div className='container'>
        <form onSubmit={on_submit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input required minLength={3} autoComplete='on' type="text" name='name' className="form-control" id="name" onChange={onchange}  value={credentials.name}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input required autoComplete='on' type="email" name='email' className="form-control" id="email" onChange={onchange}  value={credentials.email}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input required minLength={5} autoComplete='on' type="password" name='password' className="form-control" id="password" onChange={onchange} value={credentials.password}/>
  </div>
  <div className="mb-3">
    <label htmlFor="confirmpassword" className="form-label">confirm Password</label>
    <input required minLength={5} autoComplete='on' type="password" name='confirmpassword' className="form-control" id="confirmpassword" onChange={onchange} value={credentials.confirmpassword}/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
   </>

  )
}

export default Sinup
