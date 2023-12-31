import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title"></h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href='https://github.com/jchoi2077' className='home__social-icon' target='_blank'>
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/apljc93/' className='home__social-icon' target='_blank'>
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                </div>

                <span className="footer__copy">&#169; 2023</span>
            </div>
        </footer>
    )
}

export default Footer