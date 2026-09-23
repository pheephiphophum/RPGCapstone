import supabase from '../services/supabase'
import { useEffect, useState } from 'react'
import { getCharacter } from '../services/apiCoconuts'
import '../styles/roomOne.css'
import '../styles/statBox.css'



function Stats({ name, health, attack, defense, level}) {
  const initState = {
        name: name || "",
        health: health || "",
        attack: attack || "",
        defense: defense || "",
        level: level || ""
    }

  const [data, setData] = useState(initState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await getCharacter(1)
        setData(response)
      } catch (error){
        console.log(error)
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  
  if(loading) return <p>Loading...</p>
  console.log(data, 'i have data')
  


    return(
        <>
            <div>
                <form>
                    <h3>FART{name}</h3>
                    <p>Level:{data.level}</p>
                    <p>HP:</p>
                    <p>Atk:</p>
                    <p>Def:</p>
                </form>
            </div>
        </>
    )
}

export default Stats