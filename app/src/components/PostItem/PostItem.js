import React from "react";
import { useNavigate } from 'react-router-dom';
import { CustomBtn } from "../UI/btn/CustomBtn";
import './PostItem.css'

export const PostItem = ({ post, remove }) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <CustomBtn onClick={() => navigate(`/posts/${post.id}`)}>Открыть</CustomBtn>
                <CustomBtn onClick={() => remove(post)}>Удалить</CustomBtn>
            </div>
        </div>
    )
}