const admin = require("firebase-admin");
const keys=require("../keys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});

const bd=admin.firestore();
const usuarios=bd.collection("proyecto-reneBD");
const productos=bd.collection("producto-reneBD");
module.exports={
    usuarios,
    productos
}

//console.log(usuarios);