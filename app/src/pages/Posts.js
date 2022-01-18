import React, { useRef } from "react";
import { useEffect, useState } from 'react';
import PostService from './../API/PostService';
import { Loader } from './../components/UI/Loader/Loader';
import { useFetching } from './../hooks/useFetching';
import { getPageCount } from './../utils/pages';
import { Paginate } from './../components/UI/paginate/Paginate';
import { PostFilter } from './../components/PostFilter/PostFilter';
import { PostForm } from './../components/PostForm/PostForm';
import { PostList } from './../components/PostList/PostList';
import { CustomBtn } from './../components/UI/btn/CustomBtn';
import { PopUp } from './../components/UI/popUp/PopUp';
import { usePosts } from './../hooks/usePosts';
import { useObserver } from "../hooks/useObserver";
import { CustomSelect } from "../components/UI/select/CustomSelect";


export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [popUp, setPopUp] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastEl = useRef();

    const [fetchPosts, loading, postErr] = useFetching(async (limit, page) => {
        const res = await PostService.getAll(limit, page);
        setPosts([...posts, ...res.data]);
        const totalCount = res.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastEl, page < totalPages, loading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);    //page для бесконечной прокрутки

    const changePage = (page) => {
        setPage(page);
        // fetchPosts(limit, page); для пагинации
    }

    const addPost = (post) => {
        setPosts([...posts, post])
        setPopUp(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <CustomBtn onClick={() => { setPopUp(!popUp) }} style={{ marginTop: '30px' }}>
                Создать пост
            </CustomBtn>
            <PopUp visible={popUp} setVisible={setPopUp}>
                <PostForm add={addPost} />
            </PopUp>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <CustomSelect
                value={limit}
                onChange={value =>
                    setLimit(value)}
                defaultValue='Колличество элементов на странице'
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: -1, name: 'Все посты' },
                ]}
            />
            {postErr &&
                <h1>Произошла ошибка ${postErr}</h1>

            }

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JS' />
            <div ref={lastEl} style={{ height: 30 }} />
            {loading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
            }
            <Paginate page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    )
}