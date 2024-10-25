import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const UserAuthPage = () => {

  const navigate = useNavigate();

  return (
    <div className='flex h-[85vh] justify-center items-center p-4'>
      <div className='flex flex-col md:flex-row w-full items-center justify-center text-center flex-wrap'>
        <div className='space-y-5 w-full md:w-auto'>
          <div className='space-y-2'>
            <h1 className='text-3xl md:text-4xl font-bold text-remotego'>Remote<span className='text-black font-medium'>Go</span></h1>
            <h1 className='text-2xl md:text-3xl font-semibold'>How would you like to use RemoteGo?</h1>
            <h2 className='text-lg md:text-xl'>Already have an account? <NavLink to={'/auth/login'} className={'text-remotego font-semibold'}>Login</NavLink></h2>
          </div>
          <div className='space-y-5 md:space-y-0 md:space-x-5 flex flex-col md:flex-row justify-center'>
            <div className='h-40 bg-slate-100 rounded-xl flex justify-center items-center text-left w-full md:w-2/4 p-4 hover:bg-slate-200 text-nowrap' onClick={() => {
              navigate('/auth/signup')
            }}>
              <div>
                <h1 className='text-lg md:text-xl'>I am Looking for a job</h1>
                <div className='flex justify-center items-center gap-2'>
                  <FontAwesomeIcon icon={faCheckCircle} className='text-remotego'></FontAwesomeIcon>
                  <span className='text-sm md:text-base'>Find remote jobs at top companies</span>
                </div>
              </div>
            </div>
            <div className='h-40 bg-slate-100 rounded-xl flex justify-center items-center text-left w-full md:w-2/4 p-4 hover:bg-slate-200 text-nowrap'>
              <div>
                <h1 className='text-lg md:text-xl'>I want to hire talents</h1>
                <div className='flex justify-center items-center gap-2'>
                  <FontAwesomeIcon icon={faCheckCircle} className='text-remotego'></FontAwesomeIcon>
                  <span className='text-sm md:text-base'>Post your open jobs on RemoteGo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAuthPage
