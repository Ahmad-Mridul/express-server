import { Outlet } from 'react-router'
import './App.css'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Header from './Components/Header'
function App() {
  return (
    <>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
