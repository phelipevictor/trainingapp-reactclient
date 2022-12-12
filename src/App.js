import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'
import { ExercisesList } from './components/ExercisesList'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Exercise from './pages/Exercise/Exercise.js'
import Training from './pages/Training/Training.js'
import About from './pages/About/About'

function App() {
  return (
    <div className='App'>
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/exercise' element={<Exercise />} />
      <Route path='/training' element={<Training />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </div>
  )
}

export default App