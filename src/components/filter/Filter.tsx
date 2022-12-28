import './Filter.css'
const filtersBtns = [
{name: 'Все', setting: '-1' },
{name: 'Без пересадок', setting:'0' },
{name: '1 пересадка', setting: '1' },
{name: '2 пересадки', setting: '2' },
{name: '3 пересадки', setting: '3'},

]

interface IFilterProps {
  changeFilter: (val:string, only?:boolean ) => void,
  filters: string[]
}

function Filter({changeFilter, filters}: IFilterProps) {
  return (
    <div className='filter-wrapper'>
        <div className='filter-title'>Колличество пересадок</div>
       
      {filtersBtns.map(i => {
        return   (
          <div key={i.setting} className='filter-btn-wrapper'>
              <label className='w100' htmlFor={i.setting}>
              <input checked={filters.includes(i.setting)} onClick={() => changeFilter(i.setting)}  className='filter-checkbox' type={'checkbox'}  id={i.setting} />
                {i.name}
              </label>
              <button onClick={(e) => {
                e.stopPropagation()
                changeFilter(i.setting, true)}}  className='filter-btn-only'>Только</button>
          </div>
        )
      })}
      
       
        
    </div>
  )
}

export default Filter