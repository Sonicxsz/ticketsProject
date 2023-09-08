import './CardTicket.css'
import AirLineLogo from '../AirLineLogo/AirLineLogo'
import Time from './partials/time/Time'
import Info from './partials/info/Info'
import Transfer from './partials/transfer/Transfer'

import { getStopsTitle, getTransormedDate } from '../../utils/transformsData'
import { IticketData } from '../../Types'


function CardTIcket({data}:{data:IticketData}) {

  const arrivalTime = getTransormedDate(data.arrival_date)
  const departureTime = getTransormedDate(data.departure_date)

  const transferData = getStopsTitle(data.stops)

  return (
    <div className='card-ticket-wrapper'>
        <div className='card-ticket-first'>
                    <AirLineLogo />
                    <button className='btn-wrapper'>
                      <p>Купить</p>
                    <span>за {data.price} ₽</span>
    </button>
                  
        </div>
        <div className='card-ticket-second'>
            <div className='card-ticket-time'>
                <Time time={data.departure_time} />
                <Transfer count={transferData.count} titleByCount={transferData.titleByCount}/>
                <Time time={data.arrival_time} />
           </div>
            <div className='card-ticket-info'>
                <Info city={`${data.origin}, ${data.origin_name}`} date={departureTime.fullDate}/>
                <Info city={`${data.destination_name}, ${data.destination}`} date={arrivalTime.fullDate}/>
            </div>
        </div>

    </div>
  )
}

export default CardTIcket