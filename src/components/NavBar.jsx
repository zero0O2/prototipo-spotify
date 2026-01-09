import ArtistsBar from '../components/ArtistsBar'
const url = '/json/artists.json'
import { useEffect, useState} from 'react'

const NavBar = () => {
    const [artists,setArtists] = useState([])

    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((result) => result.artists)
        .then((api)=> {
            setArtists(api)
        })
    },[])

    return(
        <div class='flex justify-center w-[90px] h-[100%] p-[0px_8px_8px_8px]'> 
            <div class='flex flex-col items-center justify-baseline bg-[#151515] w-[100%] h-[100%] py-[10px] gap-[10px] rounded-[5px]'>
                {
                    artists.map((element,index)=>{
                        return <ArtistsBar key={element.id} img={element.urlImg} slug={element.slug}/>
                    })
                } 
            </div>
        </div>
    )
}

export default NavBar 