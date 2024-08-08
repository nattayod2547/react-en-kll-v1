import { useState } from 'react'

import './App.css'
import Naverl from './components/Naverl'
import Hdert from './components/Hdert'

function App() {
  

  return (
    <>
      <Naverl/>
      <main className="mt-16">
        {/* เพิ่ม padding ด้านบนเพื่อหลีกเลี่ยงการถูกบัง */}
        <div className="">
          {/* ใส่เนื้อหาของหน้าเว็บที่นี่ */}
            <Hdert/>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          <p className=" h-96">Content goes here...</p>
          
        </div>
      </main>
    </>
  )
}

export default App
