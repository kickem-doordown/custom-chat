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
        const message = request.body.messageObj;
        const docid = request.body.docid;
        console.log(message);

        if(!message.value || !message.user || !docid){
            response.status(500).send({"error": true});
        } else {
            message.timestamp = Date.now();
            message.likeArr = [];
            try {
                await admin.firestore().collection('messages').doc(docid).set(message);
                response.send({"success": true});
            }
            catch {
                response.status(500).send({"error": true});
            }
        }
    });
});

export const likeMessage = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const messageObj = request.body.messageObj;
        const user = request.body.user;

        if(!messageObj || !user){
            response.status(500).send({"error": "No user or message in request. User: " + user + " message: " + messageObj});
        } else {
            try {
                let doc;
                if(messageObj.likeArr.includes(user)) {
                    doc = await admin.firestore().collection('messages').doc(messageObj.docid).update({"likeArr": admin.firestore.FieldValue.arrayRemove(user)});
                } else {
                    doc = await admin.firestore().collection('messages').doc(messageObj.docid).update({"likeArr": admin.firestore.FieldValue.arrayUnion(user)});
                }
                response.send({"success": doc.writeTime});
            }
            catch {
                response.status(500).send({"error": "firebase error"});
            }
        }
    });
});
