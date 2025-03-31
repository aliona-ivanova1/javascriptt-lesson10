let maindiv = document.getElementById('wraper')
let closeicon = document.getElementById('close')
let contentpost = document.getElementById('content')
let postoverley = document.getElementById('overley')

//  function ajax(url,fnc){
//    let request = new XMLHttpRequest()
//    request.open('get',url)


// request.addEventListener('load',function(){
//    let requestjs = JSON.parse(this.responseText)
// //    console.log(requestjs);

//    fnc(requestjs)
   
// })
// request.send()
// // 

// }
// ajax('https://jsonplaceholder.typicode.com/posts',function(data){
//     data.forEach(element => {
//         // console.log(element);
//         createpost(element)
        
        
//     });
// })
// 


fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method:'get'
})
.then(function(request){
    console.log(request);
    request.json
    
})
.then(function(requestjs){
    console.log(requestjs);

    requestjs.forEach(element => {
        console.log(element);
        createpost(requestjs)
        
        
    });
    
})

// 
function createpost(item){
  let divelement = document.createElement('div')
  divelement.classList.add('div-post')
//   let btn = document.createElement('button')
//   btn.innerText = 'delete'
//   btn.setAttribute('data-delete-id',item.id)
divelement.setAttribute('data-id',item.id)

  let titleId = document.createElement('h3')
  titleId.textContent = item.id

  let titleNew = document.createElement('h2')
  titleNew.textContent = item.title

  divelement.appendChild(titleId)
  divelement.appendChild(titleNew)
//   divelement.appendChild(btn)
  maindiv.appendChild(divelement)
  console.log(divelement);




//   btn.addEventListener('click',function(e){
//     let deletebtnid = e.target.getAttribute('data-delete-id')
//     // console.log('washla',deletebtnid);
//     let deleteurl = `https://jsonplaceholder.typicode.com/posts/${deletebtnid}`
//     fetch(deleteurl,{
//        method:'delete'
//     })
//     .then((JSON)=> console.log(JSON))
   
    
//   })


divelement.addEventListener('click',function(){
    
    contentpost.innerHTML = ' '
     postoverley.classList.add('clickoverley')
    console.log(this);
    
    let ps = this.getAttribute('data-id')
    console.log(ps);
    
    let linki = `https://jsonplaceholder.typicode.com/posts/${ps}`
    console.log(linki);

    ajax(linki,function(ite){
        console.log(ite);      
        overleycontnt(ite) 
    })
    
    
 
}) 
}
function overleycontnt(item){
     
    let pp = document.createElement('p')
    pp.innerHTML = item.body
    contentpost.appendChild(pp)
    pp.classList.add('pp')


    

}




postoverley.addEventListener('click',function(){
    postoverley.classList.remove('clickoverley')
})
