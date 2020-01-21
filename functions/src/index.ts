import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const cors = require('cors')({origin: true});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// export const initMessage = functions.firestore.document('messages/{docid}').onCreate(doc => {
//     const currentTime = Date.now();
//     return admin.firestore().doc('messages/'+doc.id).update({'timestamp': currentTime, 'likeArr': []});
// });

export const sendMessage = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const message = request.body;
        console.log(message);

        if(!message.value || !message.user){
            response.status(500).send({"error": true});
        } else {
            message.timestamp = Date.now();
            message.likeArr = [];
            try {
                await admin.firestore().collection('messages').add(message);
                response.send({"success": true});
            }
            catch {
                response.status(500).send({"error": true});
            }
        }
    });
});
