import firebase from 'firebase';

    if (!firebase.apps.length) {
      firebase.initializeApp({
          apiKey: "AIzaSyBKBtEL-QudnHUhsxs1zZ5v27-qQGbHA3A",
          authDomain: "childcare-2022.firebaseapp.com",
          databaseURL: "https://childcare-2022-default-rtdb.firebaseio.com",
          projectId: "childcare-2022",
          storageBucket: "childcare-2022.appspot.com",
          messagingSenderId: "526051060615",
          appId: "1:526051060615:web:6a192aeb3586b92fe30122",
          measurementId: "G-HNG1LRC3E1"
      });
    }

export { firebase };