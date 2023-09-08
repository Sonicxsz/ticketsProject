import { useCallback, useEffect, useState } from "react"
import { IticketData } from "./types/Types"


export const useApp = () => {
    const [tickets, setTickets] = useState<Array<IticketData>>([])
    const [filters, setFilters] = useState<string[]>(['-1'])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
      setLoading(true)
      fetch('http://localhost:8000/tickets')
      .then(data => data.json())
      .then((data: IticketData[]) =>{
        setTimeout(() => {
          setTickets(data)
          setLoading(false)
       }, 1200)
      })
  
    }, [])
    
    const changeFilterOptions = useCallback((val:string, only?:boolean) => {
      if(only === true){
        setFilters([val])
      }else{
        if(filters.includes(val)){
          setFilters(state => state.filter(i => i !== val))
        }else{
          setFilters(state => [...state, val])
        }
      }
    }, [filters])
  
  
    let filteredTicket = tickets.filter(i => {
      if(filters.includes('-1')){
        return i
      }
      if(filters.includes(i.stops.toString())){
        return i
      }   
    })
  
    filteredTicket = filteredTicket.sort((a,b) => a.price - b.price)
    


    return {
        filteredTicket,
        changeFilterOptions,  
        filters,
        loading
    }
}
