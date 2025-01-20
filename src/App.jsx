
// import './App.css'

import HomePage from "./components/HomePage"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
