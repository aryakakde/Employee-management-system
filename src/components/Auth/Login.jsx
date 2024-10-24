import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form 
                    onSubmit={(e) => {
                        submithandler(e);
                    }}
                    className='flex flex-col item-center justify-center'>
                    <input 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' 
                        type="email" 
                        placeholder='Enter your email'
                    />
                    <input 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-3 placeholder:text-gray-400' 
                        type="password" 
                        placeholder='Enter the Password' 
                    />
                    <button 
                        className='text-white outline-none bg-emerald-600 rounded-full text-xl py-2 px-8 mt-5 placeholder:text-white'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
