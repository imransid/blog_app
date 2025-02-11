import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../redux/slices/blogSlice";
import { RootState, AppDispatch } from "../redux/store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PostDetails from "../components/PostDetails";

const LoadingSkeleton: React.FC = () => (
    <>
        <Skeleton height={40} width="60%" />
        <Skeleton count={5} />
    </>
);

const Details: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams();
    const { posts, loading } = useSelector((state: RootState) => state.blog);

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchPosts());
        }
    }, [dispatch, posts.length]);

    const post = useMemo(() => posts.find((p) => p.id === Number(id)), [posts, id]);

    return (
        <div className="p-4">
            {loading ? <LoadingSkeleton /> : post ? <PostDetails post={post} /> : <p className="text-red-500">Post not found.</p>}
        </div>
    );
};

export default Details;
