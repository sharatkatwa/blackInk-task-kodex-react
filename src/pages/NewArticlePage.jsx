import React from 'react'
import { NavLink, Outlet } from 'react-router'
import ArticleForm from '../components/ArticleForm'
import { ArrowLeft } from 'lucide-react'

const NewArticlePage = () => {
  return (
  <>
  
    <NavLink to={'/dashboard'} className='text-muted hover:text-white flex items-center gap-2 cursor-pointer' ><ArrowLeft size={15} /> Back to dashboard</NavLink>
    <ArticleForm />
  </>
  )
}

export default NewArticlePage