import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMj7t08M8DYRdpTGINh0QJCpkF9Kz9gNE",
    authDomain: "pascal-a4d49.firebaseapp.com",
    projectId: "pascal-a4d49",
    storageBucket: "pascal-a4d49.appspot.com",
    messagingSenderId: "589628498374",
    appId: "1:589628498374:web:14edf520e4c681a9b352c7",
    measurementId: "G-ZHGR0JXK86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;