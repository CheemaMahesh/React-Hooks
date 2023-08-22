import React, { useState } from "react";

export default function Blog() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  const [blogs,setBlogs]=useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setBlogs.push({title,content});       This won't work.
    setBlogs([...blogs,{title,content}]);
    console.log(blogs);
    setTitle("");
    setContent("");

  };

  return (
    <div className="head">
      <h1>Write a Blog!</h1>
      <div className="body">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="l">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter the title here...."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label htmlFor="content" className="l">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Content goes here......."
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />

          <button type="submit">ADD</button>
        </form>
      </div>
      <h1>Blogs</h1>
      <div className="Blog">
       {blogs.map((data,i)=>{
       return <div key={i} className="Blog-C">
        <h4 >{data.title}</h4>
        <p>{data.content}</p>
        <br/>
       </div>
       })}
      </div>
    </div>
  );
}
