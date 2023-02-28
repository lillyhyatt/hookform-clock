import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SiteNav from './components/SiteNav'
import Clock from './components/Clock'
import Form from './components/Form'
import Layout from './components/Layout'

function App() {

  return (
    <div className="App">
<Router>
<SiteNav />
<Routes>
<Route path="/" element={<Layout />} />
<Route index element={<Form />} />
<Route path="/clock" element={<Clock />} />
</Routes>
</Router>

    </div>
  )
}

export default App
