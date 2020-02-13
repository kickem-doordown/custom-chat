// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyCJ9Qjkhi5CX1g__lCVd35_kZbFHY1s944",
    authDomain: "custom-chat-7ac90.firebaseapp.com",
    databaseURL: "https://custom-chat-7ac90.firebaseio.com",
    projectId: "custom-chat-7ac90",
    storageBucket: "custom-chat-7ac90.appspot.com",
    messagingSenderId: "1088343649781",
    appId: "1:1088343649781:web:429b122bf3cc6e1ac104bc",
    measurementId: "G-0Y35NE71X9"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();