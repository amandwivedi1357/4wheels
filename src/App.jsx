
import { useState } from 'react';
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import ScrollToTop from './components/Login/Scroll'
import Loading from './components/designs/Loading';



function App() {
  const [loaded, setLoaded] = useState(false);

  // Simulating image loading (replace this with actual image loading logic)
  setTimeout(() => {
    setLoaded(true);
  }, 3000); // Simulating a delay of 3 seconds

  return (
    <div className='App'>
      {!loaded ? (
        <Loading/>
      ):(
        <>
        <ScrollToTop/>
        <AllRoutes/>
        </>
      )}
   
    </div>
  )
}

export default App
