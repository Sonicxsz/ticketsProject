import './button.css'

interface IButtonProps {
    price: number,

}


function Button({price}: IButtonProps) {
  return (
    <div className='btn-wrapper'>
        <p>Купить</p>
        <span>за {price} ₽</span>
    </div>
  )
}

export default Button