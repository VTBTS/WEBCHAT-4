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
      console.log(firebase_message_id);
      console.log(message_data);
      name=message_data['name'];
      message=message_data['message'];
      like=message_data['like'];
      name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value="+like+"onlclick='updatelike(thish.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button></hr>";

      row=name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("puttputt").innerHTML+=row;
      //End code
      });});
      getData();
}
username=localStorage.getItem("username");
roomm=localStorage.getItem("roomm");

function makkkee(){
      roomm=documemnt.getElementById("romm").value;
      firebase.database().ref("/").child(romm).update({
            purpose:"adding room name"
      });     
      localStorage.setItem("roomm", roomm);
      window.location="kwitter.html";
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

function pls(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomm).push({
            name:username,
            message:msg,
            like:0,
      })

      document.getElementById("msg").value="";
}

function updatelike(){
      console.log("clicked on like button-" +message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref("/").child(romm).update({
      like:updated_likes,
      });
}