import { Routes , Route , BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import ArtistsPage from './pages/ArtistsPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/artista/:slug' element={<ArtistsPage/>} />
    </Routes>
  </BrowserRouter>,
)
