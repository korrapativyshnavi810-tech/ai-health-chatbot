async function send(){

let input=document.getElementById("input");

let chat=document.getElementById("chat");

let user=input.value;

chat.innerHTML+="<p><b>You:</b> "+user+"</p>";

let response=await fetch("http://127.0.0.1:5000/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({message:user})

});

let data=await response.json();

chat.innerHTML+="<p><b>AI:</b> "+data.reply+"</p>";

input.value="";
}
