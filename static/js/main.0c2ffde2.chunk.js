(this["webpackJsonpbase-apparel-coming-soon-v2"]=this["webpackJsonpbase-apparel-coming-soon-v2"]||[]).push([[0],[,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),c=r(4),s=r.n(c),o=(r(9),r(3)),a=(r(10),r(11),r.p+"static/media/logo.bfe35add.svg"),l=r.p+"static/media/hero-desktop.659bc9a7.jpg",d=r.p+"static/media/icon-error.77009af7.svg",b=r.p+"static/media/icon-arrow.4b3d2d93.svg",j=r(0);var u=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useRef)();return Object(n.useEffect)((function(){t.current.addEventListener("submit",(function(t){var n=e.value;n&&n.includes("@")&&n.includes(".")||(t.preventDefault(),r.current.classList.add("errorView"),i.current.classList.add("iconView"))})),e.current.addEventListener("click",(function(e){r.current.classList.remove("errorView"),i.current.classList.remove("iconView")}))})),Object(j.jsxs)("div",{id:"container",children:[Object(j.jsxs)("div",{id:"main",children:[Object(j.jsxs)("div",{id:"content",children:[Object(j.jsx)("img",{id:"logo",src:a,alt:"base apparel logo"}),Object(j.jsxs)("h1",{id:"coming-soon",children:[Object(j.jsx)("span",{children:"We're"})," ",Object(j.jsx)("br",{}),"coming ",Object(j.jsx)("br",{}),"soon"]}),Object(j.jsx)("p",{id:"message",children:"Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."}),Object(j.jsxs)("form",{name:"email-form",id:"form",ref:t,children:[Object(j.jsx)("input",{ref:e,id:"email",name:"email",type:"text",placeholder:"Email Address"}),Object(j.jsx)("button",{type:"submit",name:"submit",children:Object(j.jsx)("img",{src:b,alt:"button arrow"})}),Object(j.jsx)("img",{className:"errorIcon",ref:i,src:d,alt:"error icon"})]}),Object(j.jsx)("p",{className:"errorMessage",ref:r,children:"Please provide a valid email"})]}),Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{className:"attribution",children:["Challenge by ",Object(j.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by ",Object(j.jsx)("a",{href:"https://zethdeluna.com",target:"_blank",rel:"noreferrer",children:"Zeth De Luna"}),"."]})})]}),Object(j.jsx)("img",{id:"hero",src:l,alt:"hero"})]})},h=(r(13),r.p+"static/media/hero-mobile.1afd055b.jpg");var f=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useRef)();return Object(n.useEffect)((function(){t.current.addEventListener("submit",(function(t){var n=e.value;n&&n.includes("@")&&n.includes(".")||(t.preventDefault(),r.current.classList.add("errorViewMobile"),i.current.classList.add("iconViewMobile"))})),e.current.addEventListener("click",(function(e){r.current.classList.remove("errorViewMobile"),i.current.classList.remove("iconViewMobile")}))})),Object(j.jsxs)("div",{id:"mobileContainer",children:[Object(j.jsx)("img",{id:"logo",src:a,alt:"logo"}),Object(j.jsx)("img",{id:"heroMobile",src:h,alt:"hero"}),Object(j.jsxs)("div",{id:"contentMobile",children:[Object(j.jsxs)("h1",{id:"comingSoonMobile",children:[Object(j.jsx)("span",{children:"We're"}),Object(j.jsx)("br",{}),"coming",Object(j.jsx)("br",{}),"soon",Object(j.jsx)("br",{})]}),Object(j.jsx)("p",{id:"messageMobile",children:"Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."}),Object(j.jsxs)("form",{ref:t,id:"formMobile",children:[Object(j.jsx)("input",{ref:e,id:"emailMobile",type:"text",placeholder:"Email Address"}),Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("img",{src:b,alt:"button arrow"})}),Object(j.jsx)("img",{ref:i,className:"errorIconMobile",src:d,alt:"error"})]}),Object(j.jsx)("div",{ref:r,className:"errorMessageMobile",children:Object(j.jsx)("p",{children:"Please provide a valid email"})})]}),Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{className:"attributionMobile",children:["Challenge by ",Object(j.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by ",Object(j.jsx)("a",{href:"https://zethdeluna.com",target:"_blank",rel:"noreferrer",children:"Zeth De Luna"}),"."]})})]})},m=Object(n.createContext)({}),O=function(e){var t=e.children,r=Object(n.useState)(window.innerWidth),i=Object(o.a)(r,2),c=i[0],s=i[1],a=Object(n.useState)(window.innerHeight),l=Object(o.a)(a,2),d=l[0],b=l[1],u=function(){s(window.innerWidth),b(window.innerHeight)};return Object(n.useEffect)((function(){return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}}),[]),Object(j.jsx)(m.Provider,{value:{width:c,height:d},children:t})},x=function(){return function(){var e=Object(n.useContext)(m);return{width:e.width,height:e.height}}().width<950?Object(j.jsx)(f,{}):Object(j.jsx)(u,{})};var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O,{children:Object(j.jsx)(x,{})})})},g=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),g()}],[[14,1,2]]]);
//# sourceMappingURL=main.0c2ffde2.chunk.js.map