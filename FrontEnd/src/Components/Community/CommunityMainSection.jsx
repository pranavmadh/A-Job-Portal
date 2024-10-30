import { useEffect } from "react"
import Post from "./Post/Post"
import Search from "./Search/Search"
import axios from "axios"

const CommunityMainSection = () => {
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/user/community/getpost');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="w-full md:mx-10 border-2 border-slate-100 p-10 bg-white shadow-sm">
            <Search/>
            <Post/>
        </div>
    )
}

export default CommunityMainSection