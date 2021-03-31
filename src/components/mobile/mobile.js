import React, { useRef, useEffect } from 'react';
import './mobile.scss';
import logo from '../../images/logo.svg';
import heroMobile from '../../images/hero-mobile.jpg';
import iconArrow from '../../images/icon-arrow.svg';
import iconError from '../../images/icon-error.svg';

function Mobile() {
    const email = useRef();
    const formMobile = useRef();
    const errorMessage = useRef();
    const errorIcon = useRef();

    useEffect(() => {
        formMobile.current.addEventListener("submit", e => {
            const emailInput = email.value;
            if (emailInput) {
                if (!(emailInput.includes("@") && emailInput.includes("."))) {
                    e.preventDefault();
                    errorMessage.current.classList.add("errorViewMobile");
                    errorIcon.current.classList.add("iconViewMobile");
                }
            } else {
                e.preventDefault();
                errorMessage.current.classList.add("errorViewMobile");
                errorIcon.current.classList.add("iconViewMobile");
            }
        });

        email.current.addEventListener("click", e => {
            errorMessage.current.classList.remove("errorViewMobile");
            errorIcon.current.classList.remove("iconViewMobile");
        })
    })

    return (
        <div id="mobileContainer">
            <img id="logo" src={logo} alt="logo"/>
            <img id="heroMobile" src={heroMobile} alt="hero"/>
            <div id="contentMobile">
                <h1 id="comingSoonMobile">
                    <span>We're</span> <br/>
                    coming <br/>
                    soon <br/>
                </h1>
                <p id="messageMobile">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <form ref={formMobile} id="formMobile">
                    <input
                        ref={email}
                        id="emailMobile"
                        type="text"
                        placeholder="Email Address" />
                    <button type="submit"><img src={iconArrow} alt="button arrow"/></button>
                    <img ref={errorIcon} className="errorIconMobile" src={iconError} alt="error"/>
                </form>
                <div ref={errorMessage} className="errorMessageMobile">
                    <p>Please provide a valid email</p>
                </div>
            </div>

            <footer>
                <p className="attributionMobile">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                    Coded by <a href="https://zethdeluna.com" target="_blank" rel="noreferrer">Zeth De Luna</a>.
                </p>
            </footer>
        </div>
    )
}

export default Mobile;