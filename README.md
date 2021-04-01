# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

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

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
