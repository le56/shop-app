import { useContext, useState } from 'react';
import Head from "next/head"
import Link from 'next/link'
const SignIn = () => {
  const initialState = { email: '', password: '' };
  const [data, setdata] = useState(initialState);
  const { email, password } = data;

  const handelChangeInput = e => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
  }
  const handelSubmit = async e => {
    e.preventDefault();
 
  }
  return (
    <div style={{marginLeft:'5px', marginRight:'5px', marginTop:'50px', fontSize:'18px'}}>
      <Head>
        <title>Sign In</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }} onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name="email" value={email} onChange={handelChangeInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" value={password} onChange={handelChangeInput} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-dark w-100">Login</button>
        <p className="my-2">You dont't have account?<Link href="/register"><a style={{ color: 'crimson' }}> Register Now</a></Link></p>
      </form>
    </div>
  )
}
export default SignIn