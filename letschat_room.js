// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCLEFHxEiXhYFB0b0rJQXuHZkkwx1um_g4",
      authDomain: "lets-chat-2209.firebaseapp.com",
      databaseURL: "https://lets-chat-2209-default-rtdb.firebaseio.com",
      projectId: "lets-chat-2209",
      storageBucket: "lets-chat-2209.appspot.com",
      messagingSenderId: "1058427248755",
      appId: "1:1058427248755:web:272a1e0d61dfadf0ffca06"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
    
          window.location = "letschat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "letschat.html";
}
