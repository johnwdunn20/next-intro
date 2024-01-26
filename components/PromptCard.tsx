'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter} from 'next/navigation';

interface PostType {
  _id: string;
  creator: string;
  prompt: string;
  tag: string;
}

type PostProps = {
  post: PostType;
  handleTagClick: (tag: string) => void;
}

const PromptCard: React.FC<PostProps> = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState(false)
  

  const handleCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(post.prompt)
    // reset copy after 1 second
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }

  console.log('Post: ', post);
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src={post.creator.image || ''}
            alt='user image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>{post.creator?.username || 'Placeholder username'}</h3>
            <p className='font-inter text-sm text-gray-500'>{post.creator?.email || 'Placeholder email'}</p>
          </div>

          <div className='copy_btn' onClick={handleCopy}>
            <Image
              src={`${copied ?  '/assets/icons/tick.svg': '/assets/icons/copy.svg'}`}
              alt='copy'
              width={20}
              height={20}
            />
          </div>
        </div>

      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
    </div>
  )
}

export default PromptCard