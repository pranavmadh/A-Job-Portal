import { useEffect, useState } from "react";
import Post from "./Post/Post";
import Search from "./Search/Search";
import axiosInstance from "../../axiosConfig";
import { useRecoilValue } from "recoil";
import { postCountAtom } from "../../store/atoms/postCount";

const CommunityMainSection = () => {
    const [posts, setPosts] = useState([]);
    const postCount = useRecoilValue(postCountAtom);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosInstance.get('http://localhost:3000/api/v1/user/community/getpost');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [postCount]);

    return (
        <div className="w-full md:mx-10 border-2 border-slate-100 p-10 bg-white shadow-sm">
            <Search />
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default CommunityMainSection;