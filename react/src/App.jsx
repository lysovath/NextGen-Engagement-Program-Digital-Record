import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from './component/layout/global/Header'
import Home from './page/Home'
import Batch from './page/Batch'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batch/:batchNumber" element={<Batch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
