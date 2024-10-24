import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className='h-[50%] w-full py-5 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto mt-10'>
        <div className="h-full w-[300px] p-5 bg-red-400 rounded-xl flex-shrink-0">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, dicta nulla? Molestias nobis aut autem!</p>
        </div>

        <div className="h-full w-[300px] p-5 bg-blue-400 rounded-xl flex-shrink-0">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, dicta nulla? Molestias nobis aut autem!</p>
        </div>

        <div className="h-full w-[300px] p-5 bg-yellow-400 rounded-xl flex-shrink-0">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, dicta nulla? Molestias nobis aut autem!</p>
        </div>

        <div className="h-full w-[300px] p-5 bg-green-400 rounded-xl flex-shrink-0">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, dicta nulla? Molestias nobis aut autem!</p>
        </div>
        
    </div>
  )
}

export default TaskList