import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home_screen from './screens/Home_screen'
import Login_screen from './screens/Login_screen'
import Signup from './screens/Signup'
import { CartProvider } from './Components/ContextReducer'
import My_Order from './screens/My_Order'

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home_screen />} />
            <Route exact path='/login' element={<Login_screen />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/myorder' element={<My_Order />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
