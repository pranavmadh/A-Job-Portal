import React from 'react'
import UserReview from './userReview'
import userReviews from './userReviews'

function Landing() {
  return (
    <div className='flex flex-col p-6 h-[90v] relative'>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-200 opacity-20 blur-[100px]"></div></div>
      <div className='h-[60vh] relative rounded-2xl ] flex items-center justify-center'>
        <div className='absolute text-center'>
          <div>
            <h1 className='md:text-8xl text-5xl font-semibold text-remotego text-balance'>Your Gateway to Work Anywhere</h1>
            <h3 className='text-2xl font-semibol text-remotego mt-10'>We connect top remote talent with leading remote companies.</h3>
          </div>
          <div className='flex gap-4 justify-center mt-6'>
            <button className='w-48 h-10 bg-remotego text-white text-lg rounded-3xl font-semibold'>Find Jobs</button>
            <button className='w-48 h-10 bg-white text-remotego text-lg rounded-3xl font-semibold border-2 border-remotego'>Post a Job</button>
          </div>
        </div>
      </div>
      <div className='flex gap-2 flex-wrap justify-center opacity-45'>
        {userReviews.map((rev) => {
          return <UserReview name={rev.name} profilePic={rev.profilePic} review={rev.review}/>
        })}
      </div>
    </div>
  )
}

export default Landing