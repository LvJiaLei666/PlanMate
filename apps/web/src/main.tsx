import { createRoot } from 'react-dom/client'
import './index.less'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/mainLayout'
import Login from '@/layouts/login'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  )
}


createRoot(document.getElementById('root')!).render(
  <Index />,
)
