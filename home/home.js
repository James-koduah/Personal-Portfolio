let floaters = []
var $emitter = new MyEmitter()
let spiceLevel = 0

function spiceUpPage(e){
    let astronautDialouge = [
        [
            {elemType: false, timeout: 1500},
            '<svg class="flare" viewBox="-11 0 34 34" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ae2025" transform="matrix(.413892 .0862234 -.0862234 .413892 -1135.3273 -1495.8263)"> <path d="m3377.19 2978.61 11.48-3.06 3.92 10.44-10.15 4.85z"></path> <path d="m3372.83 2968.55 11.64-4.6-16.08-51.62-17.48 5.55z"></path> </g> </g></svg>'
        ],
        [
            { elemType: 'h5', timeout: 800},
            'Wha...                What!',
        ],
        [
            { elemType: 'h5', timeout: 800, dontClean: true},
            ' What is happening!',
        ],
        [
            { elemType: 'h5', timeout: 800},
            'Wha...      WHERE AM I!',
        ],
        [
            { elemType: 'h4', timeout: 800},
            'HELP ME!'
        ],
        [
            { elemType: 'h4', timeout: 800, dontClean: true, typeSpeed: 80},
            'AHHHHHHHHHHHHHHHHHHHHHHHHH'
        ],
        [
            { elemType: 'h5', timeout: 1000},
            "HAHA!                                        I'm Joking     😂]"
        ],
        [
            { elemType: 'h5', timeout: 2000, dontClean: true},
            "Were you scared?              LOL"
        ],
        [
            { elemType: 'h5', timeout: 1500},
            "I'm here for the Space Inspection.      ]Standard procedure"
        ],
        [
            { elemType: 'header', timeout: 1200, typeSpeed: 45},
            "But...    wait...     uh, where is this?]         Is this Earth?     Mars?     Pluto?"
        ],
        [
            { elemType: 'header', timeout: 3200,},
            "Man, space really messes with your GPS  .           .           . ] Aha! It's working now."
        ],
        [
            { elemType: 'header', timeout: 1200},
            "Hmmmmm       ]It seems I'm on a webpage?"
        ],
        [
            { elemType: 'header', timeout: 1400},
            "Well,                 I’m ready for an adventure.                   Let's go Friend.                Lead the way!"
        ]
    ]
    let astronautEventName = 'astronautEvent'

    if (spiceLevel === 0){
        let astronaut = new Floater('astronaut', astronautEventName, astronautDialouge, floaters) 
        floaters.push(astronaut)
        const rect = e.getBoundingClientRect();
        const x = rect.left + window.scrollX;
        const y = rect.top + window.scrollY;
        $emitter.emit(astronautEventName, {'event': 'start', 'x': x, 'y': y })
        $emitter.on(astronautEventName, (data)=>{
            if (data.detail.event === 'ranD'){
                $emitter.emit(astronautEventName, {'event': 'runD', 'index': false})
            }
        })
        spiceLevel++
    }
}








let popup_active = false

