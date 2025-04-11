import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'




function App() {


  return (
    <div>
        <Navbar></Navbar>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorite />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
