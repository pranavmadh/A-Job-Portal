import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addPostAtom } from '../../../store/atoms/addPost';
import { anonymousAtom } from '../../../store/atoms/anonymous';
import axios from 'axios';
import axiosInstance from '../../../axiosConfig';
import { postCountAtom } from '../../../store/atoms/postCount';

const AddPostPopup = () => {
    const isPopupVisible = useRecoilValue(addPostAtom);
    const setAddPost = useSetRecoilState(addPostAtom);
    const setPostCount = useSetRecoilState(postCountAtom)
    const setIsAnonymous = useSetRecoilState(anonymousAtom)
    const postCount = useRecoilValue(postCountAtom)
    const anonymous = useRecoilValue(anonymousAtom)
    const [texterror, setError] =  useState(false)
    const [postContent, setPostContent] = useState('');

    const toggleUser = () => {
        setIsAnonymous(!anonymous);
    };

    const handlePostContentChange = (event) => {
        setPostContent(event.target.value);
    };

    const handleAddPost = async () => {
        if(postContent.length < 1  || postContent.length > 200) {
           return
        }

        const response = await axiosInstance.post('http://localhost:3000/api/v1/user/community/post',{
            description : postContent,
            isAnonymous : anonymous
        })
        setPostCount(postCount+1)
        setAddPost(false);
    };

    return (
        <div>
            {isPopupVisible && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">Create A Post</h2>
                        <div className="mb-4">
                            <button onClick={toggleUser} className="bg-gray-200 px-4 py-2 rounded">
                                {anonymous ? 'Post as Yourself' : 'Post Anonymously'}
                            </button>
                        </div>
                        <div>
                            <h1>Post as <span className='text-remotego font-semibold'>{anonymous ?  "Anonymous"  : "Pranav Adukkadukkam"}</span></h1>
                        </div>
                        <div className="mb-4 mt-2">
                            <textarea
                                value={postContent}
                                onChange={handlePostContentChange}
                                className="w-full p-2 border rounded resize-none"
                                style={{ height: '150px' }}
                                placeholder="Write your post here..."
                                onBlur={() => {
                                    if(postContent.length < 1  || postContent.length > 200) {
                                        setError(true)
                                    } else {
                                        setError(false)
                                    }
                                }}
                            ></textarea>
                            {texterror ? <span className='text-red-500'>Should not be greater than 200 characters</span> : null}
                        </div>
                        <div className="flex justify-end">
                            <button onClick={handleAddPost} className="bg-remotego text-white px-4 py-2 rounded-xl" disabled={texterror}>
                                Add Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddPostPopup;