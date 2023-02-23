
import React from "react"
import Navbar from "./Navbar"
import { ThemeProvider } from "./ThemeContext"

function Header(props)
{
    let today = new Date()
     today =  today.toDateString().toUpperCase()
    const {theme} = React.useContext(ThemeProvider)
     const [isSearching,setIsSearching] = React.useState(false)
     const [landing, setLanding ] = React.useState(true)

     React.useEffect(()=>{
        if(landing)
        {
            setTimeout(()=>{
                setLanding(false)
             },5000)
        }
        
     },[])

    function handleHeaderTitle()
    {
        setIsSearching(true)
        setTimeout(()=>{
            setIsSearching(false)
        },4000)
    }
    return(
            <header>
                <Navbar className='box-shadow' isWide = {props.isWide} handleHeaderTitle={handleHeaderTitle} />
                <section className={theme === 'light' ? 'header-image-container':'header-image-container header-image-container-dark'}>
                    <div> 
                        <p className={theme === 'light' ? "date" : "date dark" }>{today}</p>
                        <h1 className={theme === 'light' ? "image-title" : "image-title dark" }>{isSearching ? `Fetching your content . . .🛸 📡`  : landing ? `🛸 loading your content 🛸 . . .`: `NASA's Astronomy Picture of the Day`}</h1>
                        <p className={theme === 'light' ? "image-body" : "image-body dark" }>{isSearching ? <i class="fa-solid fa-spinner fa-spin-pulse fa-xl"></i> : landing ? <i class="fa-solid fa-spinner fa-spin-pulse fa-xl"></i> : `we understand the importance of staying informed in today's fast-paced world. That's why we strive to provide you with the most accurate information.`}</p>
                    </div>
                </section>
            </header>
    )
}

export default Header