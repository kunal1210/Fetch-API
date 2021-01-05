

// fetch data from text file

document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getjson);
document.getElementById('button3').addEventListener('click',getExtranal);



function getText(){

fetch('test.txt')
.then(res => res.text())
.then((data)=>{
let output="";
output =`<li>${data}</li>`;
document.querySelector('.output').innerHTML=output;
})
.catch(err=>console.log(err));

}

// fetch json from json object



function getjson(){

fetch('posts.json')
.then(res =>res.json())
.then(data =>{
let output="";
data.forEach(post=>{
output +=`<li>${post.title}</li>`;
    });
document.querySelector('.output').innerHTML=output;

})
.catch(function(err){
console.log(err);

});


}

// get from extranal API


function getExtranal(){

fetch('https://api.github.com/users')
.then(res =>res.json())
.then(data =>{
let output="";
    data.forEach(user=>{
    output +=`<li>${user.html_url}</li>`;
    });
    document.querySelector('.output').innerHTML=output;

})
.catch(err => console.log(err))


}