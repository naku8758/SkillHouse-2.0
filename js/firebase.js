// js/firebase.js
// Inicializa Firebase (App, Authentication y Firestore) usando el SDK modular
// vía CDN. El proyecto no tiene un bundler (webpack/vite), por eso se usa la
// versión CDN en lugar de importar desde "firebase/app" (eso solo funciona
// con un bundler o con Node).

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Configuración de tu app web de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_Eie3fdJPEnwofBC9vwgQML_kwLgWIh8",
  authDomain: "skillhouse-64b02.firebaseapp.com",
  projectId: "skillhouse-64b02",
  storageBucket: "skillhouse-64b02.firebasestorage.app",
  messagingSenderId: "718978028510",
  appId: "1:718978028510:web:ae7a6858141f9e39fd434f"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
