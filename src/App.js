import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Layout from './components/Layout'
//import Portfolio from './components/Portfolio'
import Project from './components/Project'
import Dashboard from './components/Dashboard'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        {/*<Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/project" element={<Project/>}/>
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
