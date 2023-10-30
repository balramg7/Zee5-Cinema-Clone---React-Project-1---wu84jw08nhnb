import React from 'react'
import Dropdown from 'react-dropdown';
import { TbGridDots } from "react-icons/tb";


const Dropdown = () => {

    const options = [
        'Watchlist', 'Profile'
    ];
  return (
    <div>
      <Dropdown options={options} onChange={this._onSelect} placeholder={<TbGridDots />} />
    </div>
  )
}

export default Dropdown
