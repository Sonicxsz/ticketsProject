import { useEffect, useState } from "react"
import { IticketData } from "./Types"


export const useApp = () => {
    const [tickets, setTickets] = useState<Array<IticketData>>([])
    const [filters, setFilters] = useState<string[]>(['-1'])
  
    const changeFilter = (val:string, only?:boolean) => {
      if(only === true){
        setFilters([val])
      }else{
        if(filters.includes(val)){
          setFilters(state => state.filter(i => i !== val))
        }else{
          setFilters(state => [...state, val])
        }
      }
     
      
    }
    useEffect(() => {
      fetch('http://localhost:8000/tickets')
      .then(data => data.json())
      .then((data: IticketData[]) => setTickets(data))
  
    }, [])
  
  
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
        changeFilter,
        tickets,
        filters
    }
}