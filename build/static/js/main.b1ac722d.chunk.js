(this["webpackJsonpecommerce-webapp"]=this["webpackJsonpecommerce-webapp"]||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},52:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(24),i=c.n(n),r=(c(47),c(12)),o=(c(48),c(35)),l=(o.a.initializeApp({apiKey:"AIzaSyAGyUeTDRSMsUfJwhoLp8XCi6qB1qUk_24",authDomain:"ecommerce-webapp-b62ca.firebaseapp.com",projectId:"ecommerce-webapp-b62ca",storageBucket:"ecommerce-webapp-b62ca.appspot.com",messagingSenderId:"1096283623579",appId:"1:1096283623579:web:d3abea13b355216843b63e",measurementId:"G-FJJ8W2S7CG"}),o.a.auth()),j=c(18),d=c(9),u=c(39),h=c.n(u),b=c(40),m=c.n(b),O=c(27),p=c.n(O),g=(c(52),c(2)),_=Object(a.createContext)(),x=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(g.jsx)(_.Provider,{value:Object(a.useReducer)(t,c),children:s})},v=function(){return Object(a.useContext)(_)},f=c(36),N=c(21),k=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},S=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(N.a)(Object(N.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(N.a)(Object(N.a)({},e),{},{basket:[].concat(Object(f.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(f.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return a>=0?c.splice(a,1):console.warn("Can't remove product (id: ".concat(t.id,") as it's not in basket")),Object(N.a)(Object(N.a)({},e),{},{basket:c});default:return e}};var C=function(){var e=v(),t=Object(r.a)(e,1)[0],c=t.basket,a=t.user;return console.log(c),Object(g.jsxs)("nav",{className:"header",children:[Object(g.jsx)(j.b,{to:"/",className:"link",children:Object(g.jsxs)("div",{className:"icon",children:[Object(g.jsx)("span",{className:"header__logo",children:"BASKIFY "}),Object(g.jsx)(p.a,{className:"shop"})]})}),Object(g.jsxs)("div",{className:"header__search",children:[Object(g.jsx)("input",{className:"header__searchInput",type:"text"}),Object(g.jsx)(h.a,{className:"header__searchIcon"})]}),Object(g.jsxs)("div",{className:"header__nav",children:[Object(g.jsx)(j.b,{to:!a&&"/login",className:"header__link",children:Object(g.jsxs)("div",{onClick:function(){a&&l.signOut()},className:"header__option",children:[Object(g.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===a||void 0===a?void 0:a.email]}),Object(g.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(g.jsx)(j.b,{to:"/",className:"header__link",children:Object(g.jsxs)("div",{className:"header__option",children:[Object(g.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(g.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(g.jsx)(j.b,{to:"/",className:"header__link",children:Object(g.jsxs)("div",{className:"header__option",children:[Object(g.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(g.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(g.jsx)(j.b,{to:"/checkout",className:"header__link",children:Object(g.jsxs)("div",{className:"header__optionBasket",children:[Object(g.jsx)(m.a,{}),Object(g.jsx)("span",{className:"header__optionLineTwo header__BasketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})},y=(c(59),c(41));c(60);var A=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,n=e.rating,i=v(),o=Object(r.a)(i,2);Object(y.a)(o[0]);var l=o[1];return Object(g.jsxs)("div",{className:"product",children:[Object(g.jsxs)("div",{className:"product__info",children:[Object(g.jsx)("p",{children:c}),Object(g.jsxs)("p",{className:"product__price",children:[Object(g.jsx)("small",{children:"$"}),Object(g.jsx)("strong",{children:s})]}),Object(g.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e){return Object(g.jsx)("p",{children:"\u2b50\ufe0f"})}))})]}),Object(g.jsx)("img",{src:a,alt:""}),Object(g.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:s,rating:n}})},children:"Add to basket"})]})};var w=function(){return Object(g.jsxs)("div",{className:"home",children:[Object(g.jsx)("img",{className:"home__image",src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-halloween-movies-1570051353.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*",alt:""}),Object(g.jsxs)("div",{className:"home__row",children:[Object(g.jsx)(A,{id:12321341,title:"Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future",price:11.96,rating:5,image:"https://www.amazon.in/images/I/91CyhdaumeL.jpg"}),Object(g.jsx)(A,{id:12321341,title:"My Easy Art- Lake under Sunset Wall Art Decor Bird flying Over the Pier in Tropical Island Canvas Pictures Artwork Nature Nautical Landscape 24x24 inch Painting Prints for Home Bathroom",price:36.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51JspS-CkVL._AC_.jpg"})]}),Object(g.jsxs)("div",{className:"home__row",children:[Object(g.jsx)(A,{id:12321341,title:"Apple AirPods Pro",price:329,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"}),Object(g.jsx)(A,{id:12321341,title:"CeraVe Daily Moisturizing Lotion, Face, Body & Hands Lotion for Dry Skin with Hyaluronic Acid, Suitable for Sensitive Skin, Fragrance-Free, Verified Product by CeraVe, 473 mL",price:17.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/717eK%2BvRVAL._AC_SL1500_.jpg"}),Object(g.jsx)(A,{id:12321341,title:"MACBOOK PRO 2019 TOUCHBAR 16 i9-9880H 16 1TB SSD 5500M FPR SILVER MVVM2LL",price:3045.77,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71uedAhaSFL._AC_SL1500_.jpg"})]}),Object(g.jsx)("div",{className:"home__row",children:Object(g.jsx)(A,{id:12321341,title:"ocelo Light Duty Scrub Sponge, 6-Sponges/Pk, 6-Packs (36 Sponges Total)",price:42.51,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/91DTUy16C1L._AC_SL1500_.jpg"})})]})};c(61);var L=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,n=e.rating,i=v(),o=Object(r.a)(i,2),l=(o[0].basket,o[1]);return Object(g.jsxs)("div",{className:"checkoutProduct",children:[Object(g.jsx)("img",{className:"checkoutProduct__image",src:a,alt:""}),Object(g.jsxs)("div",{className:"checkoutProduct__info",children:[Object(g.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(g.jsxs)("p",{className:"checkoutProduct__price",children:[Object(g.jsx)("small",{children:"$"}),Object(g.jsx)("strong",{children:s})]}),Object(g.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e){return Object(g.jsx)("p",{children:"\u2b50\ufe0f"})}))}),Object(g.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},P=(c(62),c(63),c(32)),B=c.n(P);var T=function(){var e=v(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(g.jsxs)("div",{className:"subtotal",children:[Object(g.jsx)(B.a,{renderText:function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{children:["Subtotal (",c.length," items) : ",Object(g.jsx)("strong",{children:"".concat(e)})]}),Object(g.jsxs)("small",{className:"subtotal__gift",children:[Object(g.jsx)("input",{type:"checkbox"})," This order contains a gift \ud83c\udf81"]})]})},decimalScale:2,value:k(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(g.jsx)("button",{children:" Procced to checkout"})]})};var I=function(){var e=v(),t=Object(r.a)(e,1)[0].basket;return Object(g.jsxs)("div",{className:"checkout",children:[Object(g.jsxs)("div",{className:"checkout__left",children:[Object(g.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(g.jsx)("div",{children:Object(g.jsx)("h2",{children:"Your shopping cart is empty"})}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:"checkout__title",children:" Your shopping basket"}),null===t||void 0===t?void 0:t.map((function(e){return Object(g.jsx)(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(g.jsx)("div",{className:"checkout__right",children:Object(g.jsx)(T,{})})]})};c(65);var E=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),o=i[0],u=i[1],h=Object(d.f)();return Object(g.jsxs)("div",{className:"login",children:[Object(g.jsx)(j.b,{to:"/",children:Object(g.jsx)(p.a,{className:"login__logo"})}),Object(g.jsxs)("div",{className:"login__container",children:[Object(g.jsx)("h1",{children:"Sign in"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("h5",{children:"E-mail"}),Object(g.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},type:"email"}),Object(g.jsx)("h5",{children:"Password"}),Object(g.jsx)("input",{value:o,onChange:function(e){return u(e.target.value)},type:"password"}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),l.signInWithEmailAndPassword(c,o).then((function(e){h.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign In"})]}),Object(g.jsx)("p",{children:"By signing-in you agree to Baskify's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),l.createUserWithEmailAndPassword(c,o).then((function(e){h.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerInButton",children:"Create your Baskify Account"})]})]})};var R=function(){var e=v(),t=Object(r.a)(e,2),c=t[0].user,s=t[1];return Object(a.useEffect)((function(){var e=l.onAuthStateChanged((function(e){s(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log(c),Object(g.jsx)(j.a,{children:Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(d.c,{children:[Object(g.jsxs)(d.a,{path:"/checkout",children:[Object(g.jsx)(C,{}),Object(g.jsx)(I,{})]}),Object(g.jsx)(d.a,{path:"/login",children:Object(g.jsx)(E,{})}),Object(g.jsxs)(d.a,{path:"/",children:[Object(g.jsx)(C,{}),Object(g.jsx)(w,{})]})]})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(x,{initialState:{basket:[],user:null},reducer:S,children:Object(g.jsx)(R,{})})}),document.getElementById("root")),D()}},[[67,1,2]]]);
//# sourceMappingURL=main.b1ac722d.chunk.js.map