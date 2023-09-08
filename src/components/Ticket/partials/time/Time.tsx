import './Time.css'


function Time({time}:{
  time: string
}) {
  return (
    <div className='time'>
        {time}
    </div>
  )
}

export default Time