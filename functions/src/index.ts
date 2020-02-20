import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const cors = require('cors')({ origin: true });

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

export const initMessage = functions.firestore.document('{chatID}/chat1/messages/{docid}').onCreate(doc => {
    return admin.firestore().doc('{chatID}/chat1/messages/' + doc.id).update({ 'timestamp': admin.firestore.Timestamp, 'likeArr': [] });
});

export const sendMessage = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const message = request.body.messageObj;
        const chatID = request.body.chatID;
        console.log(message);

        if (!message.value || !message.uid || !message.docid || !chatID) {
            response.status(500).send({ "error": "missing values: " });
        } else {
            message.timestamp = Date.now();
            message.likeArr = [];
            message.loaded = true;
            try {
                await admin.firestore().collection('chat').doc(chatID).collection('messages').doc(message.docid).set(message);
                response.send({ "timestamp": message.timestamp });
            }
            catch (err) {
                response.status(500).send(err);
            }
        }
    });
});

export const likeMessage = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const messageObj = request.body.messageObj;
        const user = request.body.user;
        const chatID = request.body.chatID;

        if (!messageObj || !user || !chatID) {
            response.status(500).send({ "error": "Insufficient data: User: " + user + " message: " + messageObj + " chatID: " + chatID });
        } else {
            try {
                let doc;
                if (messageObj.likeArr.includes(user)) {
                    doc = await admin.firestore().collection('chat').doc(chatID).collection('messages').doc(messageObj.docid).update({ "likeArr": admin.firestore.FieldValue.arrayRemove(user) });
                } else {
                    doc = await admin.firestore().collection('chat').doc(chatID).collection('messages').doc(messageObj.docid).update({ "likeArr": admin.firestore.FieldValue.arrayUnion(user) });
                }
                response.send({ "success": doc.writeTime });
            }
            catch {
                response.status(500).send({ "error": "firebase error" });
            }
        }
    });
});
