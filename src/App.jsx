import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'

export default function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}
