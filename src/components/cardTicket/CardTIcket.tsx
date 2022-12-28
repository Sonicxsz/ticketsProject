import './CardTicket.css'
import AirLineLogo from '../AirLineLogo/AirLineLogo'
import Button from '../button/button'
import Time from '../time/Time'
import Info from '../info/Info'
import Transfer from '../transfer/Transfer'
import { IticketData } from '../../App'
import { getTransormDate } from '../../utils/transformsData'

interface CardTIcketProps {
  data: IticketData
}

function CardTIcket({data}:CardTIcketProps) {

  const {year: arrYear, day: arrDay, month: arrMontn, dayString: arrDayStr} = getTransormDate(data.arrival_date)
  const {year: depYear, day: depDay, month: depMontn, dayString: depDayStr} = getTransormDate(data.departure_date)

 
  return (
    <div className='card-ticket-wrapper'>
        <div className='card-ticket-first'>
                    <AirLineLogo />
                    <Button price={data.price} />
        </div>
        <div className='card-ticket-second'>
            <div className='card-ticket-time'>
                <Time time={data.departure_time} />
                <Transfer stops={data.stops}/>
                <Time time={data.arrival_time} />
           </div>
            <div className='card-ticket-info'>
                <Info city={`${data.origin}, ${data.origin_name}`} date={`${depDay} ${depMontn} ${depYear}, ${depDayStr}`}/>
                <Info city={`${data.destination_name}, ${data.destination}`} date={`${arrDay} ${arrMontn} ${arrYear}, ${arrDayStr}`}/>
            </div>
        </div>

    </div>
  )
}

export default CardTIcket