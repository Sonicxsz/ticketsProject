import { FilterOptionsType } from '../../Types'
import './Filter.css'



function Filter({changeFilter, filters, options, title}: {
  changeFilter: (val:string, only?:boolean ) => void,
  filters: string[],
  options: FilterOptionsType[],
  title: string
}) {
  return (
    <div className='filter-wrapper'>
        <div className='filter-title'>{title}</div>
       
      {options.map(i => {
        return   (
          <div key={i.id} className='filter-btn-wrapper'>
              <label className='w100' >
                <label className={`filter-checkbox__label ${filters.includes(i.id) && 'checked'}`} htmlFor={i.id}>
                {filters.includes(i.id) && <i className="gg-check"></i>}
                  <input checked={filters.includes(i.id)} onClick={() => changeFilter(i.id)}  className='filter-checkbox' type={'checkbox'}  id={i.id} />  
                </label>
                <span>{i.name}</span>
              </label>
              <button onClick={(e) => {
                e.stopPropagation()
                changeFilter(i.id, true)}}  className='filter-btn-only'>ТОЛЬКО</button>
          </div>
        )
      })}
      
       
        
    </div>
  )
}

export default Filter