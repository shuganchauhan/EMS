import React, { useState } from 'react'

const Signup = ({ handleSignup, switchToLogin }) => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleSignup(firstName, email, password)
        setFirstName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <h2 className='text-center text-white text-2xl font-semibold mb-6'>Create Account</h2>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-sm py-2 px-6 rounded-full placeholder:text-gray-400'
                        type="text"
                        placeholder='Full Name'
                    />
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-sm py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
                        type="email"
                        placeholder='Email address'
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
                        type="password"
                        placeholder='Password'
                    />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
                        Sign Up
                    </button>
                </form>
                <p className='text-center text-gray-400 text-sm mt-5'>
                    Already have an account?{' '}
                    <span
                        onClick={switchToLogin}
                        className='text-emerald-400 cursor-pointer hover:underline'
                    >
                        Log in
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Signup
