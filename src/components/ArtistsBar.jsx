import { Link } from "react-router-dom"

const NavBar = ({img,slug}) => {  
    return(
        <Link to={`/artista/${slug}`}>
            <img src={img} class='w-[54px] h-[54px] rounded-[5px]' alt="" />
        </Link>
    )
}

export default NavBar
