import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce'; 




function Navbarr() {
    const [scrolled, setScrolled] = useState(false);
    // ทำการกดเเล้วสะไร
    const navs = [
      { title: "Hame", sectionId: "Hame-set" },
      { title: "Skills &amp", sectionId: "Hame-set" },
      { title: "Portfolio", sectionId: "Portfolio-set" },
      { title: "Contact", sectionId: "Contact-set" },
    ]
    const handClick = (sectionId) => {
          console.log(sectionId)
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            console.warn(`Element with id ${sectionId} not found`);
          }
    }
    // ทำการกดเเล้วสะไร

    //maun touga/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [isMenu, setisMenu] = useState(false);
    const toggleMaenu = () => {
        setisMenu(!isMenu)   
    }
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // ใช้ debounce กับฟังก์ชัน handleScroll
  const handleScroll = debounce(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, 100); // 100ms เป็นการหน่วงเวลา

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <nav className={`fixed top-0 left-0 w-screen transition-all duration-300 ease-in-out ${scrolled ? 'bg-gray-700  h-16' : 'bg-gray-900  h-16'} text-white z-50 `}    >
        <div className='    mx-auto max-w-6xl grid grid-cols-[40%,60%] h-16 items-center  '>
            <div className='sm:ml-0  ml-9  '><h1>Mr. Nattayod</h1></div>
                {/* Toggle manu */}
                <div className='sm:hidden flex justify-end'>
                <button id='manu-toggle' className='text-primabgstal mr-4' onClick={toggleMaenu}>
                    <svg 
                          fill='none' 
                          stroke='currentColor' 
                          strokeLinecap='round' 
                          strokeLinejoin='round' 
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                          className='w-6 h6'
                          >
        <path d="m4 6h16M4 12h16M4 18h16"></path>
    </svg>
</button>
                </div>

            <div className='w-full flex justify-center '>
            {/* navs.map((e,i) => ) ทำการกดเเล้วสะไร */}
                <ul className='sm:flex text-center gap-2 hidden '>
                  {
                    navs.map((e,i) => (
                      <li 
                      key={`nav-${e}-${i}`} 
                      onClick={()=>(handClick(e.sectionId))}
                      className='w-24 '
                      ><a href="#">{e.title}</a></li>
                    ))
                  }
                    {/* <li className='w-24 '><a href="#">Hame</a></li>
                    <li className=' '><a href="#">Skills &amp; Experience</a></li>
                    <li className='w-24 '><a href="#">Portfolio</a></li>
                    <li className='w-24 '><a href="#">Contact</a></li> */}
                </ul>
            </div>
            {/* mobile menu */}
        {isMenu ? (
            <div className='fixed top-16 left-0 w-full justify-center '>
        <ul className='flex-col h-full justify-end bg-gray-900  sm:hidden '>
                    <li className='py-2'><a href="#">
                    {
                    navs.map((e,i) => (
                      <li 
                      key={`nav-${e}-${i}`} 
                      onClick={()=>(handClick(e.sectionId))}
                      className='w-24 '
                      ><a href="#">{e.title}</a></li>
                    ))
                  }
                    </a></li>
                    {/* <li className='py-2'><a href="#">Hame</a></li>
                    <li className='py-2'><a href="#">Skills &amp; Experience</a></li>
                    <li className='py-2'><a href="">Portfolio</a></li>
                    <li className='py-2'><a href="#">Contact</a></li> */}
        </ul>
        </div>
        ) : null}
            

        </div>
        

    </nav>
  )
}

export default Navbarr