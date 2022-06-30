import {
  firebase,
} from '../components/firebase-config';
class Fire {
  constructor(props) {
    this.init();
    this.observeAuth();
    this.state = {
      data: [],
      username:'',
      isLoading:true,

    };
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBKBtEL-QudnHUhsxs1zZ5v27-qQGbHA3A',
        authDomain: 'childcare-2022.firebaseapp.com',
        databaseURL: 'https://childcare-2022-default-rtdb.firebaseio.com',
        projectId: 'childcare-2022',
        storageBucket: 'childcare-2022.appspot.com',
        messagingSenderId: '526051060615',
        appId: '1:526051060615:web:6a192aeb3586b92fe30122',
        measurementId: 'G-HNG1LRC3E1',
      });
    }
  };

  observeAuth = async () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = async (user) => {
    if (user) {
      try {
        firebase.auth();
        //.signInWithEmailAndPassword(email, password)
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  get name() {
    return firebase.database().ref('users/').child(this.uid).once("value", dataSnapshot => { dataSnapshot.val().username });
  }
        

  parse = (snapshot) => {
    const { createdAt: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const createdAt = new Date(numberStamp);
    const message = {
      _id,
      createdAt,
      text,
      user,
    };
    return message;
  };

  on = (callback) =>
    this.ref
      .limitToLast(1000)
      .on('child_added', (snapshot) => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        createdAt: this.timestamp,
      };
      this.append(message);
    }
  };

  append = (message) => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
