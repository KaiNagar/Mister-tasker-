export const firebaseService = {
  query,
  removeTask,
  addTask,
  onInit,
  getById
}
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc,
  updateDoc,
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC9KVhNmG_tQxoyZ6A5Tf6wHrBfvDRBO28',
  authDomain: 'master-tasker-72ccf.firebaseapp.com',
  projectId: 'master-tasker-72ccf',
  storageBucket: 'master-tasker-72ccf.appspot.com',
  messagingSenderId: '923894193660',
  appId: '1:923894193660:web:23a2f942615cabcaa96679',
  measurementId: 'G-53C5DH4GRS',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// init services
const db = getFirestore(app)

// collection ref
const colRef = collection(db, 'tasks')

// const unsub = onSnapshot(doc(db, 'cities', 'SF'), (doc) => {
//   console.log('Current data: ', doc.data())
// })

function onInit(cb) {
  return onSnapshot(colRef, (snapshot) => {
    console.log('snapshot :>> 123', snapshot)
    const tasks = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    cb(tasks)
  })
}

// get collection data when page is loaded.
async function query() {
  const snapShot = await getDocs(colRef)
  const tasks = snapShot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })
  return tasks
}

//removing task from collection
function removeTask(taskId) {
  const docRef = doc(db, 'tasks', taskId)
  deleteDoc(docRef)
    .then(() => {
      console.log('task was successfully deleted.')
    })
    .catch((err) => {
      console.error('err :>> ', err)
    })
}

function addTask(task) {
  addDoc(colRef, task)
    .then(() => {
      console.log('task added successfully')
    })
    .catch((err) => {
      console.error('err :>> ', err)
    })
}

async function getById(taskId){
  const docRef = doc(db, 'tasks', taskId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()

}
