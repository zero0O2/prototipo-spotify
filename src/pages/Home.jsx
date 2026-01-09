import Layout from "../components/Layout"
import { useState , useEffect } from "react"
import PlayLists from "../components/PlayLists"
const url = '/json/artists.json'


const Home = () => {
  const [categoria,setCategoria] = useState('tudo')
  const [artists,setArtists] = useState('tudo')

  useEffect(()=>{
      fetch(url)
      .then((response) => response.json())
      .then((result) => result.artists)
      .then((api)=> {
          setArtists(api)
      })        
      
  },[])

  const hora = new Date().getHours()
  let msg = 'Olá,vamos ouvir!'
  if(hora<12 && hora>=0){
    msg = 'Bom dia!'
  }else if(hora<18 && hora>=12){
    msg = 'Boa tarde!'
  }else {
    msg = 'Boa noite!'
  }

  console.log(hora)

  const diaSemana = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long'
  }).format(new Date())

  console.log(diaSemana)

  const Categoria = (escolhida) => {
    let categoria = escolhida
    setCategoria(categoria)
  }

  return(
    <>
        <Layout>

          <div class="h-[100%]">
            <div class=" flex flex-col justify-center items-baseline h-[200px] px-[26px]">

              <div class="flex justify-start items-center h-[100px] gap-x-[10px] w-[100%]">
                <div class={` p-[5px_10px] rounded-full cursor-pointer ${categoria == 'tudo' ?'bg-white text-[black]': 'bg-[var(--cor03)]' }`} onClick={() => Categoria('tudo')}>Tudo</div>
                <div class={` p-[5px_10px] rounded-full cursor-pointer ${categoria == 'musicas' ?'bg-white text-[black]': 'bg-[var(--cor03)]' }`} onClick={() => Categoria('musicas')}>Músicas</div>
                <div class={` p-[5px_10px] rounded-full cursor-pointer ${categoria == 'podcasts' ?'bg-white text-[black]': 'bg-[var(--cor03)]' }`} onClick={() => Categoria('podcasts')}>PodCasts</div>
              </div>

              <div class="h-[100%] w-[100%] grid grid-rows-2 grid-cols-4 gap-[5px] justify-center items-center">
                <PlayLists />
                <PlayLists />
                <PlayLists />
                <PlayLists />
                <PlayLists />
                <PlayLists />
                <PlayLists />
                <PlayLists />

              </div>

            </div>

            <div class="py-[60px] px-[26px]">
              <div class="flex flex-col">
                <div class="flex justify-between items-center">
                  <h1 class="text-[30px] text-[white] font-bold">
                    {msg}
                  </h1>
                  <h1 class="text-[16px] cursor-pointer hover:underline">Mostar tudo</h1>
                </div>

              </div>
              
            </div>

          </div>
        </Layout>

    </>
  )
}

export default Home