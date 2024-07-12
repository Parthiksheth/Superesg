import React from 'react'
import './footer.scss'
import FooterImage from '../../../assests/images/footer-logo.svg'
import FooterSocial1 from '../../../assests/images/white-twitter.svg'
import FooterSocial2 from '../../../assests/images/white-facebook.svg'
import FooterSocial3 from '../../../assests/images/white-insta.svg'
import FooterSocial4 from '../../../assests/images/white-message.svg'

export default function Footer() {
    return (
        <div className='footer-section'>
            <div className='footer-main'>
                <div className='container'>
                    <div className='footer-grid'>
                        <div className='footer-item-1'>
                            <div className='footer-logo'>
                                <img src={FooterImage} alt='FooterImage'></img>
                            </div>
                            <div className='footer-social-media-flex'>
                                <img src={FooterSocial1} alt='FooterSocial1'></img>
                                <img src={FooterSocial2} alt='FooterSocial2'></img>
                                <img src={FooterSocial3} alt='FooterSocial3'></img>
                                <img src={FooterSocial4} alt='FooterSocial4'></img>
                            </div>
                        </div>
                        <div className='footer-item-2'>
                            <div className='footer-menu-flex'>
                                <div className='footer-menu-item'>
                                    <h5>Product</h5>
                                    <a>Shared Inbox</a>
                                    <a>Knowledge Base</a>
                                    <a>Live Chat</a>
                                    <a>Messaging</a>
                                    <a>Costumer Management</a>
                                    <a>Reporting</a>
                                    <a>Integrations</a>
                                </div>

                                <div className='footer-menu-item'>
                                    <h5>Consultants</h5>
                                    <a>Shared Inbox</a>
                                    <a>Knowledge Base</a>
                                    <a>Live Chat</a>
                                    <a>Messaging</a>
                                    <a>Costumer Management</a>
                                    <a>Reporting</a>
                                    <a>Integrations</a>
                                </div>

                                <div className='footer-menu-item'>
                                    <h5>Resources</h5>
                                    <a>Shared Inbox</a>
                                    <a>Knowledge Base</a>
                                    <a>Live Chat</a>
                                    <a>Messaging</a>
                                    <a>Costumer Management</a>
                                    <a>Reporting</a>
                                    <a>Integrations</a>
                                </div>

                                <div className='footer-menu-item'>
                                    <h5>Company</h5>
                                    <a>Shared Inbox</a>
                                    <a>Knowledge Base</a>
                                    <a>Live Chat</a>
                                    <a>Messaging</a>
                                    <a>Costumer Management</a>
                                    <a>Reporting</a>
                                    <a>Integrations</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-last-line'>
                <div className='container'>
                    <div className='footer-last-line-flex'>
                        <a>© 2022 Superesg</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                        <a>Security policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
