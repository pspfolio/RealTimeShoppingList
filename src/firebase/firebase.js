import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDd88kI7ssd8pE6GL1GO7vfPZo7xplQ17g',
  authDomain: 'shoplist-adc45.firebaseapp.com',
  databaseURL: 'https://shoplist-adc45.firebaseio.com',
  projectId: 'shoplist-adc45',
  storageBucket: 'shoplist-adc45.appspot.com',
  messagingSenderId: '129365943037'
};

if (!firebase.apps.length) firebase.initializeApp(config);

export const auth = firebase.auth();

export const database = firebase.database();
