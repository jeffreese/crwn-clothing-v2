import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBMZM_Mt3XwkHf1UOsvVEO28nAwtScw69g",
  authDomain: "crwn-clothing-db-e33a4.firebaseapp.com",
  projectId: "crwn-clothing-db-e33a4",
  storageBucket: "crwn-clothing-db-e33a4.appspot.com",
  messagingSenderId: "1072775647477",
  appId: "1:1072775647477:web:2ab2514311a7ad4f9ab5bc",
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
