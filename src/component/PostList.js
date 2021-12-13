import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Postlist = () => {
    const posts = useSelector((state) => state.posts);
    return (
        <div>
            <CreatePost />
            <div>
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
        </div>
    );
}

export default Postlist;