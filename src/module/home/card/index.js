import React from 'react'
import './card.scss'
import TrueImage from '../../../assests/images/check-true-icon.svg'

export default function Card() {
    return (
        <div className='card-section'>
            <div className='container'>
                <div className='card-grid'>

                    <div >
                        <div className='card-item'>
                            <div className='card-image'>
                                <img src={TrueImage} alt='TrueImage'></img>
                            </div>
                            <div className='card-text'>
                                <p><span>Nunc finibus nis.</span> l non auctor maximus tellus orci tincidunt diam.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='card-item'>
                            <div className='card-image'>
                                <img src={TrueImage} alt='TrueImage'></img>
                            </div>
                            <div className='card-text'>
                                <p><span>Nunc finibus nis.</span> l non auctor maximus tellus orci tincidunt diam.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='card-item'>
                            <div className='card-image'>
                                <img src={TrueImage} alt='TrueImage'></img>
                            </div>
                            <div className='card-text'>
                                <p><span>Nunc finibus nis.</span> l non auctor maximus tellus orci tincidunt diam.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
