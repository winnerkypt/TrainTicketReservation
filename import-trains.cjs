var admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trainticketreservation-3d28c.firebaseio.com",
});

var db = getFirestore();

var trains = [
  {
    route: {
      beginning: ["Thailand", "Japan", "USA", "Korea", "Australia", "England"],
      destination: "The Eiffel Tower, Paris, France",
    },
    type: "2nd floor air-conditioned",
    price: 9600,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Statue of Liberty, USA",
    },
    type: "3nd floor fan",
    price: 4800,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Chichen Itza, Mexico",
    },
    type: "1nd floor air-conditioned",
    price: 5200,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Christ The Redeemer, Brazil",
    },
    type: "1nd floor air-conditioned",
    price: 7400,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Great Wall Of China, China",
    },
    type: "3nd floor fan",
    price: 3600,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Machu Picchu, Peru",
    },
    type: "2nd floor fan",
    price: 5100,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Petra, Jordan",
    },
    type: "2nd floor air-conditioned",
    price: 6300,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Colosseum, Italy",
    },
    type: "2nd floor air-conditioned",
    price: 8400,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Taj Mahal, India",
    },
    type: "2nd floor air-conditioned",
    price: 7200,
  },
  {
    route: {
      beginning: ["Brasil", "Japan", "France", "Korea", "Australia", "England"],
      destination: "Temple of the Emerald Buddha, Bangkok, Thailand ",
    },
    type: "2nd floor air-conditioned",
    price: 4200,
  },
  {
    route: {
      beginning: ["Thailand", "Japan", "France", "Korea", "Australia", "Italy"],
      destination: "Big Ben, London, UK",
    },
    type: "2nd floor air-conditioned",
    price: 7200,
  },
];

trains.forEach(function (obj) {
  db.collection("trains")
    .add({
      route: obj.route,
      type: obj.type,
      price: obj.price
    })
    .then((docRef) => {
      console.log("Document written with ID : " + docRef.id);
    });
});
