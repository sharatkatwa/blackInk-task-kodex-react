import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
  <div className='font-giest bg-[var(--bg)] text-[var(--text)]'>
  <Navbar/>
    <div className='min-h-[calc(100vh-4rem)] mx-auto max-w-5xl px-4 py-12'>
        <Outlet/>
    </div>
    </div>
  )
}

export default MainLayout