// import React,{useEffect} from 'react';
// import io from 'socket.io-client';
// var socket=io("http://localhost:9999");

// export default function Form() {
//     useEffect(()=>{
//         var form =document.getElementById("form");
//         var input=document.getElementById('input');
//         var input1=document.getElementById("input1");
//         var messages=document.getElementById('messages')

//         form.addEventListener('submit',function(e){
//             e.preventDefault();
//             let arr=[]
//             if(input.value || input1.value){
//                 console.log(input.value)
//                 console.log(input1.value)
//                 arr.push(input.value,input1.value)
//                 console.log(arr)
//                 socket.on('message',arr);
//                 input.value="";
//                 input1.value="";
//             }
//         })

//         let inputData=[]
//         socket.on('render-msg',function(data){
//             console.log(data)
//             for(let i=0;i<data.length;i++){
//                 inputData[i]=`<li>${data[i].title}</li>`
//             }
//             messages.innerHTML=inputData
//         })

//         socket.on('output message',function(msg){
//             let item=document.createElement('li'); 
//             item.textContent=msg
//             messages.appendChild(item)
//         })
// },[])

//     return (
//         <div className="container">
//             <ul id="messages"></ul>
//             <form id="form" action="">
//                 <h3>Form Data</h3>
//                 Tittle:<input id="input" autocomplete="off" />
//                 Description:<input id="input1" autocomplete="off" />
//                 <button>Send</button>
//             </form>
//         </div>
//     )
// }
