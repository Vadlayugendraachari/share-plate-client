import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { useTheme } from './hooks/ThemeContext'


function App() {
  const {darkMode} = useTheme();
  return (
    <div style={{ background: darkMode ? '#252525' : '#fff' }}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
