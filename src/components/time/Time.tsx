import './Time.css'

interface ITimeProps{
    time: string
}


function Time({time}:ITimeProps) {
  return (
    <div className='time'>
        {time}
    </div>
  )
}

export default Time