import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore()

export default {
  firebase, db
}