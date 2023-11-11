
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
    document.getElementById('precover').remove()
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
        let div = document.getElementById(`scroll_display_item_${i}`)
        if (i == 2){
            div.onclick = ()=>{window.location.href =  portfolio_images[start][1
            ]}
        }
        div.getElementsByTagName('img')[0].src = portfolio_images[start][0]
        start++
    }
}

let p_projects = [
    ['images/laptop.jpeg', '#'],
    ['images/happy1.png', '#'],
    ['images/keyboard4.jpeg', '#'],
    ['images/laptop2.jpeg', '#'],
    ['images/laptop3.jpeg', '#'],
    ['images/laptop4.jpeg', '#'],
    ['images/laptop5.jpeg', '#'],
    ['images/laptop6.jpeg', '#'],
    ['images/datacenter1.jpg', '#'],
    ['images/datacenter2.jpeg', '#'],
    ['images/datacenter3.jpg', '#'],
    ['images/datacenter4.jpeg', '#'],
    ['images/datacenter5.jpeg', '#'],
    ['images/flower.jpg', '#'],
    ['images/office1.jpeg', '#']
]
let p_projects_index_r = 4
let p_projects_index_l = 0
let p_scroll = document.getElementById('portfolio_scroll')
let p_scroll_right = document.getElementById('portfolio_scroll_right')
let p_scroll_position = -72.5
let p_r_pos = 0
let p_r_pos_w = 100;
function portfolio_scroll(movement){
    let current = p_scroll.querySelector('.scroll_current')
    let img = document.createElement('img')
    if (movement == 0){
        p_projects_index_l--
        if (p_projects_index_l < 0){
            p_projects_index_l = p_projects.length - 1;
        }
        img.src = p_projects[p_projects_index_l][0]
    }
    if (movement == 1){
        p_projects_index_r++
        if (p_projects_index_r > p_projects.length -1){
            p_projects_index_r = 0
        }
        img.src = p_projects[p_projects_index_r][0]
    }
    if (movement === 0){ //Moving right
        /* Move the portfolio div to the left */
        p_scroll_position += -50 
        p_scroll.style.left = `${p_scroll_position}vw`
        /* Add a new elemeent to the right */
        let new_p = document.createElement('div')
        new_p.className = 'scroll_display_item'
        new_p.appendChild(img)
        p_scroll.appendChild(new_p)
        /* Make the element on the right of the previous centered element the new center */
        let new_current = current.nextElementSibling
        current.className = 'scroll_display_item'
        new_current.className += ' scroll_current'
    }
    if (movement === 1){
        /* Move the portfolio div to the right */
        p_scroll_position += 50 
        p_scroll.style.left = `${p_scroll_position}vw`
        /* Move the cover div to the left 
           This is because when we move the main div to the right, we're going to get an empty
           space and so we need the cover div to move to the right to make up for the empty space
        */
        p_r_pos += -50
        p_r_pos_w += 50
        p_scroll_right.style.width = `${p_r_pos_w}vw`
        p_scroll_right.style.left = `${p_r_pos}vw`
        /* Add a new elemeent to the left */
        let new_p = document.createElement('div')
        new_p.className = 'scroll_display_item'
        new_p.appendChild(img)
        p_scroll.insertBefore(new_p, p_scroll.children[0])
        /* Make the element on the left of the previous centered element the new center */
        let new_current = current.previousElementSibling
        current.className = 'scroll_display_item'
        new_current.className += ' scroll_current'
    }
}



let portfolio_mobile_left = document.getElementById('portfolio_display_MOBILE_left')
let p_mobile_left_position = 0
let p_moveby = 0
let portfolio_mobile_right = document.getElementById('portfolio_display_MOBILE_right')
let p_mobile_right_width = 0
let p_mobile_right_position = 0
function scroll_display_mobile(direction){
    if ((window.innerWidth - 80) !== p_moveby){
        p_moveby = window.innerWidth - 80;
        p_mobile_right_width = p_moveby
        p_mobile_left_position -= p_mobile_left_position % p_moveby
        console.log('ran')
    }
    let img = document.createElement('img')
    let header = document.createElement('header')
    header.innerText = 'CLEAN HANDS PAINTING AND ARTWORK COMPANY'
    let p = document.createElement('p')
    p.innerText = 'A compact business and portfolio site completed in a month'
    let new_p = document.createElement('div')
    new_p.className = 'scroll_MOBILE_item'
    new_p.appendChild(img)
    new_p.appendChild(header)
    new_p.appendChild(p)
    if (direction == 0){
        p_projects_index_l--
        if (p_projects_index_l < 0){
            p_projects_index_l = p_projects.length - 1;
        }
        img.src = p_projects[p_projects_index_l][0]
        
        p_mobile_left_position -= p_moveby
        portfolio_mobile_left.style.left = `${p_mobile_left_position}px`
        portfolio_mobile_left.appendChild(new_p)
    }
    if (direction == 1){
        p_projects_index_r++
        if (p_projects_index_r > p_projects.length -1){
            p_projects_index_r = 0
        }
        img.src = p_projects[p_projects_index_r][0]
    }
    if (direction === 1){
        p_mobile_left_position += p_moveby
        portfolio_mobile_left.style.left = `${p_mobile_left_position}px`
        p_mobile_right_width += p_moveby
        p_mobile_right_position += p_moveby
        portfolio_mobile_right.style.width = `${p_mobile_right_width}px`
        portfolio_mobile_right.style.left = `-${p_mobile_right_position}px`
        portfolio_mobile_left.insertBefore(new_p, portfolio_mobile_left.children[0])
    }
}
