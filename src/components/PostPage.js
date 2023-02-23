import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import Footer from "./Footer"
import { useContext } from "react"
import Sidebar from "./Sidebar"
import { NasaContext } from "./NasaContext"
function PostPage()
{
    const {id} = useParams()
    
    const {nasaData} = useContext(NasaContext)   
    const post = nasaData.find(item => item.id == id)

    const sideHtml = nasaData.map(item =>{
        return (<Sidebar data = {item} />)
    }).slice(0,10)
   
    
    return (
        <div className="dummy">
            <Navbar className = 'box-shadow'/>
            <div className="outer-post"> 
                <div className="post-container">
                    <div className="upper-main">
                        <div className="main">
                            <h1 className="pp-title">{post.title}</h1>
                            <p className="pp-date">{post.date}</p>
                            <div className="pp-img-container">
                                <img className="pp-img" src={post.url} />
                            </div>
                            <p className="pp-description">{post.explanation}  </p>
                            
                        </div>
                    </div>
                    <div className="sidebar">
                        <h2 className="s-title">Recent Posts</h2>
                        {sideHtml}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PostPage