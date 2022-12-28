import './CurrencyPanel.css'
import { useState } from 'react'
const btn = ['RUB', 'USD', 'EUR']


function CurrencyPanel() {
    const [activeBtn, setActiveBtn] = useState(0)

    const handleChangeActive = (ind:number) => {
            setActiveBtn(ind)
    }
  return (
    <div className='currency-wrapper'>
        <div className='currency-title'>Валюта</div>
        <div className='currency-btns'>
            {btn.map((i, ind) => {
                return <button onClick={() => handleChangeActive(ind)} className={ind === activeBtn ? 'currency-btn currency-btn-active' : 'currency-btn'}>{i}</button>
            })}
        
        </div>

    </div>
  )
}

export default CurrencyPanel