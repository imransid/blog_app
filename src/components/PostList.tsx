import React from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const PostList: React.FC<{ posts: { id: number; title: string; body: string }[] }> = ({ posts }) => (
    <ul>
        {posts.map((post) => (
            <li key={post.id} className="mb-4">
                <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                </Link>
                <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
            </li>
        ))}
    </ul>
);

export default PostList;
