import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const initMessage = functions.firestore.document('messages/{docid}').onCreate(doc => {
    const currentTime = Date.now();
    return admin.firestore().doc('messages/'+doc.id).update({'timestamp': currentTime, 'likeArr': []});
});
