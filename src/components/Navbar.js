import { Link } from "react-router-dom"
import { useContext } from "react"
import {ThemeProvider} from './ThemeContext'

function Navbar(props)
{
    const {theme,toggleTheme} = useContext(ThemeProvider)
    const iconUrl = theme === 'dark' ? 
                    'https://cdn-icons-png.flaticon.com/512/2490/2490255.png':
                    'https://cdn-icons-png.flaticon.com/512/2490/2490148.png'
    const message = theme === 'light' ? 'Dark mode': 'Light mode'
    
 
    
   
    

    return(
        <section className={`container ${props.className ? props.className : ''}`}>
                <section className="logo-title-container">
                  
                    <img className="icon" src={theme === 'light' ? 'https://cdn-icons-png.flaticon.com/512/2240/2240730.png' :'https://cdn-icons-png.flaticon.com/512/2240/2240662.png' } alt="icon img space"/>
                    <Link to='/' className="h-link"><h1 className={theme === 'light' ? 'heading': 'heading heading-dark'}>NAP</h1></Link>
                    
                </section>
                <ul>
                    <li>
                        <div onClick={toggleTheme} className="mode">
                        <img className="lightmode-icon" src={iconUrl} alt="lightmode icon"/>
                        <p>{message}</p>
                        </div>
                    </li>
                
                    <li><Link to='/' title="home page" className={theme === 'light' ? 'nav':'nav nav-dark'}> Home </Link></li>
                </ul>
            </section>
    )
}
export default Navbar