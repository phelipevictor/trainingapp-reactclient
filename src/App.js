import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ExercisesList } from './components/ExercisesList'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/exercises' element={<ExercisesList />} />
    </Routes>
    </div>
  )
}

export default App