var firebaseConfig = {
  apiKey: "AIzaSyCXjDFwe7XRDDijBQ-Phun0XPEjt7K3E6M",
  authDomain: "kittwer3.firebaseapp.com",
  projectId: "kittwer3",
  storageBucket: "kittwer3.appspot.com",
  messagingSenderId: "567958458747",
  appId: "1:567958458747:web:48250ede078c3b27792dde"
};
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   roomm = childKey;
  //Start code
  console.log("Room-name ="+ roomm);
  row = "<div class='roomm' id="+roomm+" onclick='redirectToRoomName(this.id)'>#" + roomm+"</div><hr>";
  document.getElementById("outtputt").innerHTML += row;
  //End code
  });});
  getData(); 
}


username=localStorage.getItem("username");
roomm=localStorage.getItem("roomm");
document.getElementById("username").innerHTML= "Welcome "+username+"!";

function makkkee(){
  roomm=document.getElementById("romm").value;
  firebase.database().ref("/").child("romm").update({
        purpose:"adding room name"
  });     
  localStorage.setItem("roomm", roomm);
  window.location="kwittermsgpg.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomm", roomm);
  window.location="kwitter.html"
}

function logoutt(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomm");
  window.location="login.html";
}

function Send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(roomm).push({
        name:username,
        message:msg,
        like:0,
  })

  document.getElementById("msg").value="";
}
