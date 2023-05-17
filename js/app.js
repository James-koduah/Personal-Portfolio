let webdev=document.getElementById('webdev')
let ball=document.getElementById('ball')
let nn=document.getElementById('allq')
let pbtn = document.getElementById("my_projects")
let mm= document.getElementById('body')
let display_text = document.getElementById('display_text')

text_display = "Welcome[The name is James[A Software Engineer \
based in Ghana[Here to help you build agile and scalable software \
solutions[As a Full Stack Developer I give quality service in \
both the Front and Backend[\
C____ Python_____ Javascript____ React____ SQL____ Bash____ Puppet____\
C++____ Java[Whatever you need just contact me"
display_text.innerHTML = ''
text_length = text_display.length
text_num = 0
console.log(text_display[text_num])
text = setInterval(()=>{
  if (text_display[text_num] == '['){
    // Enter a newline character
    display_text.innerHTML += '<br>'
  }
  else if(text_display[text_num] == ' '){
    // Enter a space character (Its impossible to enter normally)
    display_text.innerHTML += ` ${text_display[text_num + 1]}`
    text_num++
  }
  else{
    display_text.innerText += text_display[text_num]
  }
  if (text_num == text_length - 1){
    clearInterval(text)
    display_text.style.borderWidth = '0.1vw'
  }
  text_num += 1
  
}, 50)


if(navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) || 
    navigator.userAgent.match(/iPod/i) || 
    navigator.userAgent.match(/BlackBerry/i) || 
    navigator.userAgent.match(/Windows Phone/i)) {
  // the user is using a mobile device, so redirect to the mobile version of the website
  if (screen.width < 400)
  {
  window.location = "https://james-koduah.github.io/mobile-portfolio/";
  }
}



let jj=2;
function copy (){
   navigator.clipboard.writeText('jameskoduah171@gmail.com');
  alert("Copied the text: jameskoduah171@gmail.com");
}



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
    pbtn.innerHTML = "My Projects"
    
  pbtn.style.borderStyle = "none"
    nn.className=''
    return aaaaa=false
  }
  if(aaaaa===false){
  nn.className='vvv'
  nn.style.zIndex='100'
  nn.style.opacity='1'
  pbtn.innerHTML = "Close Projects"
  pbtn.style.borderStyle = "solid"
  pbtn.style.borderColor = "red"
  return aaaaa=true
  }
}




function remo(){
  document.addEventListener('click', function fff(){
    alll()
    return document.removeEventListener('click', fff)
  })
 
}

