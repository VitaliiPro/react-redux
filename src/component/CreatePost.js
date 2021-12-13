import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";

const AUTHORS = [
    {
        author: "Johnny Depp",
        avatar: "https://ukranews.com/upload/news/2017/06/20/59494e9705766-------_1200.jpg",
        nickname: "Jack Sparrow",
    },
    {
        author: "Kevin McNally",
        avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fua.kinorium.com%2F457408%2Fcast%2F&psig=AOvVaw3cdLt4KIQAdfzk4-RztLiA&ust=1639383318802000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODfs4np3fQCFQAAAAAdAAAAABAL",
        nickname: "Gibbs",
    },
    {
        author: "Orlando Bloom",
        avatar: "https://www.kinonews.ru/insimgs/newsimg/newsimg49265.jpg",
        nickname: "William Turner",
    },
]

const CreatePost = () => { 
    const [author, setAuthor] = useState("Johnny Depp");
    const [contents, setContents] = useState("");
    const [image, setImage] = useState("");

    const formatDate = () => { 
        let date = new Date();

        let dd = date.getDate();
        if (dd < 10) dd = "0" + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = "0" + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = "0" + yy;

        return dd + "." + mm + "." + yy;
    }

    const dispatch = useDispatch();

    const createNewPost = (event) => {
        event.preventDefault();
        const date = formatDate();
        const likes = 0;
        const coments = 0;
        const reposts = 0;
        const authorSelect = AUTHORS.find((item) => item.author === author);
        dispatch(addPost({ author: authorSelect.author, avatar: authorSelect.avatar, nickname: authorSelect.nickname, date, contents, image, likes, coments, reposts }));
        setAuthor("Johnny Depp");
        setContents("");
        setImage("");
    };

    return (
        <form onSubmit={createNewPost} className="create-form">
            <select onChange={evt => setAuthor(evt.target.value)}>
                {AUTHORS.map((item, index) => (
                    <option value={item.author} key={index}>{item.author}</option>
                ))}

            </select>

            <input
                type="text"
                placeholder="Contents"
                value={contents}
                onChange={e => setContents(e.target.value)}
            />

            <input
                type="text"
                placeholder="Image"
                value={image}
                onChange={e => setImage(e.target.value)}
            />

            <button type="submit" onClick={createNewPost}>
                Create new post
            </button>
        </form>
    )
}

export default CreatePost;