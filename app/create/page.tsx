'use client';

import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const Create = () => {
  const router = useRouter();
  const {data: session} = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })

  // type for event e shoud be React.MouseEvent
  const createPost = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('api/prompt/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.id,
          tag: post.tag,
        }), 
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log('Error in createPost: ', error);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  )
}

export default Create