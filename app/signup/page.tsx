'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Signup = () => {
  const [ user , setUser] = useState({
    email:'',
    username:'',
    password:'',
    confirmPassword:'',
  })

  const [desableButon , setDisableButton] = useState(false)
  const [loading , setLoading] = useState(false)
  const router = useRouter()

  const onSignup = async()=>{
    try {
      setLoading(true)
      const response = await axios.post('api/user/signup',{
        email : user.email,
        username : user.username,
        password : user.password
      })
      console.log('Response',response.data)
      toast.success("signup successful");
      router.push('/login')
    } catch (error: any) {
      console.log('Signup Failed',  error.message)
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
    <div className='m-auto w-2/4'>
      <h1>{loading ? 'Processing...' : 'Signup'}</h1>
      <Label>Email</Label>
      <br />
      <Input type='email' placeholder='Please Enter Email address' value={user.email}  onChange={(e)=>setUser({...user, email: e.target.value})}/>
      <br />
      <Label>User Name</Label>
      <br />
      <Input type='text' placeholder='Please Enter Username' value={user.username}  onChange={(e)=>setUser({...user, username: e.target.value})}/>
      <br />
      <Label>Password</Label>
      <br />
      <Input type='password' placeholder='Please Enter Password' value={user.password}  onChange={(e)=>setUser({...user, password: e.target.value})}/>
      <br />
      <Label>Confirm Password</Label>
      <br />
      <Input type='text' placeholder='Please Enter Password' value={user.confirmPassword} onChange={(e)=>setUser({...user, confirmPassword: e.target.value})}/>
      <br />
      <Button 
      onClick={onSignup}
      >Submit</Button>
      <Link href='/login'>Visit Login Page</Link>
    </div>                                                                                                                                                                      
  )
}
                                                            
export default Signup