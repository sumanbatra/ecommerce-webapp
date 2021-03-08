import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGyUeTDRSMsUfJwhoLp8XCi6qB1qUk_24",
  authDomain: "ecommerce-webapp-b62ca.firebaseapp.com",
  projectId: "ecommerce-webapp-b62ca",
  storageBucket: "ecommerce-webapp-b62ca.appspot.com",
  messagingSenderId: "1096283623579",
  appId: "1:1096283623579:web:d3abea13b355216843b63e",
  measurementId: "G-FJJ8W2S7CG",
});

const auth = firebase.auth();

export { auth };
