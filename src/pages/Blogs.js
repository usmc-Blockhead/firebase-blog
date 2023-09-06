import React from 'react'
import { useState } from "react";
import BlogSection from '../components/BlogSection'

const Blogs = ({setActive}) => {
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState([]);
    return (
        <div className="container">
            <div className="row">
            <div className="blog-heading text-center py-2 mb-4">Articles</div>
            {blogs?.map((blog) => (
                <div className="col-md-6" key={blog.id}>
                <BlogSection {...blog} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Blogs;