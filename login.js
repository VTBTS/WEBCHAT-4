function add(){
    username=document.getElementById("name").value;
    localStorage.setItem("username", username);
    window.location="kwitter.html";
}