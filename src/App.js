import React from 'react'
import AboutPage from './PageComponents/About'
import ContactPage from './PageComponents/Contact'
import FooterPage from './PageComponents/Footer'
import NavbarPage from './PageComponents/Navbar'
import ServicePage from './PageComponents/Service'
import HomePage from './PageComponents/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
        <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path='/Navbar' element={<NavbarPage/>} />
            <Route path='/Home' element={<HomePage/>} />
            <Route path='/Service' element={<ServicePage/>} />
            <Route path='/Contact' element={<ContactPage/>} />
            <Route path='/About' element={<AboutPage/>} />
            <Route path='/Footer' element={<FooterPage/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App