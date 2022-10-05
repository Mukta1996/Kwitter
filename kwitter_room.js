// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDgkfOJSqTFPCaAlljQob9eZxTkJAnWO1g",
      authDomain: "kwitter-2b9c7.firebaseapp.com",
      databaseURL: "https://kwitter-2b9c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-2b9c7",
      storageBucket: "kwitter-2b9c7.appspot.com",
      messagingSenderId: "254488637237",
      appId: "1:254488637237:web:94ca51953a47e13ac2a67c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name",
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase
            .database()
            .ref("/")
            .on("value", function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        console.log("Room Name - " + Room_names);
                        row =
                              "<div class='room_name' id=" +
                              Room_names +
                              " onclick='redirectToRoomName(this.id)' >#" +
                              Room_names +
                              "</div><hr>";
                        document.getElementById("output").innerHTML += row;
                  });
            });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}