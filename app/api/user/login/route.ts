import { Connect } from '@/dbConfig/dbConfig'
import  User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

import jwt from 'jsonwebtoken'

Connect()

export async function POST(request : NextRequest){
try {
    const reqBody = await request.json()
    const {email,password}=reqBody

    console.log('reqBody',reqBody)

    const user = User.findOne({email})

    if(!user) {
        return NextResponse.json({'Error':`user with email ${user} is does not exist` },{status:500})
    }

    // validate password
    const validatePassword = await bcryptjs.compare(password,user?.password)

    if(!validatePassword) {
        return NextResponse.json({'Error':`user with email ${user} is does not exist` },{status:400})
    }

    // Token data
    const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email
    }

    // Create Token
    const token = await jwt.sign(
        tokenData,
        process.env.JWT_SECRET_CODE!, 
        { expires: '1h'}
        )

    const response = NextResponse.json({message:'User signin successfully',
    success: true},{status:201})
    response.cookies.set('token', token),{
        httpOnly: true,
    }

    return response;
} catch (error : any) {
    return NextResponse.json({error : error.message},{status:500})       
}
}