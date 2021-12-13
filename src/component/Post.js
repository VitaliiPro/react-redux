import React from 'react';
import { FaHeart, FaComment, FaRetweet, FaUpload, FaDAndD, FaCheckCircle } from "react-icons/fa";

const Post = ({ author, avatar, nickname, date, contents, image, likes, coments, reposts }) => {
    return (
        <div className="post">
            <div className="content">
                <img src={avatar} alt="" />
                <div className="card">
                    <span>{author}</span>
                    <FaCheckCircle />
                    <span>{nickname} <FaDAndD /> {date}</span>
                </div>
            </div>
            <span className="contents">{contents}</span>
            <img src={image} at="" />
            <div className="icons">
                <span>
                    <FaHeart /> 
                    {likes}
                </span>

                <span>
                    <FaComment />
                    {coments}
                </span>

                <span>
                    <FaRetweet />
                    {reposts}
                </span>

                <span>
                    <FaUpload />
                    {reposts}
                </span>
            </div>
        </div>
    );
}

export default Post;