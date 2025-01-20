
// import './App.css'

import HomePage from "./components/HomePage"
import ContactDetails from "./components/ContactDetails"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactDetails/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
