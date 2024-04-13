import Grid from './components/Grid/Grid'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import MainBody from './components/MainBody'
function App() {
  

  return (
    <>
      <Grid numberOfCards={9}/>
      <Footer/>
      <Navbar/>
      <MainBody/>
      
    </>
  )
}

export default App
