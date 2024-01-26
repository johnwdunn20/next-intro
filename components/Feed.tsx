'use client';

import React, { useState, useEffect } from 'react'
import PromptCard from './PromptCard';
import { set } from 'mongoose';

interface Post {
  _id: string;
  creator: string;
  prompt: string;
  tag: string;
}
type PostsType = Post[];

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState<PostsType>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/prompt/all');
        const data = await response.json();
        // console.log('Data: ', data);
        setPosts(data);
      } catch (e) {
        console.log('Error in fetchPosts: ', e);
      }
    }

    fetchPosts();
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type="text" placeholder='Search' value={searchText} onChange={handleSearchChange} className='search_input peer'/>
      </form>

      <div className='mt-16 prompt_layout'>
        {posts.map(post => {
          return (
            <PromptCard key={post._id} post={post}/>
          )
        })}
      </div>
    </section>
  )
}

export default Feed