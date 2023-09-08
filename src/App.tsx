import {ReactComponent as PlaneIcon} from './assets/svg/planeIcon.svg'
import { useApp } from './useApp';
import Loader from './components/Loader/Loader';
import CardTIcket from './components/Ticket/CardTIcket';
import './App.css';
import Filter from './components/Filter/Filter';



function App() {
  const {filteredTicket, changeFilterOptions, filters, loading } = useApp()

  if(loading){
    return <div className='loader-wrapper'>
      <Loader />
    </div>
  }

  return (
    <div className="App">
        <div className='app-logo'>
          <PlaneIcon fill='#fff' width={'35px'} />
        </div>
        <div className='app-content'>
            <Filter  activeFilterOptions={filters} changeFilter={changeFilterOptions}/>
              <div className='app-tickets'>
                  {filteredTicket && filteredTicket.map((i,ind) => <CardTIcket key={ind} data={i}/>)}
              </div>
        </div>
    </div>
  );
}

export default App;
