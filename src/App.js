import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Exercise from './pages/Exercise/Exercise.js'
import Training from './pages/Training/Training.js'
import About from './pages/About/About'
import Onetraining from './pages/Onetraining/Onetraining'

function App() {
  return (
    <div className='App'>
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/exercise' element={<Exercise />} />
      <Route path='/training' element={<Training />} />
      <Route path='/training/:trainingId' element={<Onetraining />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </div>
  )
}

export default App