import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";

function Home(props)
{
    return(
        <>
            <Header isWide = {props.isWide}/>
            <PostCard />
            <Footer />
        </>
    )
}
export default Home