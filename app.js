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
let nn=document.getElementById('allq')
var aaaaa=false
let bb;
let oo=0
let pp=1
function alll(){
  if(aaaaa==true){
    bb=setInterval(()=>{
      nn.style.opacity=pp
      nn.style.left=oo+'%'
      oo--
      pp-=0.01
    },10)
    setTimeout(() => {
      nn.style.opacity='0'
      nn.style.zIndex='0'
      clearInterval(bb)
      nn.style.left='0%'
      oo=0
      pp=1
    }, 600);
    
    nn.className=''
    return aaaaa=false
  }
  if(aaaaa===false){
  nn.className='vvv'
  nn.style.zIndex='100'
  nn.style.opacity='1'
  return aaaaa=true
  }
}


let mm= document.getElementById('body')

function remo(){
  document.addEventListener('click', function fff(){
    alll()
    return document.removeEventListener('click', fff)
  })
 
}
