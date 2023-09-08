import './CurrencyPanel.css'
import { useState } from 'react'
import cn from 'classnames'

function CurrencyPanel({title, options}:{
  title:string,
  options: string[]
}) {
    const [activeBtn, setActiveBtn] = useState(0)

    const handleChangeActive = (ind:number) => {
            setActiveBtn(ind)
    }
  return (
    <div className='currency-wrapper'>
        <div className='currency-title'>{title}</div>
        <div className='currency-btns'>
            {
              options.map((i, ind) => {
                return <button onClick={() => handleChangeActive(ind)} className={cn('currency-btn', ind === activeBtn && ' currency-btn-active')}>{i}</button>
              })
            }
          </div>
          

    </div>
  )
}

export default CurrencyPanel