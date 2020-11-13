import React from 'react';
import logo from './images/logo.png';
import './Footer.css';
import {
    FaYoutube,
    FaTwitter,
    FaLinkedinIn,
} from 'react-icons/fa';


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="footer-item-a">
                        <img src={logo} alt="logo.png" />
                    </div>
                    <div className="footer-item-b">
                        <a
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </a>
                        <a
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaTwitter />
                        </a>
                        <a
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;