import Head from "next/head"
import Link from 'next/link'
import { useState, useContext } from 'react'
import Valid from "../Utils/valid";
import { Datacontect } from '../Store/GlobalStore'
import { PostData } from "../Utils/FetchData";
const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' };
  const [data, setdata] = useState(initialState);
  const { name, email, password, cf_password } = data;
  const {state, dispatch}= useContext(Datacontect);
  const handelChangeInput =  e => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
  }
  const handelSubmit = async e => {
    e.preventDefault();
    const errMsg = Valid(name, email, password, cf_password)
    if(errMsg) return dispatch({type:'NOTIFY', payload:{error:errMsg}})
    dispatch({type:'NOTIFY', payload:{loading:true}})
    const res  = await PostData('auth/register', data)
    if(res.err) return dispatch({type:'NOTIFY', payload:{error:res.err}})
    return  dispatch({type:'NOTIFY', payload:{success:res.msg}})
  }
  return (
    <div  style={{marginLeft:'5px', marginRight:'5px', marginTop:'50px', fontSize:'18px'}}>
      <Head>
        <title>Register Page</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }} onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input name="name" value={name} onChange={handelChangeInput} type="text" className="form-control" id="name" placeholder="Name Account" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name="email" value={email} onChange={handelChangeInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" value={password} onChange={handelChangeInput} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input name="cf_password" value={cf_password} onChange={handelChangeInput} type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-dark w-100">Register</button>
        <p className="my-2">Already have an account?<Link href="/signin"><a style={{ color: 'crimson' }}> Login Now</a></Link></p>
      </form>
    </div>
  )
}
export default Register