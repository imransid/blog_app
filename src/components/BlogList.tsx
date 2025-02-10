import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setSearchQuery } from "../redux/slices/blogSlice";
import { RootState, AppDispatch } from "../redux/store";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import debounce from "lodash.debounce";

const BlogList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { posts, searchQuery, loading, error } = useSelector(
        (state: RootState) => state.blog
    );

    const [localSearch, setLocalSearch] = useState(searchQuery);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleSearch = useMemo(
        () =>
            debounce((query: string) => {
                dispatch(setSearchQuery(query));
            }, 300),
        [dispatch]
    );

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearch(e.target.value);
        handleSearch(e.target.value);
    };

    const filteredPosts = useMemo(
        () =>
            posts.filter((post) =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        [posts, searchQuery]
    );

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search blog posts..."
                value={localSearch}
                onChange={onSearchChange}
                className="p-2 mb-4 border rounded w-full"
            />

            {loading ? (
                <ul>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <li key={index} className="mb-4">
                            <Skeleton height={30} width="60%" />
                            <Skeleton height={20} width="80%" />
                        </li>
                    ))}
                </ul>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : filteredPosts.length > 0 ? (
                <ul>
                    {filteredPosts.map((post) => (
                        <li key={post.id} className="mb-4">
                            <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                            </Link>
                            <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No matching blog posts found.</p>
            )}
        </div>
    );
};

export default BlogList;
