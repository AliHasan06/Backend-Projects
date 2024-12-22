
// NOTE :  
//another way in this way error becomes due to type module in which window not recognizes the function in global scope
// onclick pr function not define aaraha h is lye window.function ka name = normal function likha h  (window.abc = function(){})


import {io} from 'https://cdn.socket.io/4.8.1/socket.io.esm.min.js'

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const ul = document.querySelector('#ul')


const socket = io('http://localhost:3000')

socket.on("connect",()=>{
    console.log("connected");

})

form.addEventListener("submit",(event) => {
    event.preventDefault();
socket.emit("message",input.value)

if (!input.value) {
  alert("enter message to sent")
}
console.log("message sent successfully ===>" , input.value );

input.value = ''
})
let arr = []





//delet chat 

window.deletechat= function (index){
  arr.splice(index,1)


renderMessage()


}


//edit chat

window.editChat =  function (index){
  // console.log("value ===>" ,arr[index],index);
  
let updatedValue = prompt("Enter Updated Value")

if (updatedValue) {
  arr[index] = updatedValue
renderMessage()
}

}


if (arr.length === 0) {
  ul.innerHTML = `<h1 class="h1">No Message found</h1>`
}






//render on screen funtion

const renderMessage = ()=>{
  ul.innerHTML = ''

  arr.map((item,index)=>{
    ul.innerHTML += `
    
    <li id="li">${item}
    <button onclick="deletechat(${index})" id="delete">Delete chat</button>
 <button onclick="editChat(${index})" id="edit">Edit chat</button>
    </li>
    `
    
      })
      
      
      
    }
    
    


socket.on("message",(msg)=>{
   
console.log(msg);
  arr.push(msg)
  console.log(arr);
renderMessage()
})













// this is the method of addEventListner


// arr.map((item,index)=>{
// const li =document.createElement('li')
// li.textContent = item

// const button1 = document.createElement('button')
// button1.textContent = "Edit Chat"
// button1.style.margin="10px"
// button1.addEventListener("click",()=>{
//   editChat(index)
// })


// const button2 = document.createElement('button')
// button2.textContent = "delete Chat"

// button2.addEventListener("click",(index)=>{
// deletechat(index)
// })

// li.appendChild(button1)
// li.appendChild(button2)

// ul.appendChild(li)



// })