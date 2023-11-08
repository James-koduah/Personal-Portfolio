
function dialouge(text, box, callback=false){
    
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
    }, 100)
}
function running_text(){
    let text = '-JASKIN -THEC.^^^^ECH.]-ADD -TECHNOLOGY -TO -YOUR -ASSETS\
    ]-IT -IS -WORTH -THE -INVESTMENT.|**^*****|**^*****|**^*****|**^*****'
    function two(){
        let text = '-A -BUSINESS -LANDING -PAGE.*.*.*]\
        -AN -ECOMMERECE -SITE.*.*.*]\
        -AN -ENTERPRISE -APPLICATION.*.*.*]\
        -UTILIZE -OUR -EXPERTISE]]]*********'
        
        function last(){
            document.getElementById('dialouge2').innerHTML += '<p class="important">\
            <i>F</i>IND&nbsp;<i>S</i>OME&nbsp;<i>I</i>NSPIRATION&nbsp;<i>F</i>OR&nbsp;<i>Y</i>OUR&nbsp;<i>I</i>DEA&nbsp\
            <i><ion-icon name="play-circle"></ion-icon><i></p>'
        }
        dialouge(text, 'dialouge2')
    }
    dialouge(text, 'dialouge1', two)
}

let chatBox = document.getElementById('chatbox')
let chatAction = document.getElementById('chat_action')
let chatAppStore = []
function chatApp(func){
    let actions = []
    function newActions(actions=[]){
        chatAction.innerHTML = ''
        for (let action of actions){
            let div = document.createElement('div')
            div.className = 'chat_action'
            div.innerHTML = action[0]
            div.setAttribute('onclick', `chatApp(${action[1]})`)
            chatAction.appendChild(div)
        }
    }
    function addChat(chat, time=50, callback=false){
        setTimeout(()=>{
            chatBox.appendChild(chat)
            if (callback){
                let h = callback[0]
                h(callback[1])
            }    
        chatBox.scrollBy(0, chatBox.scrollHeight)
        }, time)
    }
    function newChat(HTML, person=false){
        let chat = document.createElement('div')
        chat.innerHTML = HTML
        chat.className = 'chat'
        if (person){chat.className += ' chatright'}
        return chat
    }
    if (func == 0){
        chatBox.innerHTML = ''
        chatAppStore = []
        func = 1
    }
    if (func == 1){
        let start = newChat('Hello Traveller, What Brings You Here...')
        actions.push(['I Need A Personal Custom Site', 1000])
        actions.push(['I Need A Site For My Business', 2000])
        actions.push(['I Need An Ecommerce Store For My Products', 3000])
        actions.push(['I Need An Enterprise Scale Application'])
        addChat(start, 300, [newActions, actions])
    }
    if (func == 1000){
        chat_response = newChat('Hello, I Need A Custom Personal Site', true)
        bot_response = newChat('Sure, Pick An Option Below.<br>1. Personal Portfolio Site<br>2. Event Site')
        actions.push(['Personal Portfolio Site', 1001])
        actions.push(['Event Site', 1002])
        addChat(chat_response)
        addChat(bot_response, 300, [newActions, actions])
    }
    if (func == 2000){
        chat_response = newChat("Hello, I Need A Business Site", true)
        bot_response = newChat("Sure thing Boss, Lemme pull up some options for you to check out.")
        actions.push(['Product Landing Page', 2001]);
        actions.push(['Business Description Site', 2002])
        actions.push(['Portfolio Site', 2003])
        addChat(chat_response)
        addChat(bot_response, 500, [newActions, actions])
        bot_response2 = newChat("\
        1. Product Landing Page<br>\
        2. Business Description Site<br>\
        3. Portfolio Site")
        addChat(bot_response2, 600)
    }
    if (func == -1){
        chatAppStore.pop()
        if (chatAppStore != []){
            chatApp(chatAppStore.pop())
        }
        return
    }
    chatAppStore.push(func)
}
window.onload = ()=>{
    running_text()
    chatApp(1)
    document.getElementById('precover').style.display = 'none'
}





let portfolio_images = [
    ['images/site1.png', 'http://google.com'],
    ['images/site2.png', 'http://google.com'],
    ['images/site3.png', 'http://google.com'],
    ['images/violet6.jpeg', 'http://google.com']
]
let current_portfolio_set = 1
function portfolio(action){
    let start = current_portfolio_set
    let add;
    if (action == 0){
        add=-1
        current_portfolio_set--
        if (current_portfolio_set < 0){
            current_portfolio_set = portfolio_images.length-1
        }
    }
    else{
        add=1
        current_portfolio_set++
        if (current_portfolio_set > portfolio_images.length-1){
            current_portfolio_set = 0
        }
    }
    for (let i = 1; i <= 4; i++){
        if (start > portfolio_images.length-1){
            start = 0
        }
        let div = document.getElementById(`portfolio_project_${i}`)
        if (i == 2){
            div.onclick = ()=>{window.location.href =  portfolio_images[start][1
            ]}
        }
        div.getElementsByTagName('img')[0].src = portfolio_images[start][0]
        start++
    }
}
