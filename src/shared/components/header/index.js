import React from 'react'
import './header.scss'
import Logo from '../../../assests/images/logo.svg'
import downArrowImage from '../../../assests/images/down-black.svg'
import MobileImage from '../../../assests/images/mobile-header.svg'

export default function Header() {
    return (
        <div className='header-section'>
            <div className='container'>
                <div className='header-flex'>
                    <div className='header-item-1'>
                        <div className='header-logo'>
                            <img src={Logo} alt='Logo'></img>
                        </div>

                        <div className='header-menu'>
                            <div className='header-menu-flex'>
                                <a>Product</a>
                                <div className='header-image'>
                                    <img src={downArrowImage} alt='downArrowImage'></img>
                                </div>
                            </div>

                            <div className='header-menu-flex'>
                                <a>Consultants</a>
                                <div className='header-image'>
                                    <img src={downArrowImage} alt='downArrowImage'></img>
                                </div>
                            </div>

                            <a>Resources</a>
                            <a>PricingUse cases</a>
                        </div>
                    </div>
                    <div className='header-item-2'>
                        <span>Login</span>
                        <div className='header-btn'>
                            <button>Get Started</button>
                        </div>
                    </div>

                    <div className='header-mobile-logo'>
                        <img src={MobileImage} alt='MobileImage'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
