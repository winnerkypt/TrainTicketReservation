var admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trainticketreservation-3d28c.firebaseio.com",
});

var db = getFirestore();

var users =[
    {
        "firstname" : "Kanyapat",
        "lastname" : "Wittayamanitkul",
        "email" : "winner@mail.com",
        "password" : "kanyapat"
    },
    {
        "firstname" : "Natthakan ",
        "lastname" : "Thaweewatthanaprayun",
        "email" : "mint@mail.com",
        "password" : "natthakan"
    },
    {
        "firstname" : "Charidaporn ",
        "lastname" : "Chuangdonphai",
        "email" : "ploy@mail.com",
        "password" : "charidaporn"
    },
    {
        "firstname" : "Manassinee ",
        "lastname" : "Vejvithan",
        "email" : "fern@mail.com",
        "password" : "manassinee"
    },
    {
        "firstname" : "Buratsakorn ",
        "lastname" : "Boonma",
        "email" : "bew@mail.com",
        "password" : "buratsakorn"
    },
    {
        "firstname" : "Theerut ",
        "lastname" : "Thankan",
        "email" : "gus@mail.com",
        "password" : "theerut"
    },
    {
        "firstname" : "Nuttawat ",
        "lastname" : "Rodsomboon",
        "email" : "nut@mail.com",
        "password" : "nuttawat"
    },
    {
        "firstname" : "Thanawat ",
        "lastname" : "Naeching",
        "email" : "jack@mail.com",
        "password" : "thanawat"
    },
    {
        "firstname" : "Amornpong",
        "lastname" : "Duangchawee",
        "email" : "amorn@mail.com",
        "password" : "amornpong"
    },
    {
        "firstname" : "Chokjaroen ",
        "lastname" : "Tancharoenrat",
        "email" : "ny@mail.com",
        "password" : "chokjaroen"
    }
    
]

users.forEach(function (obj) {
    db.collection("users")
      .add({
        firstname: obj.firstname,
        lastname: obj.lastname,
        email: obj.email,
        password: obj.password
      })
      .then((docRef) => {
        console.log("Document written with ID : " + docRef.id);
      });
  });