import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAcmuB0rpGWpEoah5x7uc_IJGli8XBzy_I",
    authDomain: "family-cloud-app.firebaseapp.com",
    projectId: "family-cloud-app",
    storageBucket: "family-cloud-app.appspot.com",
    messagingSenderId: "591168501660",
    appId: "1:591168501660:web:37884331e51eaa4a37ba59"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}

export {
    firebase
}
