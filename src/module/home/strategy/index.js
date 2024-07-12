import React from 'react'
import './strategy.scss'

export default function Strategy() {
  return (
    <div className='strategy-section'>
        <div className='container'>
            <div className='strategy-heading'>
                <h3>Build your <span>ESG strategy today</span></h3>
                <p>We provide the best service, many features and services for you so you will be amazed.</p>
            </div>

            <div className='strategy-grid'>
                <div className='strategy-item'>
                    <div className='strategy-color'></div>
                    <h4>Assess</h4>
                    <p>Rate and benchmark the resiliency of your supply chain through our automated resiliency scoring.</p>
                </div>

                <div className='strategy-item'>
                    <div className='strategy-color'></div>
                    <h4>Analyse</h4>
                    <p>In-depth sustainability analysis and ESG reporting on your suppliers.</p>
                </div>

                <div className='strategy-item'>
                    <div className='strategy-color'></div>
                    <h4>Enable</h4>
                    <p>Confident reporting your supply chain impact.</p>
                </div>

                <div className='strategy-item'>
                    <div className='strategy-color'></div>
                    <h4>Enhance</h4>
                    <p>Enhancing the sustainability of your suppliers.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
