import React from "react";
import { useState } from 'react';
import { CustomInput } from "../UI/input/CustomInput";
import { CustomBtn } from "../UI/btn/CustomBtn";
// import cl from './PostForm.module.css';

export const PostForm = ({ add }) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const newPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        add(newPost)
        setPost({ title: '', body: '' })

    }

    return (
        <form>
            <CustomInput type="text" placeholder='Назвение поста' value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
            <CustomInput type="text" placeholder='Описание поста' value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} />
            <CustomBtn onClick={newPost}>Создать пост</CustomBtn>
        </form>
    )
}