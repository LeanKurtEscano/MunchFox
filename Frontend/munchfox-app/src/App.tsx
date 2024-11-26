import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import './App.css'
import { MyProvider,useMyContext } from './context/MyContext'

import Login from './pages/Login'



function App() {
  return (
    <MyProvider>
      <Main />
    </MyProvider>
  );
}

const Main:React.FC = () => {
  const {toggleLog} = useMyContext();
  
  return (
  
    <>
    <Navbar />
    {toggleLog && (
      <Login />
    )}
    
   
    <Footer /> 
    </>
    
  )
}

export default App
