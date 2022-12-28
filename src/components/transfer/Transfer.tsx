import {FaPlane} from 'react-icons/fa'
import './transfer.css'

interface ITransferProps{
    stops: number
}

const title = ['пересадок', 'пересадка', 'пересадки', 'пересадки', 'пересадки']  // тут конечно сделано так себе, нужно было сделать отдельную функ с учетом всех возможностей

function Transfer({stops}: ITransferProps) {
  return (
    <div className='transfer-wrapper'>
        <div className='transfer-title'>{stops} {title[stops]}</div>
        <div className='transfer-logo'>
            <div className='transfer-line'></div>
            <FaPlane size={'20px'} color='rgb(98, 97, 97)' />
        </div>

    </div>
  )
}

export default Transfer