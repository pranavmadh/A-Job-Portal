import React from 'react';
import { useSetRecoilState } from 'recoil';
import { anonymousAtom } from '../../../store/atoms/anonymous';

function ChangeUser() {
    const userStyle = 'flex items-center mt-3 mb-3 gap-2 ml-6 hover:bg-slate-100 p-2 rounded-xl';
    const setAnonymous = useSetRecoilState(anonymousAtom);

    const toggleUser = (isAnonymous) => {
        setAnonymous(isAnonymous);
    };

    return (
        <div className='absolute top-20 left-0 border-2 w-[150%] px-5 py-5 bg-white'>
            <div>
                <span>Post Anonymously</span>
                <div className={userStyle} onClick={() => toggleUser(true)}>
                    <img src="https://i.pinimg.com/originals/ac/11/aa/ac11aa2add3b0193c8769e0a17d13535.jpg" alt="anonymous-pfp" className='size-10 rounded-full'/>
                    <span className='truncate'>Anonymous User</span>
                </div>
            </div>
            <div>
                <span>Post As Yourself</span>
                <div className={userStyle} onClick={() => toggleUser(false)}> 
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="pfp" className='size-10'/>
                    <span>Pranav Adukkadukkam</span>
                </div>
            </div>
        </div>
    );
}

export default ChangeUser;