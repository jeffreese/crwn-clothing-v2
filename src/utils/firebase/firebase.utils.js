import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBMZM_Mt3XwkHf1UOsvVEO28nAwtScw69g",
  authDomain: "crwn-clothing-db-e33a4.firebaseapp.com",
  projectId: "crwn-clothing-db-e33a4",
  storageBucket: "crwn-clothing-db-e33a4.appspot.com",
  messagingSenderId: "1072775647477",
  appId: "1:1072775647477:web:2ab2514311a7ad4f9ab5bc",
}

initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log("Error creating user", error.message)
    }
  }
  return userDocRef
}
