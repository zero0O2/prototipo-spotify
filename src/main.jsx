import { Routes , Route , HashRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import ArtistsPage from './pages/ArtistsPage.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/artista/:slug' element={<ArtistsPage/>} />
    </Routes>
  </HashRouter>,
)
