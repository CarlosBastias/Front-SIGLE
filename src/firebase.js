// Archivo: frontend/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Reemplaza este objeto con la configuración de tu proyecto Firebase
// Ve a Firebase Console -> Project Settings -> General -> Your apps -> Firebase SDK snippet -> Config
const firebaseConfig = {
  apiKey: "AIzaSyTuConfiguracionAqui...",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:1234567:web:abcdef"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de Auth para usarla en la App
export const auth = getAuth(app);
