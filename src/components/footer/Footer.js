/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (

    <footer className="footer">
    <div className="footer-info">
        <h1>Trilhas-TOP</h1>
        <p>Brasil | Manaus- AM</p>
    </div>
    <div className="footer-contact">
        <h3>Desenvolvedoras Web</h3>
        <p>Isbeli Ramirez</p>
        <p>Jani Exaez</p>
        <p>Rina Velazquez</p>
        <p>Raquel Velazquez</p>
    </div>

    <div className="footer-sns">
        <div className="copyright"> © Copyright 2021</div>
    
        <div className="sns-links">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
            
            <i className="fab fa-twitter twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
        </a>
        </div>
    </div>
    </footer>
);
};

export default Footer
