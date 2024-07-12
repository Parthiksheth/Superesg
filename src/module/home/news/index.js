import React from 'react'
import './news.scss'
import NewsImage1 from '../../../assests/images/news-1.png'
import NewsImage2 from '../../../assests/images/news-2.png'
import NewsImage3 from '../../../assests/images/news-3.png'

export default function News() {
    return (
        <div className='news-section'>
            <div className='container'>
                {/* <div className='news-flex'> */}
                    <div className='news-heading'>
                        <h3>Suspendisse <span>Sami imperdiet</span></h3>
                        <p>Nunc finibus, nisl non auctor maximus, tellus orci tincidunt diam, vel interdum ex ligula id urna. Aliquam lacus lacus</p>
                    </div>
                {/* </div> */}

                <div className='news-grid'>
                    <div className='news-item'>
                        <div className='news-image'>
                            <img src={NewsImage1} alt='NewsImage1'></img>
                        </div>
                        <div className='news-details'>
                            <span>FINTECH</span>
                            <p>Vitae gravida mauris ligula ultrices diam. Nam in justo eget ex tristique...</p>
                            <h4>Published 27 March 2022</h4>
                        </div>
                    </div>

                    <div className='news-item'>
                        <div className='news-image'>
                            <img src={NewsImage2} alt='NewsImage2'></img>
                        </div>
                        <div className='news-details'>
                            <span>FINTECH</span>
                            <p>Vitae gravida mauris ligula ultrices diam. Nam in justo eget ex tristique...</p>
                            <h4>Published 27 March 2022</h4>
                        </div>
                    </div>

                    <div className='news-item'>
                        <div className='news-image'>
                            <img src={NewsImage3} alt='NewsImage3'></img>
                        </div>
                        <div className='news-details'>
                            <span>FINTECH</span>
                            <p>Vitae gravida mauris ligula ultrices diam. Nam in justo eget ex tristique...</p>
                            <h4>Published 27 March 2022</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
