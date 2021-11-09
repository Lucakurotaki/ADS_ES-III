import * as admin from 'firebase-admin';

var serviceAccount = require("./firebase-admin-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
export const db = admin.firestore();