let project_info = {
    'teemboom_comments': {
        image: '/images/teemboomlogo.png',
        header: 'Teemboom Comments',
        body: `My Saas Application. Teemboom comments is a service
                for adding a comments section or chat to any website or app.
                Do you have a Blog? Use Teemboom Comments.
                Just built your first website? Use Teemboom Comments.
                Need to have a chat feature for your Web App? Use Teemboom Comments.`,
        link: 'https://teemboom.com',
        link_text: 'Visit Teemboom'
    },
    'dns_lookup': {
        image: '/images/dnslookup.jpg',
        header: 'DNS LOOKUP TOOL',
        body: `A straightforward tool to look up various DNS records,
                including A, AAAA, CNAME, MX, TXT, SRV, PTR etc. 
                Easily find out how a domain is set up and where it points.`,
        link: 'https://github.com/James-koduah/dns_lookup_tool',
        link_text: 'Github Repository'
    },
    'streamsfire': {
        image: '/images/flame.png',
        header: 'Streams On Fire',
        body: ` A web app that presents live channel and stream data from Twitch,
                ranking them using an algorithm to highlight top-performing streams. 
                It offers various filtering options to help users discover streams across different categories.`,
        link: 'https://streamsonfire.com',
        link_text: 'Visit Streams On Fire'
    },
    'parma': {
        image: '/images/parma.jpg',
        header: 'Parma Hospital Management System',
        body: `A project built with my Co-Dev Alex Ushe. Parma is a 
                healthcare app to manage patient records for hospitals and clinics. 
                It lets users create, update, and delete profiles easily. 
                It provides a centralized software for workers in a hospital.`,
        link: 'https://github.com/James-koduah/parma',
        link_text: 'GitHub Repository'
    },
    'jaskintech': {
        image: '/images/jaskin_tech.jpg',
        header: 'Jaskin Tech',
        body: `An Informational Website I built for my agency to show our services.
               It has a clean look, detailed descriptions, and a blog.`,
        link: 'https://jaskintech.com',
        link_text: 'Visit Jaskin Tech'
    },
    'rockpapersisscors': {
        image: '/images/rockpapersisscors.jpg',
        header: 'Rock Paper Scissiors Game',
        body: `A JavaScript game of chance for when you're bored and want 
                to press some buttons, and win some points, and feel some joy.
                Presents cool animations and smooth gameplay`,
        link: 'https://james-koduah.github.io/Rock-Paper-Scissors/',
        link_text: 'Play this Game'
    },
    'cmdhospital': {
        image: '/images/cmd_hospital.jpg',
        header: 'Command Line Hospital',
        body: `This project holds a special place in my development Journey.
                It is a hospital interface built using Python CMD Module with a JSON file storage. 
                Building this interface improved my knowledge on Python modules, Classes and
                made me understand what DBMS were doing under the hood.`,
        link: 'https://www.youtube.com/watch?v=PSoybo7TTrE&t=8s',
        link_text: 'Watch a Video Demo'
    },
    'jgworks': {
        image: 'images/jgmedia.jpg',
        header: 'JG Media Works',
        body: `I developed an informational website for a client,
                transforming their design into a fully 
                functional site by implementing all interactive features.`,
        link: 'http://jgmediaworks.net/',
        link_text: 'Visit JG Media Works'
    },
    'ballpaddle': {
        image: 'images/ballandpaddle.jpg',
        header: 'Ball And Paddle Game',
        body: `Making this game was a lot of fun, and I think playing it is even better. I invite you to give it a try. 
                I’m sure once you play it, you’ll find it really enjoyable and fun! 
                If not, I’ll have to hire the avengers to convince you!`,
        link: 'https://james-koduah.github.io/Ball-and-paddle-Game/',
        link_text: 'Play this Game'
    },
    'virtualkeyboard': {
        image: 'images/keyboard.jpg',
        header: 'Virtual Keyboard',
        body: ` This project was a fun journey. It is a cool glowing keyboard that
                was mainly built for to excersise my skills in CSS Grid and Javascript. 
                This projects holds a spot as one of my first Github repositories.`,
        link: 'https://james-koduah.github.io/Virtual-keyboard/',
        link_text: 'Visit Live Site'
    },
    'more': {
        image: 'images/shyrobot.png',
        header: 'More Projects',
        body: `Not everything in this group is polished, but each piece tells a story of progress. 
                If these were a painting, they’d be the kind you squint at and say, 
                ‘Is that supposed to be a dog or a cloud?’ 😂`,
        link: '',
        link_text: 'Visit'
    }

}

function projectPopup(project){
    let data = project_info[project]
    let popupClose = document.createElement('div')
    popupClose.className = 'project_popup_close'
    document.body.appendChild(popupClose)
    popupClose.addEventListener('click', closeProjectPopup)
    let popup = document.createElement('div')
    popup.className = 'project_popup'
    document.body.appendChild(popup)
    popup_active = true


    let ppImg = document.createElement('div')
    ppImg.className = 'ppImg'
    popup.appendChild(ppImg)
    let pp_img = document.createElement('img')
    pp_img.src = data.image
    ppImg.appendChild(pp_img)

    let ppCon = document.createElement('div')
    ppCon.className = 'ppCon'
    popup.appendChild(ppCon)
    let ppheader = document.createElement('header')
    ppheader.innerHTML = data.header
    ppCon.appendChild(ppheader)
    let ppP = document.createElement('p')
    ppP.innerHTML = data.body
    ppCon.appendChild(ppP)
    let link = document.createElement('a')
    link.innerHTML = data.link_text
    link.href = data.link
    link.target = '_blank'
    link.className = 'action_button'
    ppCon.appendChild(link)
}
function closeProjectPopup(){
    for (item of document.getElementsByClassName('project_popup')){
        item.remove()
        popup_active = false
    }
    for (item of document.getElementsByClassName('project_popup_close')){
        item.remove()
    }
}

window.addEventListener("popstate", function(event) {
    if (popup_active){
        history.pushState(null, document.title, location.href);
        closeProjectPopup()
    }
    event.preventDefault();
});

// Push an initial state to ensure the popstate event will fire on back
history.pushState(null, document.title, location.href);