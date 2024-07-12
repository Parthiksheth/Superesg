import React from 'react'
import './herobanner.scss'
import DownArrowImage from '../../../assests/images/down-black.svg'
import SearchImage from '../../../assests/images/search.svg'

export default function Herobanner() {
  return (
    <div className='herobanner-section'>
      <div className='container'>
        <div className='herobanner-main'>
          <div className='herobanner-text'>
            <h1>
              Manage and assess <span> ESG performance</span></h1>
            <p>Nunc finibus, nisl non auctor maximus, tellus orci tincidunt diam, vel interdum ex ligula id urna. Aliquam lacus lacus</p>
          </div>

          <div className='herobanner-search-bar'>
            <div className='search-bar-grid'>
              <div className='search-bar-item-1'>
                <div className='search-dropdown'>
                  <a>Consultants</a>
                  <img src={DownArrowImage} alt='DownArrowImage'></img>
                </div>
              </div>
              <div className='search-bar-item-2'>
                <div className='search-flex'>
                  <div className='search-input'>
                    <img src={SearchImage} alt='SearchImage'></img>
                    <input type='text' placeholder='Search by name or expertise'></input>
                  </div>
                  <div className='search-btn'>
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
