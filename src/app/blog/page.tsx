import Blog from '@/components/Blog'
import BlogHero from '@/components/BlogHero'
import JoinMovement from '@/components/JoinMovement'
import React from 'react'


const BlogPage = () => {
  return (
    <div>
      <BlogHero />
      <Blog />
      <JoinMovement />
    </div>
  )
}

export default BlogPage