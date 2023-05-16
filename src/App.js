import React from 'react'
import Home from './components/home'
import Skill from './components/skill'
import { BrowserRouter } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
return (
<div >
    <body className='h-full flex-wrap flex-col   mb-16 mx-12 border-solid border-x-2  border-white  ;
        bg-[#0b051a]'>
        {/*basename={processs.env.PUBLIC_URL}*/}
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/skill" element={<Skill/>} />
      </Routes>  
    </BrowserRouter>
      
        
    </body>
</div>
)
}
export default App