let prokey=document.getElementById('keyboard')
let proquo=document.getElementById('quotes')
let webdev=document.getElementById('webdev')
let jj=2;
function copy (){
   navigator.clipboard.writeText('jameskoduah171@gmail.com');
  alert("Copied the text: jameskoduah171@gmail.com");
}
function dev(){
  webdev.innerHTML='A JUNIOR THOUGH';
}
function dev2(){
  webdev.innerHTML='WEB DEVELOPER'
}
setInterval(()=>{
  if(jj==1){
    prokey.style.background='url(images/keyboard.JPG)';
    prokey.style.backgroundSize='100% 100%'
    proquo.style.background='url(images/quotes.JPG)';
    proquo.style.backgroundSize='100% 100%';
    jj=2;
  }else if(jj===2){
    prokey.style.background='url(images/keyboard2.JPG)';
    proquo.style.background='url(images/quotes2.JPG)';
    proquo.style.backgroundSize='100% 100%';
    prokey.style.backgroundSize='100% 100%';
    jj=3;
  }else if(jj==3){
    prokey.style.background='url(images/keyboard3.JPG)';
    prokey.style.backgroundSize='100% 100%'
    proquo.style.background='url(images/quotes3.JPG)';
    proquo.style.backgroundSize='100% 100%';
    jj=1;
  }
},4000)