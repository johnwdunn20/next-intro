import React from 'react'
import Link from 'next/link';

type FormProps = {
  type: string;
  post: {
    prompt: string;
    tag: string;
  };
  setPost: React.Dispatch<React.SetStateAction<{
    prompt: string;
    tag: string;
  }>>;
  submitting: boolean;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}

const Form:React.FC<FormProps> = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>  {type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and Share
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({...post, prompt: e.target.value})}
            placeholder='Enter your prompt here'
            required
            className='form_textarea'
          >
          </textarea>
        </label>
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag
            <span className='font-normal'> (#Coding #Math)</span>
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({...post, tag: e.target.value})}
            placeholder='#tag'
            required
            className='form_input'
          >
          </textarea>
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500'>Cancel</Link>
          <button
            type='submit'
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form