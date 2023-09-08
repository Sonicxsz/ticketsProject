
import { filtersOptions, currencyOptions } from '../../constants/constans'
import CurrencyPanel from './partials/CurrencyPanel/CurrencyPanel'
import OptionsPanel from './partials/OptionsPanel/OptionsPanel'
import './Filter.css'
import React from 'react'


interface FilterProps {
        changeFilter: (val:string, only?:boolean ) => void,
        activeFilterOptions: string[]
}


function Filter({
  changeFilter,
  activeFilterOptions,
}:FilterProps) {


  return  (
      <div className='filters-wrapper'>
        <CurrencyPanel title="Валюта" options={currencyOptions} />
        <OptionsPanel title="Колличество пересадок" options={filtersOptions} activeFilterOptions={activeFilterOptions} changeFilterOptions={changeFilter} />
    </div>
)
   
  
}

export default React.memo(Filter)