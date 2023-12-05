'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Login = () => {
  const [ user , setUser] = useState({ 
    email:'', 
    password:'', 
  }) 

  // const [desableButon , setDisableButton] = useState(false)
  
  const [loading , setLoading] = useState(false)
  const router = useRouter()

  const onLogin = async()=>{
    try {
      setLoading(true)
      const response = await axios.post('api/user/login',{
        email : user.email,
        password : user.password
      })

      console.log('Response',response.data)

      toast.success("signup successful");
      router.push('/signup')
    } catch (error: any) {
      console.log('Signin',  error.message)
      toast.error(error.message);
    } finally {
      setLoading(false)
    }
  }

  // useEffect(()=>{
  //   if(user.email.length >0 || user.password.length>0 || user.confirmPassword.length>0 || user.username.length>0){
  //     setDisableButton(false)
  //   }else{
  //     setDisableButton(true)
  //   }
  // },[user])

  return (
    <div className='m-auto w-1/4 border border-gray-300 p-10 rounded-lg'>
      <h1>{loading ? 'Processing...' : 'Login'}</h1>
      <Label>Email</Label>
      <br />
      <Input type='email' placeholder='Please Enter Email address' value={user.email}  onChange={(e)=>setUser({...user, email: e.target.value})}/>
      <br />
      <Label>Password</Label>
      <br />
      <Input type='password' placeholder='Please Enter Password' value={user.password}  onChange={(e)=>setUser({...user, password: e.target.value})}/>
      <br />
      <Button 
      onClick={onLogin}
      >Submit</Button>
      <br />
      <Link href='/signup'>Visit Signup Page</Link>
    </div>                                                                                                                                                                      
  )
}
                                                            
export default Login