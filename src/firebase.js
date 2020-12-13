import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCGVXV4f8hGaNz8jsBBxP5iGrRJSW2Nl1o',
  authDomain: 'topville111.firebaseapp.com',
  projectId: 'topville111',
  storageBucket: 'topville111.appspot.com',
  messagingSenderId: '811305554023',
  appId: '1:811305554023:web:33202d48756a7b073f04c2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

//function to get whole data snapshot
export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const {
      title,
      location,
      price,
      images,
      description,
      address,
      type,
      purpose,
      bedrooms,
      bathrooms,
      video,
      cars,
    } = doc.data();
    return {
      id: doc.id,
      title,
      location,
      price,
      images,
      description,
      address,
      type,
      purpose,
      bedrooms,
      bathrooms,
      video,
      cars,
    };
  });
  return transformedCollection;
};
export default firebase;
