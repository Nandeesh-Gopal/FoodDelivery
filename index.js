console.log("script is running")
const params =new URLSearchParams(window.location.search)
const messages=params.get("message")
if(messages){
document.getElementById("message").innerHTML=messages;}