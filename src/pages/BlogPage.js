import React from "react";
import transition from "../transition";
import TextBlog from "../components/BlogPageComponents/TextBlog/TextBlog"

const BlogPage = () => {
    return(
        <div>
            <h2>Pagina Blog</h2>
            <TextBlog></TextBlog>
        </div>
    )
}

export default transition(BlogPage);