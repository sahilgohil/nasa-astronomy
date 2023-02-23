// version 1.0 date-23/2/2023

import { Routes,Route} from "react-router-dom";
import Home from "./Home";
import PostPage from './components/PostPage'
import { useEffect,useState,useContext } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "./components/ThemeContext";



function App() {

  const {theme} = useContext(ThemeProvider)
  if(theme === 'dark')
  {
    document.body.style.backgroundColor = '#1a1a1a'
    document.body.style.color = 'rgb(155, 155, 155)'
  }
  else{
    document.body.style.backgroundColor = '#ececec'
    document.body.style.color = '#1a1a1a'
  }
  const location = useLocation()
  useEffect(()=>{
    goTop()
  },[location])


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isWide,setIsWide] = useState(false)
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if(windowWidth > 632)
      {
        setIsWide(true)
      }
      else if(windowWidth <632){
        setIsWide(false)
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  function goTop()
  {
    window.scrollTo(10,10)
  }



  return (
    <div className="App" >
      {isWide && <div className={theme === 'light' ?'go-top':'go-top go-top-dark'} onClick={goTop}><i class="fa-solid fa-arrow-up fa-xl"></i></div>}
      <Routes>
        <Route path="/" element={<Home isWide = {isWide}/>}/>
        <Route path=':id' element ={<PostPage />}/>
    
      </Routes>
    </div>
  )
}

export default App;
