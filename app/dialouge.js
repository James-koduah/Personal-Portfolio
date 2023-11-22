
var dialouge = function (text, box, callback=false, speed=70){
    
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
    }, speed)
}
function dialouge1(){
    let header = '-ADD -TECHNOLOGY -TO -YOUR -ASSETS'
    let subheader = 'We help people get the tech they need, making sure everyone has the tools they want.]\
                      From Websites to Database Systems, we got you covered.'
    // ]-IT -IS -WORTH -THE -INVESTMENT.**************'
    dialouge(header, 'dialouge1_header', ()=>{
        dialouge(subheader, 'dialouge1_subheader', ()=>{
            setTimeout(() => {
                dialouge2()
            }, 1000);
        }, 50)
    })

}

function dialouge2(){
    let dialouge_div = document.getElementById('dialouge2')
    dialouge_div.style.display = 'flex'
    // if (window.innerWidth < 550){
    //     document.getElementById('dialouge1').style.display = 'none'
    // }
    if (window.innerWidth > 550){
        dialouge_div.style.boxShadow = '0px 0px 3px 3px var(--purple-soft)'
    }
    // dialouge_div.style.background = 'linear-gradient(22deg, #0c001b , #1e0638 43% 56%, #110023)'
    dialouge_div.style.background = '#fafafa'
    let display = 'dialouge2_text'
    let bullets_display = 'dialouge2_text2'
    let image_div = document.getElementById('stickman1')
    let stickman1_img = document.getElementById('stickman1_img')
    function stickman1_img_change(img){
        stickman1_img.src = 'images/png_icons/' + img
    }
    stickman1_img.style.display = 'block'
    let dialouge_bottom = dialouge_div.clientHeight - 100
    let dialouge_right = dialouge_div.clientWidth - 100

    let frame1_text = '-HELLO -THERE'
    let frame2_text = '!-LET -ME -SHOW -YOU -THE -WEB -DEVELOPMENT -PROCESS'
    let frame3_text = '!-FIRST: -YOU -GIVE -US -A -CALL'
    let frame4_text = '!-THEN -WE -DISCUSS -THE -PURPOSE -OF -YOUR -WEBSITE******'
    let frame4_bullets = '-WHAT -IS -THE -SITE -ABOUT...-?]\
                         -WHO -ARE -YOUR -TAGERT -AUDIENCE...-?]\
                         -WHAT -PRODUCT -OR -SERVICE -DO -YOU -OFFER...-?'
    let frame5_text = '!-THIRD: -THE -SCOPE -OF -THE -PROJECT'
    let frame6_text = '!-BASED -ON -YOUR -BUDJECT -AND -RESOURCES, -WE -ESTIMATE:********'
    let frame6_bullets = "-THE -NUMBER -OF -WEBPAGES -TO -CREATE***]\
                          -THE -SITE'S -FEATURES, -AND -OTHER -CRITICAL -REQUIREMENTS"
    let frame7_text = '!-THEN -OUR -TEAM -GOES -TO -WORK'
    let frame8_text = '!-WE -DESIGN -THE -SITE'
    let frame9_text = '!-WE -ADD -CONTENT'
    let frame10_text = '!-THEN]********-WE -GO -LIVE.'



    function frame1(){
        image_div.style.top = `${dialouge_bottom}px`
        setTimeout(()=>{
            dialouge(frame1_text, display, frame2)
            stickman1_img_change('stickman_black2.png')
        }, 1500)
    }
    function frame2(){
        setTimeout(()=>{
            dialouge(frame2_text, display, frame3)
            stickman1_img_change('stickman_black3.png')
        }, 2000)
    }
    function frame3(){
        image_div.style.transition = '2s'
        image_div.style.left = `${dialouge_right}px`
        image_div.style.transform = 'scaleX(-1)'
        setTimeout(()=>{
            stickman1_img_change('stickman_black4.png')
            image_div.style.transition = '0s'
            image_div.style.transform = 'scaleX(1)'
            dialouge(frame3_text, display, frame4)
        }, 2000)
    }
    function frame4(){
        setTimeout(()=>{
            stickman1_img_change('stickman_black5.png')
            dialouge(frame4_text , display, ()=>{
                dialouge(frame4_bullets, bullets_display, frame5)
            })
        }, 3000)
    }
    function frame5(){
        setTimeout(()=>{
            image_div.style.transition = '2s'
            image_div.style.left = '0px'
            stickman1_img_change('stickman_black6.png')
            dialouge('!', bullets_display)
            dialouge(frame5_text, display, frame6)
        }, 2000)
    }
    function frame6(){
        setTimeout(()=>{
            image_div.style.transition = '0s'
            stickman1_img_change('stickman_black7.png')
            dialouge(frame6_text, display, ()=>{
                dialouge(frame6_bullets, bullets_display, frame7)
            })
        }, 2500)
    }
    function frame7(){
        setTimeout(()=>{
            stickman1_img_change('stickman_black8.png')
            dialouge('!', bullets_display)
            dialouge(frame7_text, display, frame8)
        }, 1500)
    }
    function frame8(){
        setTimeout(()=>{
            stickman1_img_change('sitemap_black1.png')
            dialouge(frame8_text, display, frame9)
        }, 2000)
    }
    function frame9(){
        setTimeout(() => {
            dialouge(frame9_text, display, ()=>{
                stickman1_img_change('sitemap_black2.png')
                dialouge(']-TEXT', display, ()=>{
                    setTimeout(() => {
                        stickman1_img_change('sitemap_black3.png')
                        dialouge(']-IMAGES... ETC', display, frame10)                        
                    }, 1000);
                })
            })
        }, 2000);
    }
    function frame10(){
        setTimeout(() => {
            stickman1_img_change('global.png')
            image_div.style.transitionDuration = '20s'
            image_div.style.transform = ''
            image_div.style.transform = 'rotate(18000deg)'   
            dialouge('!', bullets_display)
            dialouge(frame10_text, display, ()=>{
                setTimeout(() => {
                    dialouge('Hello World', bullets_display)                 
                }, 2000);
            })
        }, 2000);
    }
    frame1()
}

