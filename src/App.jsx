import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './components/Accueil'
import Navbar from './components/Navbar'
import Moi from './components/Moi'
import Cv from './components/Cv'
import Projet from './components/Projet'
import Footer from './components/Footer'
import { StrictMode } from 'react'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Accueil />} />
          <Route path='/moi' element={<Moi />} />
          <Route path='/Cv' element={<Cv />} />
          <Route path='/Projet' element={<Projet />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    


  )
}

export default App;

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
