function login(){
    username= document.getElementById("sign_up_place").value;
    localStorage.setItem("username", username);
    window.location="kwitter_room.html";
}