import React, { useEffect } from 'react'
import PostAs from './PostAs/PostAs'
import CommunityMainSection from './CommunityMainSection'
import AddPostPopup from './Post/AddPostPopup'
import { RecoilRoot } from 'recoil'

function Community() {
  return (
    <div className='flex md:p-10 relative'>
      <RecoilRoot>
      <PostAs/>
      <CommunityMainSection/>
      <AddPostPopup/>
      </RecoilRoot>
    </div>
  )
}

export default Community