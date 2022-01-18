import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

export const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, loading, err] = useFetching(async (id) => {
        const res = await PostService.getByID(id)
        setPost(res.data);
    })
    const [fetchComments, loadingComments, errCommets] = useFetching(async (id) => {
        const res = await PostService.getCommentsByID(id)
        setComments(res.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Открыта страница поста с ID = {params.id}</h1>
            {loading
                ? <Loader />
                : <div>{post.id} . {post.title}</div>
            }
            <h1>Комментарии</h1>
            {loadingComments
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id}>
                            <br />
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}