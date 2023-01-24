import React ,{useState}from 'react'
import {useNavigate} from 'react-router-dom';
const Login = () => {
    const host = "http://localhost:4000";
    const [credentials,set_credentials]=useState({email:"",password:""})
    let navigate=useNavigate()
    const on_submit=async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`${host}/api/login`, {
              method: "POST",
              headers: {
                "Content-Type": " application/json",
                },
                body:JSON.stringify({email:credentials.email,password:credentials.password})
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
            console.log(error);
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
  <label htmlFor="email" className="form-label">Email</label>
  <input required autoComplete='on' type="email" name='email' className="form-control"  value={credentials.email} onChange={onchange} id="email" />
</div>
<div className="mb-3">
  <label htmlFor="password" className="form-label">Password</label>
  <input required minLength={5} autoComplete='on' type="password" name='password' className="form-control" value={credentials.password} onChange={onchange}  id="password"/>
</div>
<button type="submit" className="btn btn-primary">Login</button>
</form>
  </div>
 </>
  )
}

export default Login
