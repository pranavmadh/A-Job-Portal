import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ChangeUser from './ChangeUser';
import { useState } from 'react';


const PostAs = () => {
    const [userChange,setUserChange] = useState(false)

    const toggleUser = () => {
        setUserChange(!userChange)
    }
    return(
        <div className='hidden md:inline-flex justify-center border-2 flex-col px-5 py-5 font-poppins mt-[2%] ml-[5%] rounded-xl'> 
            <div className="flex items-center relative hover:bg-slate-100 px-5 py-5 rounded-2xl cursor-pointer" onClick={toggleUser}>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile-pic"  className="size-10 border-2 rounded-full border-blue-600"/>
                <div className="mx-3 ">
                    <span className='font-light text-sm'>Post as</span>
                    <h1 className='font-medium'>Pranav Adukkadukkam</h1>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                {userChange ? <ChangeUser/> : null}
            </div>
            <div className="mt-10">
                <button className='w-[100%] text-white bg-green-500 px-3 py-3 rounded-full'>Create Post</button>
            </div>
        </div>
    )
}

export default PostAs