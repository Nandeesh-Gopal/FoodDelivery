const params = new URLSearchParams(window.location.search)
const message= params.get("message")
if(message){
document.getElementById("mess").innerHTML=message}