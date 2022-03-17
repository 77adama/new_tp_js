const buttons=document.querySelectorAll('button')
const content=document.querySelector('.content')


for (let i = 0; i < buttons.length; i++) {
  // const  divv=document.createElement('div')
  
//  content.appendChild(divv)

buttons[i].addEventListener('click',()=>{
  const  divv=document.createElement('div')
 divv.setAttribute('class', 'message')

divv.classList.add(buttons[i].className)
 divv.innerHTML="Mon projet"
 content.appendChild(divv)
 
setTimeout(()=>{
  content.removeChild(divv);
}, 1000);

 
})
}

// console.log(button)


// function ajouter(){
//   const  small=document.createElement('small')
//   small.innerHTML="Mon projet 4"
// //   small.setAttribute('class','succes')
//     // const labelChamp=document.createElement('label')
//     // labelChamp.setAttribute('class', 'repons')
//     content.appendChild(small)
//     container.appendChild(content)
//     body.appendChild(container)
// }
// button.addEventListener('submit',ajouter)
// button.setAttribute('class', 'succes')

// button.addEventListener('click', ()=>{
//   const  divv=document.createElement('div')
//   divv.setAttribute('class', 'message')
//   divv.innerHTML="Mon projet 4"
// divv.style.backgroundColor='red'

//   content.appendChild(divv)
//       // container.appendChild(content)
//       // body.appendChild(container)
// })

// buttonn.forEach(e => {
  
//   e.addEventListener('click', ()=>{
//     const  divv=document.createElement('div')
//  divv.setAttribute('class', 'message succes')
//  divv.innerHTML="Mon projet 4" 
// // e.setAttribute('class', 'succes')
//     content.appendChild(divv)


//   })
// });


// const buttons = document.querySelectorAll('button')
// for (var i = 0; i < buttons.length; i++) {
//     var self = buttons[i];

//     self.addEventListener('click',  ()=> {  
//      const  divv=document.createElement('div')
//              divv.setAttribute('class', 'message succes')
//              divv.innerHTML="Mon projet 4" 
//              content.appendChild(divv);
//         // prevent browser's default action
//     //     event.preventDefault();

//     //     // call your awesome function here
//     //     MyAwesomeFunction(this); // 'this' refers to the current button on for loop
//     // }, false);
// }

// }


