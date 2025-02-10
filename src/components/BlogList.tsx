import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setSearchQuery } from '../redux/slices/blogSlice';
import { RootState, AppDispatch } from '../redux/store';
import { Link } from 'react-router-dom';

const BlogList: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { posts, searchQuery, loading, error } = useSelector(
        (state: RootState) => state.blog
    );

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log('filteredPosts', filteredPosts)

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search blog posts"
                value={searchQuery}
                onChange={handleSearch}
                className="p-2 mb-4 border rounded w-full"
            />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {filteredPosts.map((post) => (
                        <li key={post.id} className="mb-4">
                            <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">
                                <h3 className="text-xl">{post.title}</h3>
                            </Link>
                            <p>{post.body.substring(0, 100)}...</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BlogList;
