import React from "react";


const PostDetails: React.FC<{ post: { title: string; body: string } }> = ({ post }) => {

    return (
        <>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-700">{post.body}</p>
        </>
    );
};

export default PostDetails;
