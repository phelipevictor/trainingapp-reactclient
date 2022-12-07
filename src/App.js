import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ExercisesList } from './components/ExercisesList'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Exercises from './pages/Exercises/Exercises'
import MyTraining from './pages/MyTraining'
import About from './pages/About'

function App() {
  return (
    <div className='App'>
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/exercises' element={<ExercisesList />} />
      <Route path='/mytraining' element={<MyTraining />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </div>
  )
}

export default App