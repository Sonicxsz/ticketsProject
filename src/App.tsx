import CardTIcket from './components/cardTicket/CardTIcket';
import { useState, useEffect } from 'react';
import CurrencyPanel from './components/currencyPanel/CurrencyPanel';
import Filter from './components/filter/Filter';
import './App.css';

export interface IticketData {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}



function App() {
  const [tickets, setTickets] = useState<[] | IticketData[]>([])
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

  return (
    <div className="App">
    <div className='filters'>
      <CurrencyPanel />
      <Filter filters={filters} changeFilter={changeFilter} />
    </div>
    <div className='tickets-wrapper'>
     {filteredTicket.length > 0 && filteredTicket.map((i,ind) =>{
      return <CardTIcket key={ind} data={i}/>
     }) }
    </div>
    </div>
  );
}

export default App;
