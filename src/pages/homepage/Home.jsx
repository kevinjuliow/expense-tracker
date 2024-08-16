import React from 'react'

const Home = () => {
  return (
    <div className=' h-[85vh] flex items-center justify-center'>
      <div className='bg-white flex items-center w-[80%] h-full'> 
        <div className='flex-1'>
            <h1 className='font-bold text-3xl text-gray-800'>Manage Your Expenses Easily With ETracker</h1>
            <p className='text-sm text-gray-400 mt-2'>We are providing the easiest way to manage expenses . A complete view to track your savings , spending and others for absoulutely free with no costs.</p>
            <a href="/login">
            <button type="button" class="mt-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
            </a>
        </div>
        <div className='flex-1'>
          <img src="icons/homeIcon.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home