import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import Home from './Home'
import Album from './Album'
import Singers from './Singers'

function NavBar() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="Album" element={<Album/>} />
        <Route path="Singers" element={<Singers/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default NavBar