import './info.css'


interface InfoProps{
    city: string,
    date: string
}

function Info({city, date}:InfoProps) {
  return (
    <div className='info-wrapper'>
        <h3>{city}</h3>
        <span>{date}</span>
    </div>
  )
}

export default Info