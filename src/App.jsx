import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Register from "./components/Register"
import Login from "./components/Login"

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Login/>
    <Register/>
    <Footer/>
    </>
  )
}

export default App
