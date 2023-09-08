import {FaPlane} from 'react-icons/fa'
import './transfer.css'



function Transfer({titleByCount, count}: {
  count: number;
  titleByCount: string;
}) {
  return (
    <div className='transfer-wrapper'>
        <div className='transfer-title'>{count} {titleByCount}</div>
        <div className='transfer-logo'>
            <div className='transfer-line'></div>
            <FaPlane size={'20px'} color='rgb(98, 97, 97)' />
        </div>

    </div>
  )
}

export default Transfer