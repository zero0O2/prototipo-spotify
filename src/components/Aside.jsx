import LogoIco from "./LogoIco"
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";


const Aside = () => {

    useEffect(()=>{
        const searchDiv = document.getElementById('searchdiv')  
        const input = document.getElementById('input')
        
        const Search = (input,searchDiv) => {
            input.addEventListener('focus',()=>{
                searchDiv.style.border='1px solid'
            })
            input.addEventListener('input',()=>{
                searchDiv.style.border='1px solid'
            })
            input.addEventListener('blur',()=>{
                searchDiv.style.border='none'
            })
        }
        Search(input,searchDiv);
        
    },[])
    
    

    return(
        <div class='w-full h-[66px] font-light flex items-center px-[25px]'>
            <div class='flex w-full gap-x-[30px] items-center justify-between'>
                <LogoIco />

                <div class='flex gap-[30px] items-center justify-center'>
                    <div class="flex gap-[10px] ">
                        <button id="buttonHome" class='cursor-pointer text-[30px] h-[50px] w-[50px] text-[#929292] bg-[#212121] rounded-full flex items-center justify-center' >
                            <GoHome  />
                        </button>

                        <div id="searchdiv"  class='flex items-center justify-between px-[10px] h-[50px] w-[460px] rounded-full text-[#929292] bg-[#212121]'>
                            <button class='text-[25px]'>
                                <CiSearch class='cursor-pointer' />
                            </button>

                            <input id="input"  class='h-[50px] w-[100%] rounded-full  outline-0 px-[10px]' type="text" />
                        </div>
                    </div>
                    <div class="flex gap-[20px]  items-center justify-center ">
                        <button class='cursor-pointer bg-white text-[black] text-[14px] font-[700] w-[180px] h-[35px] rounded-[20px]'>Ver planos Premium</button>
                        <button class="cursor-pointer" cursor-pointer>
                            <IoMdNotificationsOutline class="w-[25px] h-[25px]" />
                        </button>
                        <button class="w-[50px] h-[50px] flex items-center justify-center p-[8px] bg-[#252525] rounded-[50%] cursor-pointer">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSwlI2jh42geitbgpoByIXfaR_2J9Dl3XJQ&s" 
                            class=" rounded-[50%]" 
                            alt="" />
                        </button>
                    </div>
                </div>


                
            </div>  
        </div>
    )
}

export default Aside