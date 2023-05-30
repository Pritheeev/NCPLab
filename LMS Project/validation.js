function firebaseReady() {
    var firebaseConfig = {
        apiKey: "AIzaSyAnDE8R7eu9L9IiYkBQRl29bpJqpFvsEy8",
        authDomain: "new-lms-app-11.firebaseapp.com",
        databaseURL: "https://new-lms-app-11-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "new-lms-app-11",
        storageBucket: "new-lms-app-11.appspot.com",
        messagingSenderId: "646463316406",
        appId: "1:646463316406:web:3642b389e62bbb4fa06117"
    };
    
    firebase.initializeApp(firebaseConfig);
      
    var db = firebase.database();
    return db;
}

function writeDataToFirebase(db, path, data) {
    db.ref("data").on("value", function(snapshot) {
        var data = snapshot.val();
    });
    return new Promise((resolve, reject) => {
      db.ref(path).set(data, function(error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
}  

function signUp()
{
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var answer = document.getElementById('security-question').value;
    var db = firebaseReady();
    writeDataToFirebase(db, name, {
        "username": username,
        "password": password,
        "answer" : answer
      }).then(() => {
        alert('Signed up Successfully! Login Please');
        window.open('login.html','_self');
      }).catch(error => {
        alert(error);
      });
}

function resetPassword()
{

}

function logIn()
{
    
}