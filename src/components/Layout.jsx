import Aside from "./Aside"
import NavBar from "./NavBar"
import DescricaoLateral from "./DescricaoLateral"


const Layout = ({children}) => {
  return(
    <>
        <Aside/>
        <div class="flex">
            <div class='flex w-[100vw] h-[100vh] pt-[66px]'>

                <NavBar/>
                <div class=" w-[100%] h-[100%]">
                    <div class="w-[100%] h-[100%] gap-x-[8px] pr-[8px] pb-[8px] flex">
                      <div class=" w-[100%] h-[100%] bg-gradient-to-b from-[var(--cor02)] via-[var(--cor01)] to-[var(--cor01)] rounded-[8px]">
                        {children}
                      </div>

                      <DescricaoLateral/>
                      
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Layout