import React from 'react'
import './featured.scss'
import FeaturedImage1 from '../../../assests/images/card-image-1.png'
import FeaturedImage2 from '../../../assests/images/card-image-2.png'
import FeaturedImage3 from '../../../assests/images/card-image-3.png'
import FeaturedImage4 from '../../../assests/images/card-image-4.png'

export default function Featured() {
    return (
        <div className='featured-section'>
            <div className='container'>
                <div className='featured-tab'>
                    <a id='font-primary'>Featured</a>
                    <a>Policies</a>
                    <a>Regulations</a>
                    <a>Carbon</a>
                </div>

                <div className='featured-grid'>
                    <div>
                        <div className='featured-item'>
                            <div className='featured-image'>
                                <img src={FeaturedImage1} alt='FeaturedImage1'></img>
                            </div>
                            <div className='featured-details'>
                                <p>Road to carbon positive impact</p>
                                <div className='featured-flex'>
                                    <div className='featured-color'></div>
                                    <span>@deloitte</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='featured-item'>
                            <div className='featured-image'>
                                <img src={FeaturedImage2} alt='FeaturedImage2'></img>
                            </div>
                            <div className='featured-details'>
                                <p>Road to carbon positive impact</p>
                                <div className='featured-flex'>
                                    <div className='featured-color'></div>
                                    <span>@deloitte</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='featured-item'>
                            <div className='featured-image'>
                                <img src={FeaturedImage3} alt='FeaturedImage3'></img>
                            </div>
                            <div className='featured-details'>
                                <p>Road to carbon positive impact</p>
                                <div className='featured-flex'>
                                    <div className='featured-color'></div>
                                    <span>@deloitte</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='featured-item'>
                            <div className='featured-image'>
                                <img src={FeaturedImage4} alt='FeaturedImage4'></img>
                            </div>
                            <div className='featured-details'>
                                <p>Road to carbon positive impact</p>
                                <div className='featured-flex'>
                                    <div className='featured-color'></div>
                                    <span>@deloitte</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
