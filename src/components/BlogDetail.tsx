import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../redux/slices/blogSlice';
import { RootState, AppDispatch } from '../redux/store';

const BlogDetail: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams();
    const { posts } = useSelector((state: RootState) => state.blog);
    const post = posts.find((post) => post.id === Number(id));

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchPosts());
        }
    }, [dispatch, posts]);

    return (
        <div className="p-4">
            {post ? (
                <>
                    <h1 className="text-3xl">{post.title}</h1>
                    <p>{post.body}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BlogDetail;
