
import BlogCard from './BlogCard'
import React, { useContext } from "react"
import { ThemeProvider } from './ThemeContext'
import { NasaContext } from './NasaContext'

function PostCard()
{

    const {theme} = React.useContext(ThemeProvider)
    const {nasaData,viewMoreResults,loading} = useContext(NasaContext)
    

    
    
 
    
    const nasaElements = nasaData.map(item=>{
        return(<BlogCard post={item}/>)
    })

    
    

    return(
        <div className='hero-container'>
            <div className={theme === 'light' ? 'top-headline': 'top-headline top-headline-dark'}>
                <h2>Today's Top Picks</h2>
            </div>
            <main className="main-container" >
                 {/* {newsElements} */}
                 {nasaElements}
            </main>
            {loading && <div className='loading'> Loading your content <i class="fa-solid fa-spinner fa-spin-pulse fa-lg"></i> </div>}
            <div className="view-more-container"><button onClick={()=> {
                                                                    
                                                                    viewMoreResults()
                                                                    }} className={theme === 'light' ? 'view-more-link':'view-more-link view-more-link-dark'}>View More</button></div>
        </div>
    )
}
export default PostCard