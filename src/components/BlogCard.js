import { Link } from "react-router-dom"
import { ThemeProvider } from "./ThemeContext"
import { useContext } from "react"

function BlogCard(props)
{   
    const {theme} = useContext(ThemeProvider)
    const desc = props.post.explanation.slice(0,100)+'...'
    return(
        <section className="main-post">
                    
            <img className="main-image" src={props.post.url} alt="blog1" />
            <p className="main-date">{props.post.date}</p>
            <Link to={props.post.id.toString()} className='title-link' ><h2 className={theme === 'light' ? 'main-heading':'main-heading main-heading-dark'}>{props.post.title}</h2></Link>
            <p className={theme === 'light' ? 'main-body':'main-body main-body-dark'}>{desc}</p>
            
        </section>
        
    )
}
export default BlogCard