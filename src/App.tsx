import { useApp } from './useApp';
import CurrencyPanel from './components/currencyPanel/CurrencyPanel';
import Filter from './components/filter/Filter';
import './App.css';
import CardTIcket from './components/Ticket/CardTIcket';
import { currensyOptions, filtersOptions } from './constants/constans';



function App() {
  const {  filteredTicket, changeFilter, filters} = useApp()

  
  return (
    <div className="App">
        <div className='filters'>
          <CurrencyPanel title="Валюта" options={currensyOptions} />
          <Filter title="Колличество пересадок" options={filtersOptions} filters={filters} changeFilter={changeFilter} />
        </div>
        <div className='tickets-wrapper'>
            {filteredTicket && filteredTicket.map((i,ind) => <CardTIcket key={ind} data={i}/>)}
        </div>
    </div>
  );
}

export default App;
