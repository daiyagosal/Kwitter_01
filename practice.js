
const firebaseConfig = {
    apiKey: "AIzaSyB29cKruThny_20iKcBzEvQ38uTJHT-A74",
    authDomain: "kwitter-e8b85.firebaseapp.com",
    databaseURL: "https://kwitter-e8b85-default-rtdb.firebaseio.com",
    projectId: "kwitter-e8b85",
    storageBucket: "kwitter-e8b85.appspot.com",
    messagingSenderId: "655115975982",
    appId: "1:655115975982:web:5a1f4a9b65fe27c61d8ebf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}