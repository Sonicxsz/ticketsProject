import React from 'react'
import { FilterOptionsType } from '../../../../types/Types'
import './OptionsPanel.css'


interface OptionsProps {
  changeFilterOptions: (val:string, only?:boolean ) => void,
  activeFilterOptions: string[],
  options: FilterOptionsType[],
  title: string
}


function OptionsPanel({changeFilterOptions, activeFilterOptions, options, title}: OptionsProps) {

  const handleClickOnlyBtn = (id: string, only = false) => () => {
    changeFilterOptions(id, only)
  }

  return (
    <div className='filter-wrapper'>
        <div className='filter-title'>{title}</div>
       
        {options.map(i => {
        return   (
          <div key={i.id} className='filter-btn-wrapper'>
              <label className='w100' >
                <label className={`filter-checkbox__label ${activeFilterOptions.includes(i.id) && 'checked'}`} htmlFor={i.id}>
                {activeFilterOptions.includes(i.id) && <i className="gg-check"></i>}
                  <input checked={activeFilterOptions.includes(i.id)} onClick={handleClickOnlyBtn(i.id)}  className='filter-checkbox' type={'checkbox'}  id={i.id} />  
                </label>
                <span>{i.name}</span>
              </label>
              <button onClick={handleClickOnlyBtn(i.id, true)}  className='filter-btn-only'>ТОЛЬКО</button>
          </div>
        )
      })}
      
       
        
    </div>
)}


export default React.memo(OptionsPanel)