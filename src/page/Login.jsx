import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className='mt-40 flex justify-center'>
        <div className='w-[400px] border rounded-md px-10 py-10'>
          <div className='flex justify-center mb-5'><img src={logo} alt="" /></div>
          <div className="col-auto w-full">
            <label htmlFor="role" className="font-db text-dark-gray block pb-2 text-[11px] font-bold">
              Username or email
            </label>
            <div className="relative flex w-full flex-col">
              <input
                type='text'
                className="focus:management focus:border-management block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 sm:text-sm"
                placeholder='username or email'
                
              />
            </div>
          </div>
          <div className="mt-4 col-auto w-full">
            <label htmlFor="role" className="font-db text-dark-gray block pb-2 text-[11px] font-bold">
              Password
            </label>
            <div className="relative flex w-full flex-col">
              <input
                type='password'
                className="focus:management focus:border-management block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 sm:text-sm"
                placeholder='password'
                
              />
            </div>
          </div>
          <div className='mt-4'>
            <button
              className="my-1 w-full rounded-md border bg-[#cfe5f3] py-1 text-black shadow-sm duration-100 ease-in-out®®"
              type={'button'}>
              Login with User AD SCG
            </button>
            <Link to={'/home'}>
              <button
                className="my-1 w-full rounded-md border bg-[#0873bb] py-1 text-white shadow-sm duration-100 ease-in-out"
                type={'button'}>
                Login
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login