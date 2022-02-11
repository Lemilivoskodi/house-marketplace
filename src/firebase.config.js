import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9v4wm5AaimtoqhVnLitE4VOclEj6eC2U',
  authDomain: 'house-marketplace-app-aeaf2.firebaseapp.com',
  projectId: 'house-marketplace-app-aeaf2',
  storageBucket: 'house-marketplace-app-aeaf2.appspot.com',
  messagingSenderId: '989207789025',
  appId: '1:989207789025:web:8e78ed15fcfe628b57e6a0',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
