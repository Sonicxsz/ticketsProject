import './info.css'

function Info({city, date}:{
  city: string,
  date: string
}) {
  return (
    <div className='info-wrapper'>
        <h3>{city}</h3>
        <span>{date}</span>
    </div>
  )
}

export default Info