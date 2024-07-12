import React from 'react'
import './hairstyle.scss'

export default function Hairstyle() {
    return (
        <div className='hairstyle-section'>
            <div className='container'>
                <div className='hairstyle-grid'>
                    <div className='hairstyle-item'>
                        <h3>Suspendisse Sami <span>adia poces imperdiet</span></h3>
                        <p>Nunc finibus, nisl non auctor maximus, tellus orci tincidunt diam,
                            vel interdum ex ligula id urna. Aliquam lacus lacus
                        </p>
                    </div>
                    <div className='hairstyle-item'>
                        <div className='hairstyle-card-grid'>
                            <div className='hairstyle-card-item'>
                                <h4>250M+</h4>
                                <p>Nunc finibus, nisl non auctor maximus tellus orci.</p>
                            </div>

                            <div className='hairstyle-card-item'>
                                <h4>90%</h4>
                                <p>Nunc finibus, nisl non auctor maximus tellus orci.</p>
                            </div>

                            <div className='hairstyle-card-item'>
                                <h4>135+</h4>
                                <p>Nunc finibus, nisl non auctor maximus tellus orci.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
