import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import Layout from "../components/Layout"

const url = '/json/artists.json'



const ArtistsPage = () => {  
    const {slug} = useParams()
    const [artists,setArtists] = useState([])
    
    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((result) => result.artists)
        .then((api)=> {
            setArtists(api)
        })        
        
    },[])
    const artist = artists.find(e => e.slug === slug)
    if (!artist) return <p>Carregando...</p>


    return(
        <>
            <Layout>
                Olá, pronto para escutar {artist.name}?
            </Layout>
        </>
    )
}

export default ArtistsPage
