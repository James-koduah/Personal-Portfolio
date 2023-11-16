
var dialouge = function (text, box, callback=false){
    
    let dialouge_text = document.getElementById(box)
    let text_index = 0
    let running_text = setInterval(()=>{
        let current = text[text_index]
        if (text_index >= text.length ){
            clearInterval(running_text)
            if (callback){
                callback()
            }
            return
        }
        if (current == '-'){//Make the next text Bigger than the rest
            text_index++
            dialouge_text.innerHTML += `<i>${text[text_index]}</i>`
        }
        else if(current == ']'){//Move to the next line
            dialouge_text.innerHTML += '<br>'
        }
        else if(current == '^'){//Delete the previous letter
            dialouge_text.innerHTML = dialouge_text.innerHTML.slice(0, -1)
        }
        else if(current == '*'){}//Do Nothing
        else if(current == '!'){
            dialouge_text.innerHTML = ''
        }
        else{
            dialouge_text.innerHTML += current
        }
        text_index++
    }, 70)
}
function dialouge1(){
    let text = '-JASKIN -THEC.^^^^ECH.]-ADD -TECHNOLOGY -TO -YOUR -ASSETS\
    ]-IT -IS -WORTH -THE -INVESTMENT.**************'
    dialouge(text, 'dialouge1')
}

function dialouge2(){
    let dialouge_div = document.getElementById('dialouge2')
    let display = 'dialouge2_text'
    let stickman1 = document.getElementById('stickman1')
    let stickman1_img = document.getElementById('stickman1_img')
    function stickman1_img_change(img){
        stickman1_img.src = 'images/png_icons/' + img
    }
    stickman1_img.style.display = 'block'
    stickman1_img_change('stickman1.png')
    let dialouge_bottom = dialouge_div.clientHeight - 100
    let dialouge_right = dialouge_div.clientWidth - 60
    function animation1(){
        stickman1.style.top = `${dialouge_bottom}px`
        setTimeout(()=>{
            dialouge('-HELLO -THERE', display, animation2)
            stickman1_img_change('stickman3.png')
        }, 1500)
    }
    function animation2(){
        setTimeout(()=>{
            dialouge('!-LET -ME -SHOW -YOU -THE -DEVELOPMENT -PROCESS', display, animation3)
            stickman1_img_change('stickman4.png')
        }, 2000)
    }
    function animation3(){
        stickman1.style.transition = '2s'
        stickman1.style.left = `${dialouge_right}px`
        stickman1.style.transform = 'scaleX(-1)'
        setTimeout(()=>{
            dialouge('!-FIRST: -YOU -GIVE -US -A -CALL', display)
        }, 2000)
    }
    animation1()
}

