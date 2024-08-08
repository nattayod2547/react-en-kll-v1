import { useState } from 'react'

import './App.css'
import Left from './components/Left'
import Rleft from './components/Rleft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  

  return (
    <>
    {/* primaryBg */}
      <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
          <div >
            <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[87vh]'>
              <div className='flex flex-col gap-2'>
                <div className='text-3xl text-primaryTitle font-semibold'>Nattayod Lamsan</div>
                <div className='text-primaryAccent font-semibold'>Software Developer . between jobs</div>
                <div className='text-sm w-5/6'>From concept to reality, bidging the gap with code, transforming ideas into tangible digital solutions</div>
                <div className='mt-4'>
                  <a href="#" target='_blank'>
                  <span className='  rounded-md bg-primaryTitle text-gray-200 py-2 px-4'>
                    View Resume
                    <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/></span>
                    </span>
                  </a>
                </div>
              </div>
              <div>53.04</div>
              <div className='flex items-end'> Link</div>
            </div>
          </div>
          <div>
            <div>About</div>
            <div className='mb-96'>Experience</div>
            <div className='mb-96'>Experience</div>
            <div className='mb-96'>Experience</div>
            <div className='mb-96'>Experience</div>
            <div className='mb-96'>Experience</div>
            <div>Experience</div>
            <div>Experience</div>

          </div>
      </div>
    </>
  )
}

export default App
