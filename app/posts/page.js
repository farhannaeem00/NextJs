'use client'

import React, { useState, useEffect } from 'react'
// import "../globals.css";
import './post.module.css'

function Post() {
 
    const [posts,setPosts] = useState([])

    useEffect(() => {
       async function fetchPosts(){

            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5  ')
            const data = await response.json()
            setPosts(data)
        }
        fetchPosts()
    },[])

  return (
    <div className='posts-container'>
      {
        posts.map(({ id, title, body }) => (
          <div className='post-card' key={id}>
            <h2 className='head'>{title}</h2>
            <p>{body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Post
