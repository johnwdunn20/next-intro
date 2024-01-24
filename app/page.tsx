import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden'/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        <p className='desc text-center'>
          Subtitle
        </p>
      </h1>
      <Feed/>
    </section>
  )
}

export default Home