import React, { useRef, useEffect } from 'react';
import './desktop.scss';
import logo from '../../images/logo.svg';
import heroDesktop from '../../images/hero-desktop.jpg';
import iconError from '../../images/icon-error.svg';
import iconArrow from '../../images/icon-arrow.svg'

function Desktop() {
    const email = useRef();
    const formRef = useRef();
    const errorMessage = useRef();
    const errorIcon = useRef();

    useEffect(() => {
        formRef.current.addEventListener("submit", e => {
            const emailInput = email.value;
            if (emailInput) {
                if (!(emailInput.includes("@") && emailInput.includes("."))) {
                    e.preventDefault();
                    errorMessage.current.classList.add("errorView");
                    errorIcon.current.classList.add("iconView");
                }
            } else {
                e.preventDefault();
                errorMessage.current.classList.add("errorView");
                errorIcon.current.classList.add("iconView")
            }
        })

        email.current.addEventListener("click", e => {
            errorMessage.current.classList.remove("errorView");
            errorIcon.current.classList.remove("iconView");
        })
    })

    return (
        <div id="container">
            <div id="main">
                <div id="content">
                    <img id="logo" src={logo} alt="base apparel logo"/>
                    <h1 id="coming-soon">
                    <span>We're</span> <br/>
                    coming <br/>
                    soon
                    </h1>
                    <p id="message">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                    <form name="email-form" id="form" ref={formRef}>
                    <input 
                        ref={email}
                        id="email"
                        name="email"
                        type="text" 
                        placeholder="Email Address" />
                    <button type="submit" name="submit"><img src={iconArrow} alt="button arrow"/></button>
                    <img className="errorIcon" ref={errorIcon} src={iconError} alt="error icon"/>
                    </form>
                    <p className="errorMessage" ref={errorMessage}>Please provide a valid email</p>
                </div>

                <footer>
                    <p className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                    Coded by <a href="https://zethdeluna.com" target="_blank" rel="noreferrer">Zeth De Luna</a>.
                    </p>
                </footer>
            </div>
            <img id="hero" src={heroDesktop} alt="hero"/>
        </div>
    )
}

export default Desktop;