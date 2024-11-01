import React, { useEffect, useState } from 'react'
import Job from './JobSideComponent/Job'
import axios from 'axios'
import Search from './Search/Search';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { jobnumberatom } from '../../store/atoms/jobnumber';
import { selectedJobAtom } from '../../store/atoms/selectedPost';
import JobExpand from './JobExpand/JobExpand';

function Jobs() {
  const [post,setPost] = useState([])
  const jobId =useRecoilState(jobnumberatom)
  const setJobId = useSetRecoilState(jobnumberatom)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jobicy.com/api/v2/remote-jobs');
        setPost(response.data.jobs)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className='w-full justify-center min-h-screen md:p-10 '>
      <div className='relative w-full bg-white h-40 flex justify-center items-center '>
        <Search/>
      </div>
      <div className='flex md:flex-row flex-col'>
      <div className='flex-1 w-full md:w-1/2 bg-white p-4 pt-0'>
      {
        post.length == 0 ? <h1>Loading...</h1>: null
      }
      {
        post.map(item => <Job data={item} key={item.id}/>)
      }
      </div>
      <div className='flex-1 bg-white w-full md:w-1/2 sticky top-20 right-0 h-[90vh] overflow-scroll'>
      {jobId[0] == 0 ? <>Loading...</> : <JobExpand post={post}/>}
      </div>
      </div>
    </div>
  )
}

export default Jobs