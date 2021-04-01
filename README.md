# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshots

![desktop screenshot](https://raw.githubusercontent.com/zethdeluna/base-apparel-coming-soon/main/src/images/base-apparel-desktop-screenshot.png)
<img src="https://raw.githubusercontent.com/zethdeluna/base-apparel-coming-soon/main/src/images/base-apparel-mobile-screenshot.png" width="350">

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (SASS)
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

As I worked on this challenge, my favorite learning experience was figuring out how to implement a custom email validation message. At first, I built the "email validator" using vanilla JavaScript:

```js
// Handle invalid email inputs
const email = document.getElementById("email");
const form = document.getElemenyById("form");
const errorMessage = document.querySelector(".errorMessage");
const errorIcon = document.querySelector(".errorIcon");

form.addEventListener("submit", e => {
    const emailInput = email.value;
    if (emailInput) {
        if (!(emailInput.includes("@") && emailInput.includes("."))) {
            e.preventDefault();
            errorMessage.classList.add("errorView");
            errorIcon.classList.add("iconView");
        }
    } else {
        e.preventDefault();
        errorMessage.classList.add("errorView");
        errorIcon.classList.add("iconView");
    }
});

// Remove error message when the user clicks into the input box
email.addEventListener("click", e => {
    errorMessage.classList.remove("errorView");
    errorIcon.classList.remove("iconView");
});
```

What I did was I placed the error message and icon where they should appear if there is an invalid input, but hid those elements using CSS:

```css
.errorMessage, .errorIcon {
    opacity: 0;
    transition: all 500ms ease;
}

.errorView, .iconView {
    opacity: 1;
}
```

Then, the JavaScript code would determine if the error message should be shown or not based on the conditions and the event listeners.

Since I used React to build the website, I converted the above JavaScript using React Hooks, which you will be able to find in my source code. The rest of the project relied mainly on basic knowledge of HTML and CSS, so I had lots of fun trying to figure out this custom email validation method.

### Useful resources

- [Developing Responsive Layouts with React Hooks](https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/) - To make this website responsive, I opted to create separate components for the desktop and mobile versions. This amazing article helped me improve my method for choosing which website (desktop or mobile) to render based on the device's screen width. I really liked this method and will most likely use it going forward.

## Author

- Website - [Zeth De Luna](https://zethdeluna.com)
- Frontend Mentor - [@yzethdeluna](https://www.frontendmentor.io/profile/zethdeluna)