import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCKuIOnAMkFPOyDGToFTIBGA5FWsFubpZk",
  authDomain: "insta-js-5f1e0.firebaseapp.com",
  projectId: "insta-js-5f1e0",
  storageBucket: "insta-js-5f1e0.appspot.com",
  messagingSenderId: "747768305755",
  appId: "1:747768305755:web:240eef1faaa1259603877e"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }