import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home_screen from './screens/Home_screen'
import Login_screen from './screens/Login_screen'
import Signup from './screens/Signup'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home_screen />} />
          <Route exact path='/login' element={<Login_screen />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
