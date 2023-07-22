import { useEffect, useState } from "react"
import Sec from "../components/sec"






export default function Countries() {

    const [countries, setcountries] = useState([])
    const [search , setsearch]= useState('')
  

    const regions =[

        {
            name : "Europe"
        },
        {
            name : "Asia"
        },
        {
            name : "Africa"
        },
        {
            name : "Oceania"
        },
        {
            name : "America"
        }

       

    ]

    useEffect(() => {

        const All = async () => {

            const res = await fetch('https://restcountries.com/v3.1/all')
            const result = await res.json()
            setcountries(result)
        }

        All()

    }, [])



    async function searchInp(){

        const data = await fetch(`https://restcountries.com/v3.1/name/${search}`)
        const res = await data.json()
        setcountries(res)
    }


    async function select(event){

        const data = await fetch(`https://restcountries.com/v3.1/region/${event}`)
        const res = await data.json()
        setcountries(res)
    }

    function handle(e){
        e.preventDefault()
        searchInp()
        
        
    }

    function filter(e){
        e.preventDefault()
        select()
    }



    return (

        <>
            {!countries ? <h1 className=" load dark:text-white mt-5"> LOADING ...</h1> :
                <section className="container mx-auto flex flex-wrap justify-around">

                    <div  className="inp w-[100%] flex flex-wrap justify-around items-center">

                        <form onSubmit={handle} >

                            <input value={search} onChange={(e)=>setsearch(e.target.value)} className="outline-none h-[35px] pl-2 rounded-md shadow	mt-3 mb-2" type="text" name="search" id="search" placeholder="Search your country name" />

                        </form>


                        <form onSubmit={filter}>

                            <select value={regions.name}  onChange={(e)=>select(e.target.value)}  className="w-[150px] h-[35px] outline-none shadow rounded-md mt-3 mb-2" name="region" id="region">
                                
                                {
                                    
                                    regions.map((x)=>(
                                        <option value={x.name}>{x.name}</option>
                                    ))
                                }
                              
                            </select>


                        </form>




                    </div>
                    

                    {
                        countries.map((count) => (
                            <Sec key={count.name.common} {...count} />
                        ))

                    }


                </section>}



        </>

    )
}