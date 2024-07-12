import React from 'react'
import './haircut.scss'
import MoreImage from '../../../assests/images/more.svg'
import RightArrowImage from '../../../assests/images/right-icon.svg'
import Marquee from "react-fast-marquee";

export default function Haircut() {
    return (
        <div className='haircut-section'>
            <div className='container'>
                <div className='haircut-heading'>
                    <h3>Suspendisse <span>Sami imperdiet</span></h3>
                    <p>Nunc finibus, nisl non auctor maximus, tellus orci tincidunt diam, vel interdum ex
                        ligula id urna. Aliquam lacus lacus</p>
                </div>


                <Marquee speed={80}>
                    <div className='haircut-grid'>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>


                    </div>
                </Marquee>


                <Marquee >
                    <div className='haircut-grid'>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>

                        <div className='haircut-item'>
                            <div className='haircut-color'></div>
                            <h4>Health</h4>
                            <p>551 Registered</p>
                            <div className='haircut-flex'>
                                <img src={MoreImage} alt='MoreImage'></img>
                                <span>See Company</span>
                            </div>
                        </div>
                    </div>
                </Marquee>

                <div className='haircut-btn-flex'>
                    <div className='haircut-btn'>
                        <button>See all industries</button>
                        <img src={RightArrowImage} alt='RightArrowImage'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
